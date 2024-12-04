"use client";

import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import useCharacter from "@/providers/character";

export function ChatInterfaceSkeleton() {
  const { characterId, characters } = useCharacter();
  const currentCharacter = characters.find((c) => c.id === characterId);

  return (
    <div className="w-full">
      <div className="h-[156px] pt-10 pb-4" />
      <div className="flex h-[500px] items-center justify-center lg:h-[calc(60vh)]">
        <Spinner
          size="large"
          className={cn({
            "text-primary": currentCharacter?.theme === "dark",
            "text-primary-foreground": currentCharacter?.theme === "light",
          })}
        />
      </div>
      <div className="h-16" />
      <div className="h-[92px]" />
    </div>
  );
}
