"use client";

import { MenuIcon, ScrollText } from "lucide-react";
import * as React from "react";

import Link from "next/link";

import { NAV_LINKS, SITE_CONFIG } from "@/config";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium text-sm"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href={SITE_CONFIG.whitepaperUrl}
            target="_blank"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "text-xs md:text-xs lg:text-base",
              "group uppercase",
            )}
            scroll={true}
          >
            Whitepaper
            <ScrollText
              className={cn(
                "ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1",
              )}
            />
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
