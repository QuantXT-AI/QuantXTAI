import { determineWalletAddressType, WalletAddressType } from "@/utils/address-validator";

const STABLECOIN_ADDRESSES_ETH = {
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
};

const STABLECOIN_ADDRESSES_SOL = {
  USDC: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  SOL: "So11111111111111111111111111111111111111112",
};

// Helper function to check if token is a stablecoin
export function isStablecoin(address: string): boolean {
  const addressType = determineWalletAddressType(address);
  if (addressType === WalletAddressType.ETH) {
    return Object.values(STABLECOIN_ADDRESSES_ETH).includes(address);
  }
  return Object.values(STABLECOIN_ADDRESSES_SOL).includes(address);
}

// Helper function to get the checker link
export function getCheckerLink(address: string, walletAddress: string, chain: string) {
  return `https://dexscreener.com/${chain}/${address}?maker=${walletAddress}`;
}

export const EXCLUDED_TOKENS = [
  "USDC",
  "USDT",
  "USDE",
  "SOL",
  "WSOL",
  "ETH",
  "WETH",
  "BTC",
  "WBTC",
  "WSTETH",
  "STETH",
] as const;

export const isExcludedToken = (symbol: string): boolean => {
  return EXCLUDED_TOKENS.some(
    (token) => symbol.toUpperCase() === token.toUpperCase(),
  );
};
