import type { InitiatePredictionResponse } from "@/app/types";
import { CHARACTERS } from "@/config";
import { CHATFLOW_MAPPING } from "@/config";
import { env } from "@/env";
import { FlowiseClient } from "flowise-sdk";

export async function getInitialMessage({
  character,
  walletAddress,
}: {
  character: string;
  walletAddress: string | undefined;
}) {
  if (!walletAddress) {
    return Promise.resolve({
      text: "Hello! Please insert your Ethereum address or Solana address first.",
    } as InitiatePredictionResponse);
  }

  const characterName = CHARACTERS.find((c) => c.id === character)?.name;
  const question = "Say hi and introduce yourself";

  const client = new FlowiseClient({
    baseUrl: "https://flow.kata.ai",
    apiKey: env.AI_API_KEY,
  });

  return client.createPrediction({
    chatflowId: CHATFLOW_MAPPING.FAQ,
    question,
    overrideConfig: {
      vars: {
        wallet_address: walletAddress,
        character: characterName,
      },
    },
  }) as Promise<InitiatePredictionResponse>;
}
