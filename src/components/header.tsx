"use client";

import { cn } from "@/utils/classname";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import Image from "next/image";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/sheet";

const navItems = [
  {
    title: "HOME",
    href: "",
  },
  {
    title: "CHATBOT",
    href: "/chatbot?type=EVIL",
  },
  {
    title: "ABOUT",
    href: "/about",
    links: [
      {
        title: "Protocol",
        href: "/protocol",
        icon: "/assets/components/header/item-1.png",
      },
      {
        title: "Trading Bootcamp",
        href: "/trading-bootcamp",
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
];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="z-20 flex items-center justify-between gap-4 py-8">
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
                        type="button"
                        className="flex flex-row items-center gap-2"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <span className="font-medium text-white text-xl">
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
                          <div className={cn("absolute top-12 left-0 z-20")}>
                            <div className="ml-3 flex flex-col">
                              {item?.links?.map((link, index) => {
                                return (
                                  <Link
                                    href={link?.href}
                                    className="flex items-center gap-2 rounded px-2 py-2 hover:bg-white/10"
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
                                    <span className="font-medium text-base text-white">
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
                    className="font-medium text-white text-xl"
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
                  type="button"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="font-medium text-sm text-white">
                    {item?.title}
                  </span>
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                </button>
                <div
                  className={cn(
                    "absolute top-12 left-0 z-20",
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
                            <span className="font-medium text-base text-white">
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
              className="font-medium text-sm text-white"
              key={index}
            >
              {item?.title}
            </Link>
          );
        })}
      </div>
      <div>
        <Link href="/" className="font-bold text-2xl text-white">
          <Image
            src="/assets/components/header/logo.png"
            alt=""
            width={480}
            height={480}
            className="h-12 w-auto"
          />
        </Link>
      </div>
      <div className="hidden items-center gap-4 pl-16 md:flex">
        <Link
          href="/"
          className="rounded-full border border-white/25 bg-white/10 px-8 py-4 font-clash-display font-normal text-sm text-white tracking-widest hover:animate-shake"
        >
          BUY $CRYAISTAL
        </Link>
      </div>
    </div>
  );
}
