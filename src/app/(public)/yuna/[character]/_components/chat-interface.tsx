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

import { askQuestion } from "@/app/action";
import type { AIResponse } from "@/app/types";

import useCharacter from "@/providers/character";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChatMessage } from "./chat-message";
import { FAQComponent } from "./faq-component";
import { InputSection } from "./input-section";
import { QuickChatOptions } from "./quick-chat-options";
import { WalletAddressSection } from "./wallet-address-section";

interface ChatMessageItem {
  role: "assistant" | "user";
  content: string;
  error?: boolean;
  timestamp: Date;
}

export function ChatInterface({
  walletAddress,
  firstAskQuestionPromise,
  character,
}: {
  walletAddress?: string;
  firstAskQuestionPromise: Promise<AIResponse>;
  character: string;
}) {
  const askQuestionResponse = use(firstAskQuestionPromise);

  const { characterId, characters, setCharacterId } = useCharacter();
  const characterAvatarImage = `/hero/foot-${characterId}.png`;
  const characterPrimaryColor = characters.find(
    (c) => c.id === characterId,
  )?.primary;

  useEffect(() => {
    setCharacterId(character);
  }, [character, setCharacterId]);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessageItem[]>(
    askQuestionResponse?.text
      ? [
          {
            role: "assistant" as const,
            content: askQuestionResponse.text,
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
        role: "user",
        content: messageText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Thinking...",
          timestamp: new Date(),
        },
      ]);

      startTransition(async () => {
        try {
          if (!walletAddress) return;
          const response = await askQuestion({
            question: messageText,
            character: characterId,
            walletAddress,
            chatId: askQuestionResponse.chatId,
          });

          setMessages((prev) => [
            ...prev.slice(0, -1),
            {
              role: "assistant",
              content: response.text,
              timestamp: new Date(),
            },
          ]);
        } catch (error) {
          console.error(error);
          setMessages((prev) => [
            ...prev.slice(0, -1),
            {
              role: "assistant",
              content: "Sorry, Yuna is busy. Please try again.",
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
    [isPending, walletAddress, characterId, askQuestionResponse.chatId],
  );

  const handleSubmit = useCallback(() => {
    submitMessage(input);
  }, [input, submitMessage]);

  const handleQuickChatSelect = (message: string) => {
    submitMessage(message);
  };

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
                  key={`${message.role}-${message.timestamp.getTime()}`}
                >
                  <ChatMessage
                    message={message}
                    isPending={isPending}
                    characterAvatarImage={characterAvatarImage}
                    characterPrimaryColor={characterPrimaryColor}
                    characterId={characterId}
                  />
                  {message.role === "assistant" &&
                    index === 0 &&
                    walletAddress && (
                      <FAQComponent
                        key="first-message-component"
                        characterId={characterId}
                        onSelect={handleQuickChatSelect}
                      />
                    )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      {/* Quick Chat Options */}
      <QuickChatOptions
        onSelect={handleQuickChatSelect}
        disabled={isPending || !walletAddress}
      />

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
