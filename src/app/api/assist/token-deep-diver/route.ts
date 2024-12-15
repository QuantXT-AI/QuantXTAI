import {
  type TokenOverviewResponse,
  getCachedTokenOverview,
} from "@/data/services/token-overview";
import {
  type TokenSecurityResponse,
  getCachedTokenSecurity,
} from "@/data/services/token-security";
import { TokenAddressRequestSchema } from "@/dto";
import { formatZodError } from "@/lib/utils";

export async function POST(request: Request) {
  const body = await request.json();

  const result = TokenAddressRequestSchema.safeParse(body);

  if (!result.success) {
    return Response.json(formatZodError(result.error), { status: 400 });
  }

  const { tokenAddress } = result.data;

  const [overview, security] = await Promise.all([
    getCachedTokenOverview(tokenAddress),
    getCachedTokenSecurity(tokenAddress),
  ]);

  if (!overview || !security) {
    return Response.json(
      {
        error: "Token not found",
      },
      { status: 404 },
    );
  }

  return Response.json({
    llmFriendlyDescription: generateDescription(
      tokenAddress,
      overview,
      security,
    ),
  });
}

// Helper function to generate the description
function generateDescription(
  tokenAddress: string,
  overview: TokenOverviewResponse,
  security: TokenSecurityResponse,
) {
  const currentPhase =
    !overview.data.vBuy1h || !overview.data.vSell1h
      ? "Failed to fetch"
      : overview.data.vBuy1h > overview.data.vSell1h
        ? "Accumulation (great news)"
        : "Dumping (bad news / be careful)";

  const netVolume =
    !overview.data.vBuy1h || !overview.data.vSell1h
      ? "Failed to fetch"
      : `$${(overview.data.vBuy1h - overview.data.vSell1h).toFixed(2)}`;

  // Add EVM-specific security checks
  const securityWarnings = [];
  if (security.data.canTakeBackOwnership === "1")
    securityWarnings.push("⚠️ Contract can take back ownership");
  if (security.data.hiddenOwner === "1")
    securityWarnings.push("⚠️ Hidden owner detected");
  if (security.data.isHoneypot === "1")
    securityWarnings.push("⚠️ Potential honeypot");
  if (security.data.isMintable === "1")
    securityWarnings.push("⚠️ Token is mintable");

  return `
This is a detailed analysis of the token at address ${tokenAddress}:

OVERVIEW:
- Token Name: ${overview.data.name} (${overview.data.symbol})
- Current Price: $${overview.data.price}
- Market Cap: $${overview.data.mc}
- Real Market Cap: $${overview.data.realMc}
- Total Supply: ${overview.data.supply}
- Circulating Supply: ${overview.data.circulatingSupply}
- Decimals: ${overview.data.decimals}
- Number of Holders: ${overview.data.holder}
- Total Liquidity: $${overview.data.liquidity}

TRADING VOLUME (1h):
- Buy Volume: $${overview.data.vBuy1h || "Failed to fetch"}
  * Change: ${overview.data.vBuy1hChangePercent || "Failed to fetch"}%
- Sell Volume: $${overview.data.vSell1h || "Failed to fetch"}
  * Change: ${overview.data.vSell1hChangePercent || "Failed to fetch"}%
- Current Phase: ${currentPhase} (1h)
  * Net Volume: ${netVolume}

SECURITY ANALYSIS:
- Creator Address: ${security.data.creatorAddress}
- Creator Balance: ${security.data.creatorBalance} tokens (${security.data.creatorPercentage}% of supply)
- Contract Features:
  * Open Source: ${security.data.isOpenSource === "1" ? "Yes" : "No"}
  * Proxy Contract: ${security.data.isProxy === "1" ? "Yes" : "No"}
  * Anti-Whale: ${security.data.isAntiWhale === "1" ? "Yes" : "No"}
  * Buy Tax: ${security.data.buyTax}%
  * Trading Cooldown: ${security.data.tradingCooldown === "1" ? "Yes" : "No"}
  * Transfer Pausable: ${security.data.transferPausable === "1" ? "Yes" : "No"}

SECURITY WARNINGS:
${securityWarnings.length > 0 ? securityWarnings.join("\n") : "No major security concerns detected"}

LIQUIDITY ANALYSIS:
- Number of LP Holders: ${security.data.lpHolderCount}
- LP Total Supply: ${security.data.lpTotalSupply}
${security.data.lpHolders?.[0] ? `- Largest LP Holder: ${security.data.lpHolders[0].address} (${security.data.lpHolders[0].percent}%)` : ""}
`.trim();
}
