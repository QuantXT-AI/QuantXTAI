"use client";

import { cn } from "@/utils/classname";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const navItems = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "CHATBOT",
    href: "/cryaistal-agent",
  },
  {
    title: "ABOUT",
    href: "/about",
    links: [
      {
        title: "Foundation",
        href: "/foundation",
        icon: "/assets/components/header/item-1.png",
      },
      {
        title: "Trading Lab",
        href: "/trading-lab",
        icon: "/assets/components/header/item-2.png",
      },
      {
        title: "Ecosystem",
        href: "/ecosystem",
        icon: "/assets/components/header/item-3.png",
      },
      {
        title: "Partners",
        href: "/partners",
        icon: "/assets/components/header/item-4.png",
      },
    ],
  },
  {
    title: "DOCS",
    href: process.env.NEXT_PUBLIC_DOCS_URL ?? '',
  },
];

export default function Header({ isAbsolute }: { isAbsolute?: boolean }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div
      className={
        "flex items-center justify-between gap-4 py-8" +
        (isAbsolute ? " absolute left-8 right-8 top-0 z-50" : "")
      }
    >
      {!isDesktop && (
        <Sheet>
          <SheetTrigger>
            <svg
              className="cursor-pointer md:hidden"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 18.5V20.5H5V18.5H16ZM21 11.5V13.5H3V11.5H21ZM19 4.5V6.5H8V4.5H19Z"
                fill="white"
              />
            </svg>
          </SheetTrigger>
          <SheetContent side="left" className="w-[320px]">
            <div className="mt-8 flex flex-col gap-6">
              {navItems?.map((item, index) => {
                if (item?.links) {
                  return (
                    <div className="relative" key={index}>
                      <button
                        className="flex flex-row items-center gap-2"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span className="text-xl font-medium text-white">
                          {item?.title}
                        </span>
                        <ChevronDownIcon
                          className={cn(
                            "h-8 w-8 transform text-white transition duration-1000 ease-in-out",
                            {
                              "-rotate-180": !isOpen,
                            },
                          )}
                        />
                      </button>
                      {isOpen && (
                        <motion.div
                          className="flex flex-col"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <div className="mt-3">
                            <div className="ml-3 flex flex-col">
                              {item?.links?.map((link, index) => {
                                return (
                                  <Link
                                    href={link?.href}
                                    className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/10"
                                    key={index}
                                  >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10">
                                      <Image
                                        src={link?.icon}
                                        alt=""
                                        width={480}
                                        height={480}
                                        className="h-4 w-auto"
                                      />
                                    </div>
                                    <span className="text-base font-medium text-white">
                                      {link?.title}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    href={item?.href}
                    className="text-xl font-medium text-white"
                    key={index}
                  >
                    {item?.title}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      )}

      <div className="hidden items-center gap-8 md:flex">
        {navItems?.map((item, index) => {
          if (item?.links) {
            return (
              <div className="relative" key={index}>
                <button
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="text-sm font-medium text-white">
                    {item?.title}
                  </span>
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                </button>
                <div
                  className={cn(
                    "absolute left-0 top-12 z-20",
                    isOpen ? "block" : "hidden",
                  )}
                >
                  <div className="h-full w-[320px] rounded-lg border border-white/25 bg-gradient-to-b from-[#46151B]/80 to-[#3D0E34]/100">
                    <div className="flex flex-col p-2">
                      {item?.links?.map((link, index) => {
                        return (
                          <Link
                            href={link?.href}
                            className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/10"
                            key={index}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10">
                              <Image
                                src={link?.icon}
                                alt=""
                                width={480}
                                height={480}
                                className="h-4 w-auto"
                              />
                            </div>
                            <span className="text-base font-medium text-white">
                              {link?.title}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              href={item?.href}
              className="text-sm font-medium text-white"
              key={index}
            >
              {item?.title}
            </Link>
          );
        })}
      </div>
      <div>
        <Link href="/" className="text-2xl font-bold text-white">
          <Image
            src="/assets/components/header/logo.png"
            alt=""
            width={480}
            height={480}
            className="h-12 w-auto"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className="hidden items-center gap-4 pl-16 md:flex">
        <Link
          href={process.env.NEXT_PUBLIC_BUY_URL ?? ''}
          className="rounded-full border border-white/25 bg-white/10 px-8 py-4 font-clash-display text-sm font-normal tracking-widest text-white hover:animate-shake"
        >
          BUY $CRYAISTAL
        </Link>
      </div>
    </div>
  );
}
