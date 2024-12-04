import { getCookie } from "cookies-next";

import { cookies } from "next/headers";

import { CharacterProvider } from "@/providers/character";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const characterId = await getCookie("characterId", {
    cookies,
  });
  const characters = await import("@/config").then((m) => m.CHARACTERS);
  return (
    <CharacterProvider initialCharacterId={characterId} characters={characters}>
      <Header />
      <div className="flex min-h-screen flex-col bg-background">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </CharacterProvider>
  );
}
