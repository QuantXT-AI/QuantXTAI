"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useRef, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import type { NAV_LINKS } from "@/config";

import { cn } from "@/lib/utils";

interface NavDropdownProps {
  item: (typeof NAV_LINKS)[number];
  theme?: "light" | "dark";
  backdrop?: boolean;
}

export function NavDropdown({
  item,
  theme = "dark",
  backdrop = false,
}: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const targetId = item.href?.replace("/", "").replace("#", "");
    if (targetId) {
      if (isHomePage) {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(item.href);
      }
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={cn(
          "flex items-center gap-2",
          "font-bold text-background uppercase transition-all duration-100 hover:text-background/80",
          !backdrop && theme === "dark" && "text-primary hover:text-primary/80",
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.name}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="group absolute top-full left-0 mt-2 w-80 cursor-pointer rounded-lg bg-white shadow-lg ring-1 ring-black/5"
            onClick={handleLinkClick}
          >
            <div className="-top-2 absolute right-0 left-0 h-2" />
            <motion.div className="p-6" role="menu" aria-orientation="vertical">
              <motion.h3 className="mb-4 font-bold text-2xl text-primary transition-all duration-200 group-hover:text-primary/70">
                {item.name}
              </motion.h3>
              {item.content && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 leading-relaxed transition-all duration-200 group-hover:text-gray-600/70"
                >
                  {item.content}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
