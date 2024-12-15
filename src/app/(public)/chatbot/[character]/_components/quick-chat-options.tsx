import { QUICK_CHAT_OPTIONS } from "@/config";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface QuickChatOptionsProps {
  onSelect: (message: string) => void;
  disabled?: boolean;
}

export function QuickChatOptions({
  onSelect,
  disabled = false,
}: QuickChatOptionsProps) {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md pb-4">
      <div className="flex w-max gap-4 px-4">
        {QUICK_CHAT_OPTIONS.map((option) => (
          <Button
            key={option}
            variant="outline"
            className="h-auto flex-shrink-0 whitespace-normal break-words rounded-[12px] border-zinc-400 bg-transparent font-normal"
            onClick={() => onSelect(option)}
            type="button"
            disabled={disabled}
          >
            {option}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
