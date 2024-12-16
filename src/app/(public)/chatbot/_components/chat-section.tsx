"use client";

import { use, useEffect, useRef, useState, useTransition } from "react";

import type { InitiatePredictionResponse } from "@/app/types";
import { cn } from "@/lib/utils";
import Form from "next/form";
import Image from "next/image";
import ChatItem, { type IMessage } from "./chat-item";

interface ChatSectionProps {
  chatbotType: string | null;
  walletAddress: string;
  firstAskQuestionPromise: Promise<InitiatePredictionResponse>;
  errorMessage: string | null;
}

export default function ChatSection({
  chatbotType,
  walletAddress,
  firstAskQuestionPromise,
  errorMessage,
}: ChatSectionProps) {
  const firstAskQuestionResponse = use(firstAskQuestionPromise);

  const finishRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isPending, startTransition] = useTransition();

  const [inputMessage, setInputMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([
    ...(firstAskQuestionResponse
      ? [
          {
            id: "1",
            role: "assistant",
            content: firstAskQuestionResponse?.text,
            error: false,
            timestamp: new Date(),
          },
        ]
      : []),
  ]);

  const handleSubmit = async () => {
    setInputMessage("");
    setMessages((prev) => [
      ...prev,
      {
        id: "",
        role: "user",
        content: inputMessage,
        error: false,
        timestamp: new Date(),
      },
    ]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: "",
          role: "assistant",
          content: "Thinking...",
          error: false,
          timestamp: new Date(),
        },
      ]);
    }, 200);

    startTransition(async () => {
      try {
        const response = await fetch("/ask-question", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: inputMessage,
            character: chatbotType?.toLowerCase(),
            walletAddress: walletAddress || "",
            chatId: messages?.[0]?.id,
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
              role: "assistant",
              content: data,
              error: false,
              timestamp: new Date(),
            },
          ]);
        }
      } catch (error) {
        console.log(error);
        setMessages((prev) => [
          ...prev.slice(0, -1),
          {
            role: "assistant",
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
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (errorMessage) {
      setMessages([
        {
          role: "assistant",
          content: errorMessage,
          error: true,
          timestamp: new Date(),
        },
      ]);
    }
  }, [errorMessage, walletAddress]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    finishRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [walletAddress, messages]);

  return (
    <div className="grid grid-cols-12">
      <div
        id="landing"
        className={`relative col-span-12 w-auto sm:col-span-12 md:col-span-6 lg:col-span-6 ${
          walletAddress ? "hidden md:block" : ""
        }`}
      >
        <div className="z-0 overflow-hidden">
          {chatbotType === "GOOD" ? (
            <video
              src="/assets/chatbot/good-video.mp4"
              autoPlay
              loop
              muted
              className="h-screen w-full object-cover"
            />
          ) : (
            <video
              src="/assets/chatbot/evil-video.mp4"
              autoPlay
              loop
              muted
              className="h-screen w-full object-cover"
            />
          )}
        </div>
      </div>
      <div
        id="chatbot"
        className={`col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 ${
          !walletAddress ? "hidden md:block" : ""
        }`}
      >
        <div
          className={cn(
            "h-screen w-full",
            chatbotType === "GOOD"
              ? "bg-gradient-to-b from-[#1F0B01] to-[#351110]"
              : "bg-gradient-to-b from-[#06011C] to-[#1B013C]",
          )}
        >
          <div className="h-full w-full bg-[url('/assets/chatbot/bg-line.png')] bg-center bg-cover bg-no-repeat">
            <div className="relative h-full w-full overflow-hidden pt-[226px] md:pt-[180px]">
              <div className="h-full overflow-y-auto px-4 pt-48 pb-32 md:px-8 md:pt-8">
                <div className="flex flex-col gap-4">
                  {messages?.map((item, index) => {
                    return (
                      <ChatItem
                        item={item}
                        chatbotType={chatbotType}
                        isPending={isPending}
                        index={index}
                        key={index}
                      />
                    );
                  })}
                </div>
                <div ref={finishRef} />
              </div>
              <div className="absolute bottom-8 left-0 w-full">
                <Form
                  action=""
                  className="flex w-full items-center gap-4 px-4 md:px-8"
                  onSubmit={(e) => {
                    e.preventDefault();

                    handleSubmit();
                  }}
                >
                  <div className="w-full">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Ask me anything..."
                      className={`w-full rounded-full border border-white/25 bg-black/75 px-4 py-4 text-sm text-white ${
                        !walletAddress || !messages?.[0] || isPending
                          ? "cursor-not-allowed opacity-50"
                          : ""
                      }`}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      disabled={!walletAddress || !messages?.[0] || isPending}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`min-h-[58px] min-w-[58px] rounded-full border border-white/25 bg-black/75 text-white ${
                      !inputMessage || !walletAddress
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    disabled={!inputMessage || !walletAddress || isPending}
                  >
                    <div className="flex h-full w-full items-center justify-center">
                      <Image
                        src="/assets/chatbot/btn-icon.png"
                        alt="send"
                        width={480}
                        height={480}
                        className="h-5 w-auto"
                      />
                    </div>
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
