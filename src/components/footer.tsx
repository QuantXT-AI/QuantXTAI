"use client";

import Image from "next/image";
import Link from "next/link";

import { SITE_CONFIG, SOCIAL_LINKS } from "@/config";

import { cn } from "@/lib/utils";

import useCharacter from "@/providers/character";

import { buttonVariants } from "@/components/ui/button";

export function Footer() {
  const { characterId } = useCharacter();
  return (
    <footer className="relative flex flex-col items-center justify-center bg-gradient-to-b from-[#0F1314] to-[#161A1B] py-4 text-background md:h-[332px] md:py-0">
      <div className="container relative mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Image
              src="/logo.png"
              alt="Yuna Logo"
              width={120}
              height={40}
              className="mx-auto md:mx-0"
            />
            <p className="mt-2 text-sm">
              &copy; {new Date().getFullYear()} Yuna Interactive. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8">
            <p className="max-w-xs text-sm">
              Follow our socials to make sure you don&apos;t miss out on our
              latest updates and announcements
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-4">
              <div className="flex items-center justify-center space-x-4">
                {SOCIAL_LINKS.map(({ name, icon: Icon }) => (
                  <Link
                    key={name}
                    href={SITE_CONFIG.socialLinks.aiX}
                    className="border border-background p-2 text-background hover:text-background/80"
                  >
                    <span className="sr-only">{name}</span>
                    <Icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
              <Link
                href={`/yuna/${characterId}`}
                className={cn(
                  buttonVariants({ variant: "secondary", size: "lg" }),
                  "group inline-flex h-[42px] items-center uppercase",
                )}
              >
                Chat Yuna Now!
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={`/hero/foot-${characterId}.png`}
        alt={`Footer Background ${characterId}`}
        width={323}
        height={375}
        className="lg:-translate-x-[50%] z-10 hidden select-none object-cover pt-4 lg:absolute lg:bottom-0 lg:left-[50%] lg:block lg:pt-0"
      />
    </footer>
  );
}
