"use client";

import { useRouter } from "next/navigation";

import useCharacter from "@/providers/character";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SidebarCharacterSelector({
  currentCharacter,
  walletAddress,
}: {
  currentCharacter: string;
  walletAddress?: string;
}) {
  const { characters, setCharacterId } = useCharacter();
  const router = useRouter();

  return (
    <div className="mt-[300px] w-full">
      <Select
        defaultValue={currentCharacter}
        onValueChange={(value) => {
          const searchParams = walletAddress
            ? `?walletAddress=${walletAddress}`
            : "";
          setCharacterId(value);
          setTimeout(() => {
            router.push(`/chatbot/${value}${searchParams}`);
          }, 100);
        }}
      >
        <SelectTrigger className="h-[54px] w-full border-0 bg-black/40 text-base text-white backdrop-blur">
          <SelectValue placeholder="Select a character">
            {characters.find((c) => c.id === currentCharacter)?.name && (
              <>
                <strong>CryAIstal</strong>,{" "}
                {characters.find((c) => c.id === currentCharacter)?.name}
              </>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {characters.map((character) => (
              <SelectItem key={character.id} value={character.id}>
                {character.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
