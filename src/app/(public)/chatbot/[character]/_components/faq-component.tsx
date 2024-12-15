/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import { FAQ_OPTIONS } from "@/config";

interface FAQComponentProps {
  characterId: string;
  onSelect: (message: string) => void;
  disabled?: boolean;
}

export function FAQComponent({
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  characterId,
  onSelect,
  disabled = false,
}: FAQComponentProps) {
  return (
    <div className="w-full rounded-md">
      <div className="flex flex-col gap-2 p-4">
        {FAQ_OPTIONS.map((option) => (
          <Button
            key={`faq-${option}`}
            variant="outline"
            className="h-auto w-full justify-start whitespace-normal break-words rounded-[12px] border-zinc-400 bg-transparent text-left font-normal"
            onClick={() => onSelect(option)}
            type="button"
            disabled={disabled}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
}
