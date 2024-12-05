"use client";

import { ScrollText } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SITE_CONFIG } from "@/config";

import { cn } from "@/lib/utils";

import useCharacter from "@/providers/character";

import { MobileNav } from "@/components/mobile-nav";
import { NavDropdown } from "@/components/nav-dropdown";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  const observerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { characterId, characters } = useCharacter();
  const currentCharacter = useMemo(
    () => characters.find((c) => c.id === characterId),
    [characterId, characters],
  );
  const [isBackdropActive, setIsBackdropActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        navRef.current?.classList.add("bg-black/50");
        navRef.current?.classList.add("backdrop-blur-sm");
        setIsBackdropActive(true);
      } else {
        navRef.current?.classList.remove("bg-black/50");
        navRef.current?.classList.remove("backdrop-blur-sm");
        setIsBackdropActive(false);
      }
    });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        ref={observerRef}
        className="absolute h-[116px] w-full bg-transparent"
      />
      <nav
        ref={navRef}
        className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-10 py-10 transition-colors duration-200"
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="relative font-bold text-2xl text-primary"
        >
          <Image
            src="/logo.png"
            alt="Yuna Logo"
            width={100}
            height={36}
            className={
              isBackdropActive || currentCharacter?.theme === "light"
                ? ""
                : "sr-only"
            }
            priority
          />
          <Image
            src="/logo.png"
            alt="Yuna Logo"
            width={100}
            height={36}
            className={
              isBackdropActive || currentCharacter?.theme === "light"
                ? "sr-only"
                : ""
            }
            priority
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <NavDropdown
                key={link.name}
                item={link}
                theme={currentCharacter?.theme}
                backdrop={isBackdropActive}
              />
            ))}
          </div>
        </div>

        <div className="flex w-[100px] justify-end">
          <Link
            href={SITE_CONFIG.whitepaperUrl}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "text-xs md:text-xs lg:text-base",
              "group uppercase",
              "hidden md:flex",
            )}
            scroll={true}
          >
            Whitepaper
            <ScrollText
              className={cn(
                "ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1",
                "hidden lg:flex",
              )}
            />
          </Link>
          <MobileNav />
        </div>
      </nav>
    </>
  );
}
