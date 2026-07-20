"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Tool } from "@/lib/data";

interface ComparisonModalProps {
  tools: Tool[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ComparisonModal({ tools, isOpen, onClose }: ComparisonModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || tools.length === 0) return null;

  const features = Array.from(
    new Set(tools.flatMap((t) => t.features))
  );

  const updateUrl = (selectedIds: number[]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("compare", selectedIds.join(","));
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  const handleRemove = (id: number) => {
    const next = tools.filter((t) => t.id !== id);
    if (next.length === 0) {
      onClose();
    }
    updateUrl(next.map((t) => t.id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-neon-green">
            COMPARISON ({tools.length}/4)
          </h2>
          <button
            onClick={onClose}
            aria-label="Close comparison"
            className="rounded-lg border border-border p-2 text-foreground/70 hover:border-neon-red hover:text-neon-red"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-3 pr-4 font-display text-xs font-bold uppercase tracking-widest text-foreground/40">
                  Feature
                </th>
                {tools.map((tool) => (
                  <th key={tool.id} className="pb-3 pl-4 font-display text-sm font-bold text-neon-blue">
                    <div className="flex items-center justify-between gap-4">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="hover:text-neon-green"
                        onClick={onClose}
                      >
                        {tool.name}
                      </Link>
                      <button
                        onClick={() => handleRemove(tool.id)}
                        aria-label={`Remove ${tool.name}`}
                        className="shrink-0 rounded-md border border-border p-1 text-foreground/50 hover:border-neon-red hover:text-neon-red"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3.5 w-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 pr-4 text-xs font-mono uppercase text-foreground/40">Category</td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3 pl-4 text-xs text-foreground/70">
                    {tool.category}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 pr-4 text-xs font-mono uppercase text-foreground/40">Pricing</td>
                {tools.map((tool) => (
                  <td key={tool.id} className="py-3 pl-4 text-xs text-foreground/70">
                    {tool.pricing}
                  </td>
                ))}
              </tr>
              {features.map((feature) => (
                <tr key={feature}>
                  <td className="py-3 pr-4 text-xs font-mono uppercase text-foreground/40">{feature}</td>
                  {tools.map((tool) => (
                    <td key={tool.id} className="py-3 pl-4">
                      {tool.features.includes(feature) ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4 text-neon-green">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span className="text-xs text-foreground/20">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(window.location.href);
            }}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-neon-blue px-4 font-display text-xs font-bold text-neon-blue transition-colors hover:bg-neon-blue/10"
          >
            Copy Share Link
          </a>
          <button
            onClick={onClose}
            className="inline-flex h-10 items-center justify-center rounded-lg border border-border px-4 font-display text-xs font-bold text-foreground transition-colors hover:border-foreground/30"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
