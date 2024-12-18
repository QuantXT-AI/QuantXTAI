import { env } from "@/env";
import { WalletAddressType } from "@/utils/address-validator";
import { unstable_cache } from "next/cache";

export interface PriceData {
  value: number;
  updateUnixTime: number;
  updateHumanTime: string;
  priceChange24h: number;
}

interface PriceResponse {
  success: boolean;
  data: PriceData;
}

export const getPrice = async (
  tokenAddress: string,
  addressType: WalletAddressType
): Promise<PriceResponse> => {
  const priceResponse = await fetch(
    `https://public-api.birdeye.so/defi/price?address=${tokenAddress}`,
    {
      headers: {
        accept: "application/json",
        "X-API-KEY": env.BIRDEYE_API_KEY,
        "x-chain": addressType,
      },
    },
  );

  if (!priceResponse.ok) {
    throw new Error("Failed to fetch price data");
  }

  return priceResponse.json();
};

export const getCachedPrice = (tokenAddress: string, addressType: WalletAddressType) => {
  return unstable_cache(
    async () => {
      return getPrice(tokenAddress, addressType);
    },
    ["birdeye", "price", tokenAddress],
    {
      tags: ["birdeye", `birdeye_price_${tokenAddress}`],
      revalidate: 15 * 60, // Cache for 15 minutes
    },
  )();
};
