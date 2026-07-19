import Link from "next/link";

const footerLinks = [
  { href: "/", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/tools", label: "Tools" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-6">
            <span className="font-display text-sm font-bold tracking-tight text-neon-green">DEVTOOLS://</span>
            <span className="text-xs text-foreground/50">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-foreground/50 transition-colors hover:text-neon-green"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-foreground/50 transition-colors hover:text-neon-green"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
