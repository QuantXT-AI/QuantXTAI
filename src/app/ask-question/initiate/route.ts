import type { InitiatePredictionResponse } from "@/app/types";
import { CHARACTERS, CHATFLOW_MAPPING } from "@/config";
import { AskQuestionRequestSchema } from "@/dto";
import { env } from "@/env";
import { checkRateLimit } from "@/lib/ratelimit";
import { FlowiseClient } from "flowise-sdk";

export const POST = async (req: Request) => {
  const { question, character, walletAddress, sessionId } =
    AskQuestionRequestSchema.parse(await req.json());

  await checkRateLimit(walletAddress, 10, "1 m", "chat_ask_initiate");

  const characterTrait = CHARACTERS.find((c) => c.id === character)?.name;

  const processedQuestion = `User Wallet Address: ${walletAddress}\nCharacter Trait: ${characterTrait}\nUser Text: ${question}`;

  const client = new FlowiseClient({
    baseUrl: "https://flow.kata.ai",
    apiKey: env.AI_API_KEY,
  });

  const initiatePrediction = (await client.createPrediction({
    chatflowId: CHATFLOW_MAPPING.INTENT_RECOGNIZER,
    question: processedQuestion,
    overrideConfig: {
      ...(sessionId ? { sessionId } : {}),
    },
  })) as InitiatePredictionResponse;

  return Response.json(initiatePrediction);
};
