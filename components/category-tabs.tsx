"use client";

import { categories } from "@/lib/data";

interface CategoryTabsProps {
  active: string;
  onChange: (category: string) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChange("All")}
        className={`rounded-full border px-3 py-1.5 text-xs font-display font-bold transition-colors ${
          active === "All"
            ? "border-neon-green bg-neon-green/10 text-neon-green"
            : "border-border text-foreground/60 hover:border-neon-blue hover:text-neon-blue"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full border px-3 py-1.5 text-xs font-display font-bold transition-colors ${
            active === category
              ? "border-neon-green bg-neon-green/10 text-neon-green"
              : "border-border text-foreground/60 hover:border-neon-blue hover:text-neon-blue"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
