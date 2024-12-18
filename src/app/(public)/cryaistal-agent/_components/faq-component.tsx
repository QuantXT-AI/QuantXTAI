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
      <div className="flex flex-col gap-2">
        {FAQ_OPTIONS.map((option, index) => (
          <button
            key={`faq-${option}-${index}`}
            className="h-auto rounded-xl border border-white/25 bg-black/75 p-2 px-4 py-2 text-start text-sm text-white hover:opacity-50 cursor-pointer"
            onClick={() => onSelect(option)}
            type="button"
            disabled={disabled}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
