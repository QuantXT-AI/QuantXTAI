"use client";

import Image from "next/image";

import { FOUNDERS, SOCIAL_LINKS } from "@/config";

import { XIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useCharacter from "@/providers/character";
import Link from "next/link";

export function Founders() {
  const { characterId, characters } = useCharacter();
  const character = characters.find((c) => c.id === characterId);
  const customCopywriting = character?.customCopywriting.founder;
  return (
    <section className="border-gray-200 border-t bg-[#EBEBE6] px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-bold text-7xl">
          Meet the Architect
        </h2>
        <div className="flex w-full flex-col items-center border ">
          {FOUNDERS.map((founder, index) => (
            <div
              key={founder.name}
              className="flex h-auto w-full flex-col overflow-hidden rounded-lg bg-white shadow-lg md:h-[384px] md:w-[706px] md:flex-row"
            >
              <div className="p-4">
                <div className="bg-border">
                  <Image
                    src={`/founders/${founder.imageSrc}`}
                    alt={founder.name}
                    width={354}
                    height={354}
                    className="max-sm:w-full "
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 pt-7 font-bold text-3xl lg:pt-[60px]">
                  {founder.name}
                </h3>
                <p className=" text-3xl text-black/50">@{founder.name}</p>
                <p className="pt-10 text-lg lg:pt-20 ">
                  {customCopywriting?.[index]}
                </p>
                <Link
                  href={SOCIAL_LINKS[0].href}
                  className={cn(
                    buttonVariants({ variant: "outline_black", size: "xl" }),
                    "group mt-6 inline-flex w-full items-center justify-between px-5 uppercase lg:mt-12",
                  )}
                  target="_blank"
                >
                  <div className="flex flex-row items-center gap-4">
                    {" "}
                    <XIcon className="h-5 w-5" />
                    CHECK ON X
                  </div>

                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
