import { Suspense } from "react";

import { ChatInterfaceSkeleton } from "@/app/(public)/chatbot/[character]/_components/chat-interface-skeleton";
import type { InitiatePredictionResponse } from "@/app/types";
import { CHATFLOW_MAPPING } from "@/config";
import { CHARACTERS } from "@/config";
import { env } from "@/env";
import { FlowiseClient } from "flowise-sdk";
import { ChatInterface } from "./_components/chat-interface";
import { SidebarCharacterSelector } from "./_components/sidebar-character-selector";

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
            <div className="w-full lg:max-w-[235px]">
              <SidebarCharacterSelector
                currentCharacter={character}
                walletAddress={walletAddress}
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 pb-10 lg:w-2/3">
            <Suspense key={walletAddress} fallback={<ChatInterfaceSkeleton />}>
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
