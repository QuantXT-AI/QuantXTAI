import { Send } from "lucide-react";
import { useCallback, useRef } from "react";

import Form from "next/form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface InputSectionProps {
  input: string;
  setInput: (value: string) => void;
  isPending: boolean;
  walletAddress?: string;
  onSubmit: () => void;
  inputRef?: React.RefObject<HTMLTextAreaElement>;
}

export function InputSection({
  input,
  setInput,
  isPending,
  walletAddress,
  onSubmit,
  inputRef,
}: InputSectionProps) {
  const localInputRef = useRef<HTMLTextAreaElement>(null);
  const finalInputRef = inputRef || localInputRef;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSubmit();
      }
    },
    [onSubmit],
  );

  return (
    <Form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="mt-2 flex flex-none gap-4 bg-background p-4"
    >
      <Textarea
        ref={finalInputRef}
        value={input}
        name="input"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={
          walletAddress
            ? "Ask about your trades..."
            : "Please insert your Ethereum wallet address first"
        }
        className="min-h-[60px] resize-none placeholder:text-muted-foreground/70"
        disabled={isPending || !walletAddress}
      />
      <Button
        type="submit"
        size="icon"
        className="h-[60px] w-[60px] flex-shrink-0 flex-grow-0 rounded-full"
        disabled={isPending || !walletAddress}
      >
        <Send className="h-4 w-4" />
        <span className="sr-only">Send message</span>
      </Button>
    </Form>
  );
}
