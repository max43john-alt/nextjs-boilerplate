"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/40"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 0010.5 18.75a7.5 7.5 0 00-7.5-7.5A7.5 7.5 0 005.196 5.196m0 0L21 21z" />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tools by name, tag, or keyword..."
        className="w-full rounded-xl border border-border bg-surface py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-foreground/30 focus:border-neon-green focus:outline-none"
      />
    </div>
  );
}
