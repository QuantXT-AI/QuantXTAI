"use client";

import { useMemo } from "react";

import Image from "next/image";

import useCharacter from "@/providers/character";

export function YunaLoader() {
  const { characterId, characters } = useCharacter();
  const currentCharacter = useMemo(
    () => characters.find((c) => c.id === characterId),
    [characterId, characters],
  );
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={`/hero/foot-${currentCharacter?.id}.png`}
          alt={`Footer Background ${currentCharacter?.id}`}
          width={323}
          height={375}
        />
      </div>
    </div>
  );
}
