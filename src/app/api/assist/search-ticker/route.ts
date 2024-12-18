import { getCachedSearchTicker, searchTicker } from "@/data/services/search-ticker";
import { SearchTickerRequestSchema } from "@/dto";
import { formatZodError } from "@/lib/utils";

export async function POST(request: Request) {
  const body = await request.json();

  const result = SearchTickerRequestSchema.safeParse(body);

  if (!result.success) {
    return Response.json(formatZodError(result.error), { status: 400 });
  }

  const { tickerQuery } = result.data;
  const tokenAddress = await searchTicker(tickerQuery);

  return Response.json({ tokenAddress });
}
