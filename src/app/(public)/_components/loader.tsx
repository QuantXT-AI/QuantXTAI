"use client";

import { useMemo } from "react";

import Image from "next/image";

import useCharacter from "@/providers/character";

export function Loader() {
  const { characterId, characters } = useCharacter();
  const currentCharacter = useMemo(
    () => characters.find((c) => c.id === characterId),
    [characterId, characters],
  );
  return (
    <div
      style={{
        backgroundColor: currentCharacter?.secondary,
        color: currentCharacter?.secondaryForeground,
      }}
      className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center"
    >
      <span className="text-center font-bold text-2xl">Loading</span>
      <div className="mt-auto flex flex-col items-center justify-center gap-2 pb-4">
        <Image
          src="/placeholder.svg"
          alt="Logo"
          width={86}
          height={31}
          priority
        />
        <p className="mt-2 text-sm">
          &copy; {new Date().getFullYear()} CryAIstal. All rights reserved.
        </p>
      </div>
    </div>
  );
}
