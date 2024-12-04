"use server";

import { cache } from "react";

import { CHARACTERS } from "@/config";

import { env } from "@/env";

import type { AIResponse } from "@/app/types";

import { type AskQuestionRequest, AskQuestionRequestSchema } from "@/dto";
import { checkRateLimit } from "@/lib/ratelimit";

export const askQuestion = cache(
  async (input: AskQuestionRequest): Promise<AIResponse> => {
    const { question, character, walletAddress, chatId } =
      AskQuestionRequestSchema.parse(input);

    await checkRateLimit(walletAddress, 10, "1 m", "chat_ask");

    const characterTrait = CHARACTERS.find((c) => c.id === character)?.name;

    const processedQuestion = `User Wallet Address: ${walletAddress}\nCharacter Trait: ${characterTrait}\nUser Text: ${question}`;

    const response = await fetch(
      "https://flow.kata.ai/api/v1/prediction/ef96ce9d-cd40-432c-a10e-0664b9dc2321",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.AI_API_KEY}`,
        },
        body: JSON.stringify({
          question: processedQuestion,
          ...(chatId ? { chatId } : {}),
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: AIResponse = await response.json();

    if (!data) {
      throw new Error("Failed to get response data from API");
    }

    return data;
  },
);
