/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { cn } from "@/utils/classname";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

import { InitiatePredictionResponse } from "@/app/types";
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
import { toast } from "sonner";
import EvilSection from "./evil-section";
import GoodSection from "./good-section";

const chatbotTypeItems = ["EVIL", "GOOD"];

interface ContainerProps {
  type: string;
  walletAddress: string;
  firstAskQuestionPromise: Promise<InitiatePredictionResponse>;
}

type FormValues = {
  walletAddress: string;
  message: string;
};

export default function Container({
  type,
  walletAddress,
  firstAskQuestionPromise,
}: ContainerProps) {
  const router = useRouter();
  const form = useForm<FormValues>({
    defaultValues: {
      walletAddress: walletAddress || "",
      message: "",
    },
  });

  const [chatbotType, setchatbotType] = useState<string | null>(null);

  const handleValidateWalletAddress = () => {
    const validate = WalletAddressRequestSchema.safeParse({
      walletAddress: form.watch("walletAddress"),
    });

    if (!validate?.success) {
      toast.error(formatZodError(validate?.error).details?.[0].message);
      return;
    }

    router.push(
      `/revamp/chatbot?type=${chatbotType}&walletAddress=${form.watch(
        "walletAddress",
      )}`,
    );
  };

  const handleClearWalletAddress = () => {
    router.push(`/revamp/chatbot?type=${chatbotType}`);
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
            <div className="bg-black/50 px-4 pb-2 pt-8 md:bg-transparent md:p-8">
              <div className="flex items-center gap-4">
                <Link
                  href="/revamp"
                  className="rounded-lg border border-white/25 bg-white/5 p-2.5"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-white" />
                </Link>
                <div className="flex items-center rounded-lg border border-white/25 bg-white/5 p-1">
                  {chatbotTypeItems?.map((type) => {
                    const isActive = type === chatbotType;

                    return (
                      <Link
                        key={type}
                        href={`/revamp/chatbot?type=${type}`}
                        className={cn(
                          "flex w-24 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white",
                          isActive
                            ? "bg-gradient-to-b from-white/5 to-white/10"
                            : "bg-transparent",
                        )}
                      >
                        {type}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="border-b border-white/25 bg-black/50 px-4 pb-4 pt-2 md:bg-transparent md:p-8">
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
                    <h4 className="text-xl font-bold text-white">GOOD</h4>
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
                    <h4 className="text-xl font-bold text-white">EVIL</h4>
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
                    className={`w-full rounded-full bg-white/10 px-12 py-4 text-sm text-white ${
                      walletAddress
                        ? "cursor-not-allowed bg-white/25 opacity-75"
                        : ""
                    }`}
                    disabled={!!walletAddress}
                    {...form.register("walletAddress")}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <WalletIcon className="h-5 w-5 text-white" />
                  </div>
                  {!walletAddress ? (
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                    >
                      <div className="rounded-full bg-white/10 p-2">
                        <ArrowRightIcon className="h-5 w-5 text-white" />
                      </div>
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
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
      {chatbotType === "GOOD" ? (
        // @ts-expect-error
        <GoodSection form={form} walletAddress={walletAddress} />
      ) : (
        <EvilSection
          form={form}
          walletAddress={walletAddress}
          firstAskQuestionPromise={firstAskQuestionPromise}
        />
      )}
    </section>
  );
}
