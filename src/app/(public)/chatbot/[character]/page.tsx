import { Suspense } from "react";

import type { InitiatePredictionResponse } from "@/app/types";
import { CHATFLOW_MAPPING } from "@/config";
import { CHARACTERS } from "@/config";
import { env } from "@/env";
import { FlowiseClient } from "flowise-sdk";
import { ChatInterface } from "./_components/chat-interface";

export const maxDuration = 300; // 5 minutes

export default async function CharacterPage({
  params,
  searchParams,
}: {
  params: Promise<{ character: string }>;
  searchParams: Promise<{ walletAddress: string }>;
}) {
  const { character } = await params;
  const { walletAddress } = await searchParams;

  const firstAskQuestionPromise = getInitialMessage({
    character,
    walletAddress,
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="container relative mx-auto px-4 pt-[116px] pb-12">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3">
            <div className="w-full lg:max-w-[235px]">&nbsp;</div>
          </div>

          <div className="flex w-full flex-col gap-4 pb-10 lg:w-2/3">
            <Suspense key={walletAddress} fallback={<div>Loading...</div>}>
              <ChatInterface
                walletAddress={walletAddress}
                firstAskQuestionPromise={firstAskQuestionPromise}
                character={character}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

async function getInitialMessage({
  character,
  walletAddress,
}: {
  character: string;
  walletAddress: string | undefined;
}) {
  if (!walletAddress) {
    return Promise.resolve({
      text: "Hello! Please insert your Ethereum address or ENS name first.",
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
