"use client";

import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";

export function ChatInterfaceSkeleton() {
  return (
    <div className="w-full">
      <div className="h-[156px] pt-10 pb-4" />
      <div className="flex h-[500px] items-center justify-center lg:h-[calc(60vh)]">
        <Spinner size="large" className={cn("text-primary")} />
      </div>
      <div className="h-16" />
      <div className="h-[92px]" />
    </div>
  );
}
