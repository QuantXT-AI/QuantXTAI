"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import Image from "next/image";

import { cn, formatRelativeTime } from "@/lib/utils";

interface ChatMessageProps {
  message: {
    role: "assistant" | "user";
    content: string;
    error?: boolean;
    timestamp: Date;
  };
  isPending: boolean;
  characterAvatarImage: string;
  characterPrimaryColor?: string;
  characterId?: string;
}

export function ChatMessage({
  message,
  isPending,
  characterAvatarImage,
  characterPrimaryColor,
  characterId,
}: ChatMessageProps) {
  const [, setTimeUpdate] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUpdate((prev) => prev + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={cn(
        "flex items-start gap-4",
        message.role === "assistant" ? "justify-start" : "justify-end",
      )}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      {message.role === "assistant" && (
        <div
          style={{ backgroundColor: characterPrimaryColor }}
          className={cn(
            "h-12 w-12 flex-shrink-0 overflow-hidden rounded-full p-1",
            isPending && "animate-pulse",
          )}
        >
          <Image
            src={characterAvatarImage}
            alt={characterId || ""}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
      )}
      <motion.div
        className={cn(
          "rounded-[12px] px-4 py-2",
          message.role === "assistant"
            ? "bg-muted text-foreground"
            : "bg-neutral-300 text-foreground",
          message.error && "border-2 border-red-500",
          message.role === "assistant" &&
            isPending &&
            "animate-pulse bg-muted/50",
          message.role === "user" && isPending && "animate-pulse bg-primary/50",
        )}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <ReactMarkdown
          className="prose max-w-none"
          components={{
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            a: ({ node, ...props }) => (
              <a target="_blank" rel="noopener noreferrer" {...props} />
            ),
          }}
        >
          {message.content}
        </ReactMarkdown>
        <div className="mt-1 flex items-center justify-between text-muted-foreground text-xs">
          <time className="relative-time">
            {isClient ? formatRelativeTime(message.timestamp) : ""}
          </time>
          <time className="sr-only">
            {isClient ? message.timestamp.toISOString() : ""}
          </time>
        </div>
      </motion.div>
    </motion.div>
  );
}
