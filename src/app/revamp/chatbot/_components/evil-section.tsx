"use client";

import { useEffect, useRef, useState } from "react";
import { UseFormReturn } from "react-hook-form";

import { InitiatePredictionResponse } from "@/app/types";
import Image from "next/image";

type FormValues = {
  walletAddress: string;
  message: string;
};

interface EvilSectionProps {
  form: UseFormReturn<FormValues>;
  walletAddress: string;
  firstAskQuestionPromise: Promise<InitiatePredictionResponse>;
}

export default function EvilSection({
  form,
  walletAddress,
  firstAskQuestionPromise,
}: EvilSectionProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [chatItems, setChatItems] = useState<any[]>([]);

  const handleSubmit = () => {
    console.log(form.getValues("message"));
  };

  useEffect(() => {
    firstAskQuestionPromise.then((res) => {
      const chatItem = {
        type: "assistant",
        message: res?.text,
      };

      console.log(res);

      setChatItems([chatItem]);
    });
  }, [firstAskQuestionPromise]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [walletAddress, chatItems]);

  return (
    <div className="grid grid-cols-12">
      <div
        id="landing"
        className={`relative col-span-12 w-auto sm:col-span-12 md:col-span-6 lg:col-span-6 ${
          form.watch("walletAddress") ? "hidden md:block" : ""
        }`}
      >
        <div className="z-0 overflow-hidden">
          <video
            src="/assets/chatbot/evil-video.mp4"
            autoPlay
            loop
            muted
            className="h-screen w-full object-cover"
          />
        </div>
      </div>
      <div
        id="chatbot"
        className={`col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 ${
          !form.watch("walletAddress") ? "hidden md:block" : ""
        }`}
      >
        <div className="h-screen w-full bg-gradient-to-b from-[#06011C] to-[#1B013C]">
          <div className="h-full w-full bg-[url('/assets/chatbot/bg-line.png')] bg-cover bg-center bg-no-repeat">
            <div className="relative h-full w-full overflow-hidden pt-[226px] md:pt-[180px]">
              <div className="h-full overflow-y-auto px-4 pb-32 pt-48 md:px-8 md:pt-8">
                <div className="flex flex-col gap-4">
                  {chatItems?.map((item, index) => {
                    if (item?.type === "user") {
                      return (
                        <div
                          className="flex items-center justify-end gap-4"
                          key={index}
                        >
                          <div className="w-[80%] rounded-[16px] bg-white/10 p-4">
                            <div className="text-sm text-white">
                              {item?.messa}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div
                        className="flex w-full items-start gap-2"
                        key={index}
                      >
                        <Image
                          src="/assets/chatbot/evil-icon.png"
                          alt="avatar"
                          width={480}
                          height={480}
                          className="h-12 w-auto"
                        />
                        <div className="flex w-full items-center justify-start gap-4">
                          <div className="w-[80%] p-4 pt-0">
                            <div className="text-sm text-white">
                              {item?.message}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div ref={messagesEndRef} />
              </div>
              <div className="absolute bottom-8 left-0 w-full">
                <form
                  className="flex w-full items-center gap-4 px-4 md:px-8"
                  onClick={(e) => {
                    e.preventDefault();

                    handleSubmit();
                  }}
                >
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Ask me anything..."
                      className={`w-full rounded-full border border-white/25 bg-black/25 px-4 py-4 text-sm text-white ${
                        !form.watch("walletAddress")
                          ? "cursor-not-allowed bg-white/25 opacity-75"
                          : ""
                      }`}
                      disabled={!form.watch("walletAddress")}
                      {...form.register("message")}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`min-h-[58px] min-w-[58px] rounded-full border border-white/25 bg-black/25 text-white ${
                      form.watch("message") || !form.watch("walletAddress")
                        ? "cursor-not-allowed bg-white/25 opacity-75"
                        : ""
                    }`}
                    disabled={
                      !!form.watch("message") || !form.watch("walletAddress")
                    }
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
