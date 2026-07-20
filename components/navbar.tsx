"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/privacy", label: "Privacy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-neon-green">
          DEVTOOLS://
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-neon-green"
            >
              {link.label}
            </Link>
          ))}
          <button
            aria-label="Search"
            className="rounded-lg border border-border p-2 text-foreground/70 transition-colors hover:border-neon-blue hover:text-neon-blue"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 0010.5 18.75a7.5 7.5 0 00-7.5-7.5A7.5 7.5 0 005.196 5.196m0 0L21 21z" />
            </svg>
          </button>
        </div>

        <div className="flex md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-lg border border-border p-2 text-foreground/70"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-foreground/70 hover:text-neon-green"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            aria-label="Search"
            className="mt-2 flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-foreground/70 hover:border-neon-blue hover:text-neon-blue"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 0010.5 18.75a7.5 7.5 0 00-7.5-7.5A7.5 7.5 0 005.196 5.196m0 0L21 21z" />
            </svg>
            Search
          </button>
        </div>
      )}
    </header>
  );
}
