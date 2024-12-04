"use client";

import { useMemo } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import useCharacter from "@/providers/character";

import { buttonVariants } from "@/components/ui/button";

import { ProductVideoDisplay } from "./product-video-display";

export function Product() {
  const { characterId, characters } = useCharacter();
  const currentCharacter = useMemo(
    () => characters.find((c) => c.id === characterId),
    [characterId, characters],
  );

  return (
    <div className="border-gray-200 border-t bg-background">
      <div className="container mx-auto px-4">
        <div className="grid scroll-mt-[600px] grid-cols-1 gap-8 divide-gray-200 md:grid-cols-2 md:divide-x">
          {/* Analyze Your Past Trades */}
          <div
            className="relative flex flex-col items-center overflow-hidden bg-center bg-cover"
            id="analyze"
          >
            <ProductVideoDisplay name="analyze" className="scale-[1.1]" />
            <div className="z-10 max-w-[458px] px-6 pt-[600px] pb-[60px] text-center">
              <h2 className="mb-2 font-bold text-3xl text-background">
                Analyze Your Past Trades
              </h2>
              <p className="mb-4 text-background">
                {currentCharacter?.customCopywriting.product[0]}
              </p>
              <Link
                href={`/yuna/${currentCharacter?.id}`}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "group uppercase",
                )}
                scroll={true}
              >
                Try It Now
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-25% from-black/40 to-80% to-black/55" />
          </div>

          {/* Assist You with Data */}
          <div
            className="relative flex flex-col items-center bg-center bg-cover"
            id="assist"
          >
            <ProductVideoDisplay name="assist" />
            <div className="z-10 max-w-[458px] px-6 pt-[600px] pb-[60px] text-center">
              <h2 className="mb-2 font-bold text-3xl text-background">
                Assist You with Data
              </h2>
              <p className="mb-4 text-background">
                {currentCharacter?.customCopywriting.product[1]}
              </p>
              <Link
                href={`/yuna/${currentCharacter?.id}`}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "group uppercase",
                )}
                scroll={true}
              >
                Try It Now
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-25% from-black/40 to-80% to-black/55" />
          </div>
        </div>
      </div>
      {/* Automate Your Future Trades with Yuna */}
      <div
        id="automate"
        style={{ backgroundColor: currentCharacter?.primary }}
        className="scroll-mt-[116px]"
      >
        <div className="mx-auto max-w-screen-md px-4 pt-8 pb-20">
          <div className="rounded-lg bg-background p-6 text-foreground shadow-md">
            <div className="items-center md:flex">
              <div className="mb-6 text-center md:mb-0 md:w-1/2 md:pr-8 md:text-left">
                <h2 className="mb-2 font-bold text-4xl">
                  Automate Your Future Trades with Yuna
                </h2>
                <p className="mb-4">
                  {currentCharacter?.customCopywriting.product[2]}
                </p>
                <Link
                  href="#"
                  className={cn(
                    buttonVariants(),
                    "group uppercase",
                    "pointer-events-none", // TODO: Enable this when ready
                  )}
                  style={{
                    background: currentCharacter?.primary,
                    color: currentCharacter?.primaryForeground,
                  }}
                  scroll={true}
                >
                  Coming Soon
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
              <div className="relative md:w-1/2">
                <ProductVideoDisplay name="automate" />
                <div className="mx-auto h-[630px] w-[400px] object-cover md:mx-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
