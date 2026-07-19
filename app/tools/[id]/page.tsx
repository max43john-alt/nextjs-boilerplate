import { notFound } from "next/navigation";
import Link from "next/link";
import { tools } from "@/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const tool = tools.find((t) => t.slug === id);
  if (!tool) return {};
  return {
    title: `${tool.name} — DEVTOOLS://`,
    description: tool.description,
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { id } = await params;
  const tool = tools.find((t) => t.slug === id);

  if (!tool) return notFound();

  const related = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-xs font-mono text-neon-blue hover:text-neon-green"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Tools
        </Link>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {tool.name}
            </h1>
            <p className="mt-2 text-sm text-foreground/50">{tool.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-background px-2 py-0.5 text-[10px] font-mono text-foreground/40"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <div className="shrink-0">
            <span className="rounded-full border border-neon-blue/30 px-3 py-1 text-xs font-mono text-neon-blue">
              {tool.category}
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xs font-bold uppercase tracking-widest text-foreground/40">
              Features
            </h2>
            <ul className="mt-4 space-y-3">
              {tool.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-foreground/70">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="mt-0.5 h-4 w-4 shrink-0 text-neon-green">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-background p-5">
            <h2 className="font-display text-xs font-bold uppercase tracking-widest text-foreground/40">
              Pricing
            </h2>
            <p className="mt-2 text-sm text-neon-green">{tool.pricing}</p>

            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex h-10 items-center justify-center rounded-lg bg-neon-green px-4 font-display text-xs font-bold text-black transition-colors hover:bg-neon-green/90"
            >
              Visit Tool →
            </a>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xs font-bold uppercase tracking-widest text-foreground/40">
              Related Tools
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <Link
                  key={t.id}
                  href={`/tools/${t.slug}`}
                  className="rounded-xl border border-border bg-surface p-4 transition-colors hover:border-neon-green/50 hover:bg-surface-hover"
                >
                  <h3 className="font-display text-sm font-bold text-foreground hover:text-neon-green">
                    {t.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-foreground/50">{t.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
