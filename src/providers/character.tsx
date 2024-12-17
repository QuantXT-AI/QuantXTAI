"use client";

import { setCookie } from "cookies-next";
import { createContext, use, useCallback, useMemo, useState } from "react";

import { CHARACTERS } from "@/config";

const DEFAULT_CHARACTER_ID = "GOOD";

type Ctx = {
  loading: boolean | string;
  characterId: string;
  setCharacterId: (characterId: string) => void;
  characters: typeof CHARACTERS;
};

const CharacterContext = createContext<Ctx>({
  loading: false,
  characterId: DEFAULT_CHARACTER_ID,
  setCharacterId: () => {},
  characters: CHARACTERS,
});

export default function useCharacter() {
  return use(CharacterContext);
}

function loadPoster(id: string) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = `/placeholder.svg?id=${id}`;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(true);
  });
}

export function CharacterProvider({
  initialCharacterId,
  characters,
  children,
}: {
  initialCharacterId?: string;
  characters: typeof CHARACTERS;
  children: React.ReactNode;
}) {
  const [characterId, setCharacterId] = useState(
    () => initialCharacterId || DEFAULT_CHARACTER_ID,
  );
  const [loading, setLoading] = useState<Ctx["loading"]>(false);
  const setCharacterIdWithCookie = useCallback((id: string) => {
    setLoading(id);
    loadPoster(id).then(() => {
      setCharacterId(id);
      setCookie("characterId", id);
      setLoading(false);
    });
  }, []);
  const value = useMemo(
    () => ({
      characterId,
      setCharacterId: setCharacterIdWithCookie,
      loading,
      characters,
    }),
    [characterId, setCharacterIdWithCookie, loading, characters],
  );
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}
