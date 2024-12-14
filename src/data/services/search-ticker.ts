import { unstable_cache } from "next/cache";

// Updated interface to match DexScreener response
export interface SearchTickerData {
  chainId: string;
  dexId: string;
  pairAddress: string;
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceUsd: string;
  liquidity: {
    usd: number;
  };
}

interface SearchTickerResponse {
  schemaVersion: string;
  pairs: SearchTickerData[];
}

export const searchTicker = async (ticker: string): Promise<string | null> => {
  const normalizedTicker = normalizeSymbol(ticker);

  // Try ticker/USDC first
  let searchResponse = await fetch(
    `https://api.dexscreener.com/latest/dex/search?q=${encodeURIComponent(`${normalizedTicker}/USDC`)}`,
    {
      headers: {
        accept: "application/json",
      },
    },
  );

  let searchData = (await searchResponse.json()) as SearchTickerResponse;

  if (!searchResponse.ok) {
    throw new Error("Failed to fetch search ticker data");
  }

  // If no results, try ticker/WETH
  if (!searchData.pairs || searchData.pairs.length === 0) {
    searchResponse = await fetch(
      `https://api.dexscreener.com/latest/dex/search?q=${encodeURIComponent(`${normalizedTicker}/WETH`)}`,
      {
        headers: {
          accept: "application/json",
        },
      },
    );
    searchData = (await searchResponse.json()) as SearchTickerResponse;
  }

  // Filter for Ethereum pairs and matching symbols
  const matchingPairs = searchData.pairs?.filter(
    (pair) =>
      pair.chainId === "ethereum" &&
      isSymbolMatch(normalizedTicker, pair.baseToken.symbol),
  );

  // Return the first matching pair's base token address
  if (matchingPairs && matchingPairs.length > 0) {
    return matchingPairs[0].baseToken.address;
  }

  return null;
};

export const getCachedSearchTicker = (ticker: string) => {
  const normalizedTicker = normalizeSymbol(ticker);
  return unstable_cache(
    async () => {
      return searchTicker(ticker);
    },
    ["dexscreener", "search-ticker", normalizedTicker],
    {
      tags: ["dexscreener", `dexscreener_search-ticker_${normalizedTicker}`],
      revalidate: 30 * 24 * 60 * 60, // Cache for 30 days
    },
  )();
};

export const normalizeSymbol = (symbol: string): string => {
  // Remove $, spaces, and convert to uppercase
  return symbol.replace(/[$\s]/g, "").toUpperCase();
};

export const isSymbolMatch = (
  inputSymbol: string,
  resultSymbol: string,
): boolean => {
  const normalizedInput = normalizeSymbol(inputSymbol);
  const normalizedResult = normalizeSymbol(resultSymbol);
  return (
    normalizedResult.includes(normalizedInput) ||
    normalizedInput.includes(normalizedResult)
  );
};
