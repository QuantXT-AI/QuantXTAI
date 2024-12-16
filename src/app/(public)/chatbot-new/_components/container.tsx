/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { cn } from "@/utils/classname";
import { useEffect, useState } from "react";

import Link from "next/link";

import type { InitiatePredictionResponse } from "@/app/types";
import { WalletAddressRequestSchema } from "@/dto";
import { formatZodError } from "@/lib/utils";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  WalletIcon,
  XIcon,
} from "lucide-react";
import Form from "next/form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ChatSection from "./chat-section";

const chatbotTypeItems = ["EVIL", "GOOD"];

interface ContainerProps {
  type: string;
  walletAddress: string;
  firstAskQuestionPromise: Promise<InitiatePredictionResponse>;
}

export default function Container({
  type,
  walletAddress,
  firstAskQuestionPromise,
}: ContainerProps) {
  const router = useRouter();

  const [inputWalletAddress, setInputWalletAddress] = useState<string>(
    walletAddress ?? "",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [chatbotType, setchatbotType] = useState<string | null>(null);

  const handleValidateWalletAddress = () => {
    const validate = WalletAddressRequestSchema.safeParse({
      walletAddress: inputWalletAddress,
    });

    if (!validate?.success) {
      setErrorMessage(formatZodError(validate?.error).details?.[0].message);
      return;
    }

    setErrorMessage(null);
    router.push(
      `/chatbot-new?type=${chatbotType}&walletAddress=${inputWalletAddress}`,
    );
  };

  const handleClearWalletAddress = () => {
    setInputWalletAddress("");
    setErrorMessage(null);
    router.push(`/chatbot-new?type=${chatbotType}`);
  };

  useEffect(() => {
    if (type?.toUpperCase() && chatbotTypeItems.includes(type?.toUpperCase())) {
      setchatbotType(type?.toUpperCase());
    } else {
      setchatbotType(chatbotTypeItems?.[0]);
    }
  }, [type]);

  if (!chatbotTypeItems?.includes(type?.toUpperCase())) {
    return <></>;
  }

  return (
    <section className="relative h-screen w-full">
      <div className="fixed top-0 z-20 w-full">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <div className="bg-black/50 px-4 pt-8 pb-2 md:bg-transparent md:p-8">
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="rounded-lg border border-white/25 bg-white/5 p-2.5"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-white" />
                </Link>
                <div className="flex items-center rounded-lg border border-white/25 bg-white/5 p-1">
                  {chatbotTypeItems?.map((type, index) => {
                    const isActive = type === chatbotType;

                    return (
                      <a
                        href={`/chatbot-new?type=${type}&walletAddress=${walletAddress ? walletAddress : ""}`}
                        className={cn(
                          "flex w-24 items-center justify-center rounded-md px-4 py-2 font-medium text-sm text-white",
                          isActive
                            ? "bg-gradient-to-b from-white/5 to-white/10"
                            : "bg-transparent",
                        )}
                        key={index}
                      >
                        {type}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="border-white/25 border-b bg-black/50 px-4 pt-2 pb-4 md:bg-transparent md:p-8">
              <div className="">
                {chatbotType === "GOOD" ? (
                  <div className="mb-4 flex items-center gap-4">
                    <Image
                      src="/assets/chatbot/good-icon.png"
                      alt="close"
                      width={480}
                      height={480}
                      className="h-12 w-auto"
                    />
                    <h4 className="font-bold text-white text-xl">GOOD</h4>
                  </div>
                ) : (
                  <div className="mb-4 flex items-center gap-4">
                    <Image
                      src="/assets/chatbot/evil-icon.png"
                      alt="close"
                      width={480}
                      height={480}
                      className="h-12 w-auto"
                    />
                    <h4 className="font-bold text-white text-xl">EVIL</h4>
                  </div>
                )}
                <Form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();

                    handleValidateWalletAddress();
                  }}
                  className="relative w-full md:max-w-[480px]"
                >
                  <input
                    type="text"
                    placeholder="ENTER YOUR WALLET ADDRESS"
                    className={`w-full rounded-full px-12 py-4 text-sm text-white ${
                      walletAddress
                        ? "cursor-not-allowed opacity-50"
                        : "bg-white/10"
                    }`}
                    disabled={!!walletAddress}
                    value={inputWalletAddress}
                    onChange={(e) => setInputWalletAddress(e.target.value)}
                  />
                  <div className="-translate-y-1/2 absolute top-1/2 left-4">
                    <WalletIcon className="h-5 w-5 text-white" />
                  </div>
                  {!walletAddress ? (
                    <button
                      type="submit"
                      className="-translate-y-1/2 absolute top-1/2 right-2"
                    >
                      <div className="rounded-full bg-white/10 p-2">
                        <ArrowRightIcon className="h-5 w-5 text-white" />
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="-translate-y-1/2 absolute top-1/2 right-2"
                      onClick={() => {
                        handleClearWalletAddress();
                      }}
                    >
                      <div className="rounded-full bg-white/10 p-2">
                        <XIcon className="h-5 w-5 text-white" />
                      </div>
                    </button>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatSection
        chatbotType={chatbotType}
        walletAddress={walletAddress}
        firstAskQuestionPromise={firstAskQuestionPromise}
        errorMessage={errorMessage}
      />
    </section>
  );
}
