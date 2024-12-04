"use client";

import { useCallback, useMemo } from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

import useCharacter from "@/providers/character";

import { Spinner } from "@/components/spinner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CharacterSelector() {
  const { characterId, setCharacterId, loading, characters } = useCharacter();
  const currentCharacter = useMemo(
    () => characters.find((c) => c.id === characterId),
    [characterId, characters],
  );
  const selectCharacter = useCallback(
    (id: string) => {
      setCharacterId(id);
    },
    [setCharacterId],
  );
  return (
    <div className="relative z-10 border-primary bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex flex-col items-center px-4 py-10 md:flex-row">
        <div className="flex flex-col items-center justify-start">
          <h3 className="flex text-center text-foreground text-xl uppercase md:text-left">
            Choose Yuna&apos;s Personality
          </h3>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[600px] md:max-w-[800px]"
          >
            <CarouselContent>
              {characters.map((character) => (
                <CarouselItem
                  key={character.id}
                  className="basis-1/3 items-center justify-center md:basis-1/5"
                >
                  <button
                    type="button"
                    key={character.id}
                    className="relative mx-auto my-auto flex h-[80px] cursor-pointer flex-col items-center justify-end"
                    onClick={() => selectCharacter(character.id)}
                  >
                    {loading === character.id ? (
                      <div className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center">
                        <Spinner />
                      </div>
                    ) : null}
                    <Image
                      src={`/hero/foot-${character.id}.png`}
                      alt={character.name}
                      width={65}
                      height={80}
                      className="absolute bottom-0 z-10 select-none"
                    />
                    <div
                      style={{
                        backgroundColor: character.primary,
                      }}
                      className={cn(
                        "h-[65px] w-[65px] cursor-pointer transition-all duration-300",
                        currentCharacter?.id === character.id
                          ? "shadow-[inset_0_0_0_4px_#000]"
                          : "shadow-[inset_0_0_0_4px_transparent]",
                      )}
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-none bg-transparent hover:bg-transparent md:hidden" />
            <CarouselNext className="border-none bg-transparent hover:bg-transparent md:hidden" />
          </Carousel>
        </div>
        <div className="mt-4 flex flex-col text-center text-foreground md:mt-0 md:ml-auto md:text-right">
          <h4 className="font-bold text-4xl">Yuna,</h4>
          <p className="text-xl">{currentCharacter?.name}</p>
        </div>
      </div>
    </div>
  );
}
