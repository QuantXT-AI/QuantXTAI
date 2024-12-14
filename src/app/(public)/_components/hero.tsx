"use client";

import { useMemo } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import useCharacter from "@/providers/character";

import { buttonVariants } from "@/components/ui/button";

import { XIcon } from "@/components/icons";
import { SITE_CONFIG } from "@/config";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { VideoDisplay } from "./video-display";

export function Hero() {
  const { characterId, characters } = useCharacter();
  const currentCharacter = useMemo(
    () => characters.find((c) => c.id === characterId),
    [characterId, characters],
  );
  return (
    <section className="relative min-h-[calc(100vh-300px)] bg-background">
      <VideoDisplay />
      <div className="container relative mx-auto px-4">
        <div className="grid min-h-[calc(100vh-116px-162px)] grid-cols-1 items-center gap-8 md:min-h-[calc(100vh-116px-162px)] md:grid-cols-2">
          <div className="flex flex-col items-start gap-6 pt-[222px]">
            <h1
              className={cn(
                currentCharacter?.theme === "dark"
                  ? "text-black"
                  : "text-white",
                "font-bold text-4xl leading-tight transition-colors duration-100 md:text-7xl",
              )}
            >
              Empower Your Memecoin Trades
            </h1>
            <p
              className={cn(
                currentCharacter?.theme === "dark"
                  ? "text-black"
                  : "text-white",
                "pt-5 text-xl transition-colors duration-100",
              )}
            >
              With Yuna, The Smartest, (but Moody) Girl in crypto
            </p>
            <Link
              href={`/yuna/${currentCharacter?.id}`}
              style={{
                background: currentCharacter?.primary,
                color: currentCharacter?.primaryForeground,
              }}
              className={cn(
                buttonVariants({ size: "lg" }),
                "px-8 py-6 uppercase transition-all duration-100",
              )}
            >
              Chat With Yuna Now
            </Link>
            <div className="mt-8 flex items-center gap-4">
              <div
                style={{ backgroundColor: currentCharacter?.primary }}
                className="mx-auto flex h-8 w-8 items-center justify-center overflow-hidden rounded-full p-1"
              >
                <Image
                  src={`/hero/foot-${currentCharacter?.id}.png`}
                  alt={currentCharacter?.id || ""}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <Link
                style={{
                  color:
                    currentCharacter?.theme === "light" ? "white" : "black",
                }}
                href={SITE_CONFIG.caUrl}
                target="_blank"
                className="group relative flex-col items-center gap-2 py-3 font-medium text-lg transition-all"
              >
                <div className="flex flex-row items-center gap-2">
                  <span>Buy $YUNA</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>

                <div
                  className="h-1 w-full "
                  style={{
                    color:
                      currentCharacter?.theme === "light" ? "white" : "black",
                    borderBottom: `1px solid ${currentCharacter?.theme === "light" ? "white" : "black"}`,
                  }}
                />
              </Link>
            </div>
            <p
              className={cn(
                currentCharacter?.theme === "dark"
                  ? "text-black/90"
                  : "text-white/90",
                "mt-[179px] pb-20 text-lg transition-colors duration-100",
              )}
            >
              {currentCharacter?.description}
            </p>
          </div>

          <div
            className={cn(
              "flex items-center justify-end gap-4 self-end pb-32",
              currentCharacter?.theme === "dark" ? "text-black" : "text-white",
            )}
          >
            <div className="flex-shrink-0">Meet Yuna on X</div>
            <Link
              href={SITE_CONFIG.socialLinks.eritas}
              target="_blank"
              className="relative inline-flex size-14 items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <XIcon className="h-6 w-6" />
              <Image
                src="/socials/8eritas.jpg"
                alt="AI"
                width={24}
                height={24}
                className="absolute right-[-12px] bottom-[-12px] h-6 w-6 rounded-full bg-white p-0.5"
              />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link
              href={SITE_CONFIG.socialLinks.aiX}
              target="_blank"
              className="relative inline-flex size-14 items-center justify-center border border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <XIcon className="h-6 w-6" />
              <Image
                src="/socials/ai.png"
                alt="AI"
                width={24}
                height={24}
                className="absolute right-[-12px] bottom-[-12px] h-6 w-6 rounded-full bg-white p-0.5"
              />
              <span className="sr-only">X (Twitter)</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
