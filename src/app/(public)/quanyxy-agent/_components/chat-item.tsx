import type { ChatMessage as ChatMessageType } from "@/dto";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export interface IMessage extends ChatMessageType {
  error?: boolean;
  timestamp: Date;
}

interface IProps {
  item: IMessage;
  isPending: boolean;
  chatbotType: string | null;
}

export default function ChatItem({ item, isPending, chatbotType }: IProps) {
  if (item?.role !== "apiMessage") {
    return (
      <motion.div
        className={cn(
          "flex items-center justify-end gap-4",
          isPending && "animate-pulse",
        )}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        <div className="w-full md:w-[80%]">
          <motion.div
            className={cn("rounded-[16px] bg-white/10 p-4")}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <ReactMarkdown
              className={cn(
                "prose max-w-none text-sm text-white",
                isPending && "animate-pulse",
                item?.error && "text-red-500",
              )}
              components={{
                a: ({ ...props }) => (
                  <a target="_blank" rel="noopener noreferrer" {...props} />
                ),
              }}
            >
              {item?.content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(
        "flex w-full items-start justify-start gap-2",
        isPending && "animate-pulse",
      )}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
    >
      {chatbotType === "GOOD" ? (
        <Image
          src="/assets/chatbot/good-icon.png"
          alt="avatar"
          width={480}
          height={480}
          className="h-8 w-auto md:h-12"
        />
      ) : (
        <Image
          src="/assets/chatbot/evil-icon.png"
          alt="avatar"
          width={480}
          height={480}
          className="h-8 w-auto md:h-12"
        />
      )}
      <div className="flex w-full items-center justify-start gap-4">
        <div className="w-full p-0 pt-0 md:w-[80%] md:px-4">
          <motion.div
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <ReactMarkdown
              className={cn(
                "prose max-w-none text-sm text-white [&_strong]:text-white",
                item?.error && "text-red-500",
              )}
              components={{
                a: ({ ...props }) => (
                  <a target="_blank" rel="noopener noreferrer" {...props} />
                ),
              }}
            >
              {item?.content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
