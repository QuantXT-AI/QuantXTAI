"use client";

import Image from "next/image";

import { FOUNDERS, SOCIAL_LINKS } from "@/config";

import useCharacter from "@/providers/character";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { XIcon } from "@/components/icons";

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
        <div className="flex flex-col items-center w-full border ">
          {FOUNDERS.map((founder, index) => (
            <div
              key={founder.name}
              className="overflow-hidden w-full md:w-[706px] flex flex-col md:flex-row h-auto md:h-[384px] rounded-lg bg-white shadow-lg"
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
                <h3 className="pt-7 lg:pt-[60px] mb-1 font-bold text-3xl">{founder.name}</h3>
                <p className=" text-black/50 text-3xl">
                  @{founder.name}
                </p>
                <p className="pt-10 lg:pt-20 text-lg ">
                  {customCopywriting?.[index]}
                </p>
                <Link
                href={SOCIAL_LINKS[0].href}
                className={cn(
                  buttonVariants({ variant: "outline_black", size: "xl" }),
                  "group inline-flex mt-6 lg:mt-12 items-center px-5  w-full justify-between uppercase",
                )}
                target="_blank"
              >
                <div className="flex gap-4 flex-row items-center"> <XIcon className="h-5 w-5"/>
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
