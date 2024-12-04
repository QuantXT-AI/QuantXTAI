const STABLECOIN_ADDRESSES = {
  USDC: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  SOL: "So11111111111111111111111111111111111111112",
};

// Helper function to check if token is a stablecoin
export function isStablecoin(address: string): boolean {
  return Object.values(STABLECOIN_ADDRESSES).includes(address);
}

// Helper function to get the checker link
export function getCheckerLink(address: string, walletAddress: string) {
  return `https://dexscreener.com/solana/${address}?maker=${walletAddress}`;
}
