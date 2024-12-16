import { InitiatePredictionResponse } from "@/app/types";
import { CHARACTERS } from "@/config";
import { env } from "@/env";
import { CHATFLOW_MAPPING } from "@/config";
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
      text: "Hello! Please insert your Ethereum wallet address first.",
    } as InitiatePredictionResponse);
  }

  const characterTrait = CHARACTERS.find((c) => c.id === character)?.name;
  const processedQuestion = `User Wallet Address: ${walletAddress}\nCharacter Trait: ${characterTrait}\nUser Text: Say hi and introduce yourself`;

  const client = new FlowiseClient({
    baseUrl: "https://flow.kata.ai",
    apiKey: env.AI_API_KEY,
  });

  return client.createPrediction({
    chatflowId: CHATFLOW_MAPPING.FAQ,
    question: processedQuestion,
  }) as Promise<InitiatePredictionResponse>;
}
