import { env } from "@/env";
import { unstable_cache } from "next/cache";

export interface TokenSecurityData {
  creatorAddress: string | null;
  creatorOwnerAddress: string | null;
  ownerAddress: string | null;
  ownerOfOwnerAddress: string | null;
  creationTx: string | null;
  creationTime: string | null;
  creationSlot: number | null;
  mintTx: string | null;
  mintTime: string | null;
  mintSlot: number | null;
  creatorBalance: number | null;
  ownerBalance: number | null;
  ownerPercentage: number | null;
  creatorPercentage: number | null;
  metaplexUpdateAuthority: string | null;
  metaplexOwnerUpdateAuthority: string | null;
  metaplexUpdateAuthorityBalance: number;
  metaplexUpdateAuthorityPercent: number;
  mutableMetadata: boolean;
  top10HolderBalance: number;
  top10HolderPercent: number;
  top10UserBalance: number;
  top10UserPercent: number;
  isTrueToken: boolean | null;
  totalSupply: number;
  preMarketHolder: unknown[]; // You might want to define a specific type for this
  lockInfo: unknown | null; // You might want to define a specific type for this
  freezeable: boolean | null;
  freezeAuthority: string | null;
  transferFeeEnable: boolean | null;
  transferFeeData: unknown | null; // You might want to define a specific type for this
  isToken2022: boolean;
  nonTransferable: boolean | null;
}

export interface TokenSecurityResponse {
  data: TokenSecurityData;
  success: boolean;
}

export const getTokenSecurity = async (
  tokenAddress: string,
): Promise<TokenSecurityResponse> => {
  const response = await fetch(
    `https://public-api.birdeye.so/defi/token_security?address=${tokenAddress}`,
    {
      headers: {
        accept: "application/json",
        "X-API-KEY": env.BIRDEYE_API_KEY,
        "x-chain": "ethereum",
      },
    },
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(
      `Error fetching token security: ${response.status} ${response.statusText}`,
    );
    console.error(`Response body: ${JSON.stringify(data)}`);
    throw new Error("Failed to fetch token security");
  }

  return data as TokenSecurityResponse;
};

export const getCachedTokenSecurity = (tokenAddress: string) => {
  return unstable_cache(
    async () => {
      return getTokenSecurity(tokenAddress);
    },
    ["birdeye", "token-security", tokenAddress],
    {
      tags: ["birdeye", `birdeye_token-security_${tokenAddress}`],
      revalidate: 15 * 60, // Cache for 15 minutes
    },
  )();
};
