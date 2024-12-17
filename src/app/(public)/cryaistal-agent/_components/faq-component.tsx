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
            className="h-auto w-full justify-start whitespace-normal break-words rounded-full border-white/25 bg-black/75 text-left font-normal text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
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
