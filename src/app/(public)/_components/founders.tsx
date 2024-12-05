"use client";

import Image from "next/image";

import { FOUNDERS } from "@/config";

import useCharacter from "@/providers/character";

export function Founders() {
  const { characterId, characters } = useCharacter();
  const character = characters.find((c) => c.id === characterId);
  const customCopywriting = character?.customCopywriting.founder;
  return (
    <section className="border-gray-200 border-t bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center font-bold text-7xl">
          Meet the Architect
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {FOUNDERS.map((founder, index) => (
            <div
              key={founder.name}
              className="overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="p-4">
                <div className="bg-border">
                  <Image
                    src={`/founders/${founder.imageSrc}`}
                    alt={founder.name}
                    width={354}
                    height={355}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-semibold text-2xl">{founder.name}</h3>
                <p className="pt-20 text-muted-foreground">
                  {customCopywriting?.[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
