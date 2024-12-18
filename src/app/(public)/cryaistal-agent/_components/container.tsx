/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { cn } from "@/utils/classname";
import { useCallback, useEffect, useState } from "react";

import Link from "next/link";

import type { InitiatePredictionResponse } from "@/app/types";
import { CHARACTERS } from "@/config";
import { WalletAddressOrENSRequestSchema, WalletAddressRequestSchema } from "@/dto";
import { resolveENS } from "@/lib/ens";
import { formatZodError } from "@/lib/utils";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  Loader2Icon,
  WalletIcon,
  XIcon,
} from "lucide-react";
import Form from "next/form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ChatSection from "./chat-section";
import Loading from "@/components/loading";
import { determineWalletAddressType, WalletAddressType } from "@/utils/address-validator";

const chatbotTypeItems = CHARACTERS.map((character) => character.id);

interface ContainerProps {
  type: (typeof CHARACTERS)[number]["id"];
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
  const [chatbotType, setchatbotType] = useState<string>(type);
  const [isResolvingENS, setIsResolvingENS] = useState(false);

  const handleValidateWalletAddress = useCallback(async () => {
    const addressType = determineWalletAddressType(inputWalletAddress);

    if (addressType === WalletAddressType.SOL) {
      const validate = WalletAddressRequestSchema.safeParse({
        walletAddress: inputWalletAddress,
      })

      if (!validate?.success) {
        console.log("validate", validate);
        setErrorMessage(formatZodError(validate?.error).details?.[0].message);
        return;
      }

      setErrorMessage(null);
      router.push(
        `/cryaistal-agent?type=${chatbotType}&walletAddress=${validate.data.walletAddress}`
      )
      return;
    }

    const validate = WalletAddressOrENSRequestSchema.safeParse({
      walletAddressOrENS: inputWalletAddress,
    });

    if (!validate?.success) {
      console.log("validate", validate);
      setErrorMessage(formatZodError(validate?.error).details?.[0].message);
      return;
    }

    setIsResolvingENS(true);
    setErrorMessage(null);

    try {
      const resolvedAddress = await resolveENS(inputWalletAddress);

      if (!resolvedAddress) {
        setErrorMessage("Invalid ENS name or Ethereum address");
        return;
      }

      router.push(
        `/cryaistal-agent?type=${chatbotType}&walletAddress=${resolvedAddress}`,
      );
    } catch (error) {
      console.error("Error resolving ENS:", error);
      setErrorMessage("Failed to resolve ENS name");
    } finally {
      setIsResolvingENS(false);
    }
  }, [inputWalletAddress, chatbotType, router]);

  const handleClearWalletAddress = () => {
    setInputWalletAddress("");
    setErrorMessage(null);
    router.push(`/cryaistal-agent?type=${chatbotType}`);
  };

  useEffect(() => {
    if (type && chatbotTypeItems.includes(type)) {
      setchatbotType(type);
    } else {
      setchatbotType(chatbotTypeItems?.[0]);
    }
  }, [type]);

  if (!chatbotTypeItems?.includes(type)) {
    return <></>;
  }

  return (
    <Loading isLoaded={true}>
      <section className="relative h-screen w-full">
        <div className="fixed top-0 z-20 w-full">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-6">
              <div className="bg-black/75 px-4 pt-8 pb-2 md:bg-transparent md:p-8">
                <div className="flex items-center gap-4">
                  <Link
                    href="/"
                    className="rounded-lg border border-white/25 bg-white/5 p-2.5 md:p-2.5"
                  >
                    <ChevronLeftIcon className="h-4 w-4 text-white md:h-6 md:w-6" />
                  </Link>
                  <div className="flex items-center rounded-lg border border-white/25 bg-white/5 p-1">
                    {chatbotTypeItems?.map((type, index) => {
                      const isActive = type === chatbotType;

                      return (
                        <a
                          href={`/cryaistal-agent?type=${type}${walletAddress ? `&walletAddress=${walletAddress}` : ""}`}
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
              <div className="border-white/25 border-b bg-black px-4 pt-2 pb-4 md:bg-black/25 md:p-8">
                <div className="">
                  {chatbotType === "GOOD" ? (
                    <div className="mb-4 hidden items-center gap-4 md:flex">
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
                    <div className="mb-4 hidden items-center gap-4 md:flex">
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
                      placeholder="ENTER YOUR ETHEREUM/SOLANA ADDRESS"
                      className={`w-full rounded-full px-12 py-2 text-sm text-white md:py-4 ${
                        walletAddress
                          ? "cursor-not-allowed opacity-50"
                          : "bg-white/10"
                        }`}
                      disabled={!!walletAddress || isResolvingENS}
                      value={inputWalletAddress}
                      onChange={(e) => setInputWalletAddress(e.target.value)}
                    />
                    <div className="-translate-y-1/2 absolute top-1/2 left-2 md:left-4">
                      <WalletIcon className="h-4 w-4 text-white md:h-5 md:w-5" />
                    </div>
                    {!walletAddress ? (
                      <button
                        type="submit"
                        className="-translate-y-1/2 absolute top-1/2 right-0 md:right-2"
                        disabled={isResolvingENS}
                      >
                        <div className="rounded-full bg-white/10 p-2">
                          {isResolvingENS ? (
                            <Loader2Icon className="h-4 w-4 animate-spin text-white md:h-5 md:w-5" />
                          ) : (
                            <ArrowRightIcon className="h-4 w-4 text-white md:h-5 md:w-5" />
                          )}
                        </div>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="-translate-y-1/2 absolute top-1/2 right-0 md:right-2"
                        onClick={handleClearWalletAddress}
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
    </Loading>
  );
}
