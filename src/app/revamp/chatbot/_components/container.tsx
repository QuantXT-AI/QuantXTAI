"use client";

import { cn } from "@/utils/classname";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";
import { useRouter } from "next/navigation";

import EvilSection from "./evil-section";
import GoodSection from "./good-section";

const typeItems = ["EVIL", "GOOD"];

interface ContainerProps {
  type: string;
}

export default function Container({ type }: ContainerProps) {
  const router = useRouter();
  const form = useForm();

  const [typeChatbot, setTypeChatbot] = useState<string | null>(null);

  useEffect(() => {
    if (type?.toUpperCase() && typeItems.includes(type?.toUpperCase())) {
      setTypeChatbot(type?.toUpperCase());
    } else {
      setTypeChatbot(typeItems?.[0]);
    }
  }, [type]);

  if (!typeChatbot) {
    return <></>;
  }

  return (
    <section className="relative h-screen w-full">
      <div className="fixed top-8 z-20 w-full mx-4 md:mx-8">
        <div className="flex items-center gap-4">
          <Link
            href="/revamp"
            className="rounded-lg border border-white/25 bg-white/5 p-2.5"
          >
            <XIcon className="h-6 w-6 text-white" />
          </Link>
          <div className="flex items-center rounded-lg border border-white/25 bg-white/5 p-1">
            {typeItems?.map((type) => {
              const isActive = type === typeChatbot;

              return (
                <button
                  key={type}
                  className={cn(
                    "w-24 rounded-md px-4 py-2 text-sm font-medium text-white",
                    isActive
                      ? "bg-gradient-to-b from-white/5 to-white/10"
                      : "bg-transparent",
                  )}
                  onClick={() => {
                    router.push(`/revamp/chatbot?type=${type}`);
                  }}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>
        <a
          className="flex lg:hidden md:hidden sm:flex mb-32 w-full mt-4"
          style={{
            color: "white",
            fontWeight: "bold",
          }}
          href="#chatbot"
        >
          <input
            type="text"
            placeholder="ENTER YOUR WALLET ADDRESS"
            className="rounded-full bg-white/10 px-5 py-4 text-sm text-white w-full mr-8 text-ellipsis"
            {...form.register("wallet")}
          />
        </a>
      </div>
      {typeChatbot === "GOOD" ? <GoodSection /> : <EvilSection />}
    </section>
  );
}
