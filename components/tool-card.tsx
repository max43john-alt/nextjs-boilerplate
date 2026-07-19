"use client";

import Link from "next/link";
import { Tool } from "@/lib/data";

interface ToolCardProps {
  tool: Tool;
  selected: boolean;
  onToggleSelect: (id: number) => void;
}

export default function ToolCard({ tool, selected, onToggleSelect }: ToolCardProps) {
  return (
    <div
      className={`group relative rounded-xl border bg-surface p-5 transition-colors ${
        selected ? "border-neon-green bg-surface-hover" : "border-border hover:border-neon-green/50 hover:bg-surface-hover"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <Link href={`/tools/${tool.slug}`} className="block">
            <h3 className="font-display text-sm font-bold text-foreground group-hover:text-neon-green">
              {tool.name}
            </h3>
            <p className="mt-1 line-clamp-2 text-xs text-foreground/50">{tool.description}</p>
          </Link>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tool.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-background px-2 py-0.5 text-[10px] font-mono text-foreground/40"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => onToggleSelect(tool.id)}
          aria-label={selected ? "Remove from comparison" : "Add to comparison"}
          className={`ml-3 h-5 w-5 shrink-0 rounded border transition-colors ${
            selected
              ? "border-neon-green bg-neon-green/20"
              : "border-border hover:border-neon-green"
          }`}
        >
          {selected && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3.5 w-3.5 text-neon-green">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-full border border-neon-blue/30 px-2 py-0.5 text-[10px] font-mono text-neon-blue">
          {tool.category}
        </span>
        <Link
          href={`/tools/${tool.slug}`}
          className="text-xs font-display font-bold text-neon-green/70 transition-colors hover:text-neon-green"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
