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
  const creationDate = new Date(
    Number(security.data.creationTime ?? "0") * 1000,
  );
  const formattedCreationTime = creationDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

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
- Creation Time: ${formattedCreationTime}
- Creator Address: ${security.data.creatorAddress}
- Creator Balance: ${security.data.creatorBalance} tokens (${security.data.creatorPercentage}% of supply)
- Top 10 Holders Control: ${security.data.top10HolderPercent}% of supply
- Token Standard: ${security.data.isToken2022 ? "Token-2022" : "Token"}
- Security Features:
  * Freezeable: ${security.data.freezeable ? "Yes" : "No"}
  * Non-Transferable: ${security.data.nonTransferable ? "Yes" : "No"}
  * Transfer Fee Enabled: ${security.data.transferFeeEnable ? "Yes" : "No"}
  * Mutable Metadata: ${security.data.mutableMetadata ? "Yes" : "No"}
`.trim();
}
