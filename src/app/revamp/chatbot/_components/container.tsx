"use client";

import { cn } from "@/utils/classname";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";

import {
  ArrowRightIcon,
  ChevronLeftIcon,
  WalletIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import EvilSection from "./evil-section";
import GoodSection from "./good-section";

const chatbotTypeItems = ["EVIL", "GOOD"];

interface ContainerProps {
  type: string;
}

export default function Container({ type }: ContainerProps) {
  const form = useForm();

  const [chatbotType, setchatbotType] = useState<string | null>(null);

  const handleValidateWalletAddress = () => {
    form.setValue("walletAddress", form.getValues("_walletAddress"));
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
                {chatbotType === "EVIL" ? (
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
                ) : (
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
                )}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    if (form.getValues("_walletAddress")) {
                      handleValidateWalletAddress();
                    } else {
                      toast.error("Please enter your wallet address");
                    }
                  }}
                  className="relative w-full md:max-w-[480px]"
                >
                  <input
                    type="text"
                    placeholder="ENTER YOUR WALLET ADDRESS"
                    className={`w-full rounded-full bg-white/10 px-12 py-4 text-sm text-white ${
                      form.watch("walletAddress")
                        ? "cursor-not-allowed bg-white/25 opacity-75"
                        : ""
                    }`}
                    disabled={form.watch("walletAddress")}
                    {...form.register("_walletAddress")}
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <WalletIcon className="h-5 w-5 text-white" />
                  </div>
                  {!form.watch("walletAddress") ? (
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
                        form.setValue("_walletAddress", "");
                        form.setValue("walletAddress", "");
                      }}
                    >
                      <div className="rounded-full bg-white/10 p-2">
                        <XIcon className="h-5 w-5 text-white" />
                      </div>
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {chatbotType === "GOOD" ? (
        <GoodSection form={form as any} />
      ) : (
        <EvilSection form={form as any} />
      )}
    </section>
  );
}
