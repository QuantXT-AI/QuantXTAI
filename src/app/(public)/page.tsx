import { CharacterSelector } from "./_components/character-selector";
import { Founders } from "./_components/founders";
import { Hero } from "./_components/hero";
import { Product } from "./_components/product";

export default async function Page() {
  return (
    <>
      <Hero />
      <CharacterSelector />
      <Product />
      <Founders />
    </>
  );
}
