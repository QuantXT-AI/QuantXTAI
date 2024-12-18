import { QUICK_CHAT_OPTIONS } from "@/config";

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
          <button
            className="h-auto rounded-xl border border-white/25 bg-black/75 p-2 px-4 py-2 text-sm text-white hover:opacity-50"
            onClick={() => onSelect(option)}
            type="button"
            disabled={disabled}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
