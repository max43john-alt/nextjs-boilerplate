"use client";

import { allTags } from "@/lib/data";

interface TagChipsProps {
  selected: string[];
  onToggle: (tag: string) => void;
}

export default function TagChips({ selected, onToggle }: TagChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {allTags.map((tag) => {
        const isSelected = selected.includes(tag);
        return (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            className={`rounded-md border px-2.5 py-1 text-[11px] font-mono transition-colors ${
              isSelected
                ? "border-neon-purple bg-neon-purple/10 text-neon-purple"
                : "border-border text-foreground/50 hover:border-neon-purple hover:text-neon-purple"
            }`}
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
}
