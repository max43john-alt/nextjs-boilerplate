"use client";

import Link from "next/link";
import { tools } from "@/lib/data";
import { useTypingEffect } from "@/lib/use-typing-effect";

export default function Hero() {
  const { displayed } = useTypingEffect();

  const featured = tools.slice(0, 3);

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_theme(colors.neon-green/0.08),_transparent_40%)]" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-green/30 bg-neon-green/5 px-3 py-1 text-xs font-mono text-neon-green">
            <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
            SYSTEM ONLINE
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-neon-green">&gt;</span> Developer Tools{" "}
            <span className="text-neon-blue">&</span> AI Services
          </h1>

          <div className="mt-6 h-8 font-mono text-sm text-foreground/70 sm:text-base">
            <span className="text-neon-green">{displayed}</span>
            <span className="ml-1 inline-block h-4 w-2 bg-neon-green/80" />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-foreground/60 sm:text-lg">
            Curated collection of free tools, AI assistants, and privacy resources for modern developers.
            Build faster, ship safer, and stay anonymous.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tools"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-neon-green px-6 font-display text-sm font-bold text-black transition-colors hover:bg-neon-green/90"
            >
              Browse Tools
            </Link>
            <Link
              href="/privacy"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-border px-6 font-display text-sm font-bold text-foreground transition-colors hover:border-neon-blue hover:text-neon-blue"
            >
              Privacy Guide
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-xs font-bold uppercase tracking-widest text-foreground/40">
            Featured Tools
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-neon-green/50 hover:bg-surface-hover"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground group-hover:text-neon-green">
                      {tool.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-foreground/50">{tool.description}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-neon-blue/30 px-2 py-0.5 text-[10px] font-mono text-neon-blue">
                    {tool.category}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tool.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-background px-2 py-0.5 text-[10px] font-mono text-foreground/40"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
