const STABLECOIN_ADDRESSES = {
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
};

// Helper function to check if token is a stablecoin
export function isStablecoin(address: string): boolean {
  return Object.values(STABLECOIN_ADDRESSES).includes(address);
}

// Helper function to get the checker link
export function getCheckerLink(address: string, walletAddress: string) {
  return `https://dexscreener.com/ethereum/${address}?maker=${walletAddress}`;
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
