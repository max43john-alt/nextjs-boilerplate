"use client";

import { Suspense, useMemo, useState } from "react";
import { tools } from "@/lib/data";
import SearchBar from "@/components/search-bar";
import CategoryTabs from "@/components/category-tabs";
import TagChips from "@/components/tag-chips";
import ToolCard from "@/components/tool-card";
import ComparisonModal from "@/components/comparison-modal";

function ToolsContent() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesSearch =
        !q ||
        tool.name.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
      const matchesTags = selectedTags.length === 0 || selectedTags.every((tag) => tool.tags.includes(tag));
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [search, activeCategory, selectedTags]);

  const selectedTools = useMemo(
    () => compareIds.map((id) => tools.find((t) => t.id === id)!).filter(Boolean),
    [compareIds]
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const toggleSelect = (id: number) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) {
        const next = prev.filter((x) => x !== id);
        if (next.length < 2) setIsModalOpen(false);
        return next;
      }
      if (prev.length >= 4) return prev;
      const next = [...prev, id];
      if (next.length >= 2) setIsModalOpen(true);
      return next;
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <SearchBar value={search} onChange={setSearch} />
      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      <TagChips selected={selectedTags} onToggle={toggleTag} />

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              selected={compareIds.includes(tool.id)}
              onToggleSelect={toggleSelect}
            />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-xl border border-dashed border-border p-12 text-center">
          <p className="font-display text-sm font-bold text-foreground/40">No tools match your filters.</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
              setSelectedTags([]);
            }}
            className="mt-4 text-xs font-display font-bold text-neon-green hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {compareIds.length > 0 && !isModalOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 rounded-xl border border-neon-green bg-surface px-4 py-3 font-display text-sm font-bold text-neon-green shadow-lg transition-colors hover:bg-surface-hover"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            Compare ({compareIds.length})
          </button>
        </div>
      )}

      <ComparisonModal
        tools={selectedTools}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          <span className="text-neon-green">&gt;</span> Tools Directory
        </h1>
        <p className="mt-2 text-sm text-foreground/50">
          Discover and compare developer tools. Select up to 4 to compare side-by-side.
        </p>
      </div>
      <Suspense fallback={<div className="mt-8 h-64 animate-pulse rounded-xl border border-border bg-surface" />}>
        <ToolsContent />
      </Suspense>
    </div>
  );
}
