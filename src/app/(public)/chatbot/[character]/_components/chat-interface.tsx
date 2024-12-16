"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  use,
  useCallback,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";

import useCharacter from "@/providers/character";

import type { InitiatePredictionResponse } from "@/app/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { ChatMessage as ChatMessageType } from "@/dto";
import { ChatMessage } from "./chat-message";
import { InputSection } from "./input-section";
import { WalletAddressSection } from "./wallet-address-section";

interface ChatMessageItem extends ChatMessageType {
  error?: boolean;
  timestamp: Date;
}

export function ChatInterface({
  walletAddress,
  firstAskQuestionPromise,
  character,
}: {
  walletAddress?: string;
  firstAskQuestionPromise: Promise<InitiatePredictionResponse>;
  character: string;
}) {
  const firstAskQuestionResponse = use(firstAskQuestionPromise);

  const { characterId, characters, setCharacterId } = useCharacter();
  const characterAvatarImage = "/placeholder.svg";
  const characterPrimaryColor = characters.find(
    (c) => c.id === characterId,
  )?.primary;

  useEffect(() => {
    setCharacterId(character);
  }, [character, setCharacterId]);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessageItem[]>(
    firstAskQuestionResponse.text
      ? [
          {
            role: "apiMessage" as const,
            content: firstAskQuestionResponse.text,
            timestamp: new Date(),
          },
        ]
      : [],
  );
  const [isPending, startTransition] = useTransition();
  const [isExiting, setIsExiting] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const submitMessage = useCallback(
    async (messageText: string) => {
      if (!messageText.trim() || isPending) return;

      const userMessage: ChatMessageItem = {
        role: "userMessage",
        content: messageText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      setMessages((prev) => [
        ...prev,
        {
          role: "apiMessage",
          content: "Thinking...",
          timestamp: new Date(),
        },
      ]);

      startTransition(async () => {
        try {
          if (!walletAddress) return;

          const response = await fetch("/ask-question", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              question: messageText,
              character: characterId,
              walletAddress,
              sessionId: firstAskQuestionResponse.sessionId,
              history: messages.slice(-4).map((message) => ({
                role: message.role,
                content: message.content,
              })), // Get only 4 last messages
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch response");
          }

          const reader = response.body?.getReader();
          if (!reader) {
            return;
          }

          const decoder = new TextDecoder();
          let data = "";

          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }
            const decodedChunk = decoder.decode(value);
            data += decodedChunk;

            setMessages((prev) => [
              ...prev.slice(0, -1),
              {
                role: "apiMessage",
                content: data,
                timestamp: new Date(),
              },
            ]);
          }
        } catch (error) {
          console.error(error);
          setMessages((prev) => [
            ...prev.slice(0, -1),
            {
              role: "apiMessage",
              content: "Sorry, CryAIstal is busy. Please try again.",
              error: true,
              timestamp: new Date(),
            },
          ]);
        } finally {
          setTimeout(() => {
            inputRef.current?.focus();
          }, 100);
        }
      });
    },
    [
      isPending,
      walletAddress,
      characterId,
      firstAskQuestionResponse.sessionId,
      messages,
    ],
  );

  const handleSubmit = useCallback(() => {
    submitMessage(input);
  }, [input, submitMessage]);

  return (
    <motion.div
      className="w-full rounded-lg bg-stone-200 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (!isExiting) {
          setIsExiting(false);
        }
      }}
    >
      {/* Wallet Address */}
      <WalletAddressSection
        walletAddress={walletAddress}
        characterId={characterId}
        characterPrimaryColor={characterPrimaryColor}
        characterAvatarImage={characterAvatarImage}
        isPending={isPending}
        setIsExiting={setIsExiting}
      />

      {/* Messages */}
      <ScrollArea className="h-[500px] overflow-hidden lg:h-[calc(60vh)]">
        <div
          ref={chatContainerRef}
          className="flex h-full flex-col gap-4 overflow-y-auto rounded-lg border p-4"
        >
          <div className="flex flex-col gap-4">
            <AnimatePresence initial={true}>
              {messages.map((message, index) => (
                <motion.div
                  key={`${message.role}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChatMessage
                    message={message}
                    isPending={isPending}
                    characterAvatarImage={characterAvatarImage}
                    characterPrimaryColor={characterPrimaryColor}
                    characterId={characterId}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      {/* Input Form */}
      <InputSection
        input={input}
        setInput={setInput}
        isPending={isPending}
        walletAddress={walletAddress}
        onSubmit={handleSubmit}
        inputRef={inputRef}
      />
    </motion.div>
  );
}
