import { env } from "@/env";
import { ethers } from "ethers";

export async function resolveENS(
  ensNameOrAddress: string,
): Promise<string | null> {
  try {
    // Check if it's already an Ethereum address
    if (ethers.isAddress(ensNameOrAddress)) {
      return ensNameOrAddress;
    }

    // If it's potentially an ENS name, try to resolve it
    const ensString: string = ensNameOrAddress;
    if (ensString.endsWith(".eth")) {
      const provider = new ethers.JsonRpcProvider(
        env.NEXT_PUBLIC_ETHEREUM_RPC_URL,
      );
      const address = await provider.resolveName(ensNameOrAddress);
      return address;
    }

    return null;
  } catch (error) {
    console.error("Error resolving ENS:", error);
    return null;
  }
}
