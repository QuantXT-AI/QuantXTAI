import type { IntentRecognizerResponse } from "@/app/types";
import { CHARACTERS, CHATFLOW_MAPPING } from "@/config";
import { AskQuestionRequestSchema } from "@/dto";
import { env } from "@/env";
import { checkRateLimit } from "@/lib/ratelimit";
import { FlowiseClient } from "flowise-sdk";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { question, character, walletAddress, sessionId } =
    AskQuestionRequestSchema.parse(await req.json());

  await checkRateLimit(walletAddress, 10, "1 m", "chat_ask");

  const characterTrait = CHARACTERS.find((c) => c.id === character)?.name;

  const processedQuestion = `User Wallet Address: ${walletAddress}\nCharacter Trait: ${characterTrait}\nUser Text: ${question}`;

  const client = new FlowiseClient({
    baseUrl: "https://flow.kata.ai",
    apiKey: env.AI_API_KEY,
  });

  const intentRecognizerPrediction = (await client.createPrediction({
    chatflowId: CHATFLOW_MAPPING.INTENT_RECOGNIZER,
    question: processedQuestion,
    overrideConfig: {
      ...(sessionId ? { sessionId } : {}),
    },
  })) as IntentRecognizerResponse;

  const intent = intentRecognizerPrediction.json.intent;

  if (!intent || !CHATFLOW_MAPPING[intent]) {
    console.error(`Intent: ${intent} not found`);
    return new NextResponse(`Intent: ${intent} not found`, { status: 400 });
  }

  console.log("Intent:", intent);

  const prediction = await client.createPrediction({
    chatflowId: CHATFLOW_MAPPING[intent],
    question: processedQuestion,
    streaming: true,
    override: {
      sessionId: intentRecognizerPrediction.sessionId,
    },
  });

  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of prediction) {
        if (typeof chunk.data === "string" && chunk.data !== "[DONE]") {
          controller.enqueue(
            new TextEncoder().encode(
              chunk.data.replace(/\[object Object\]/g, ""),
            ),
          );
        }
      }
      controller.close();
    },
  });

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/plain",
      "Transfer-Encoding": "chunked",
    },
  });
};
