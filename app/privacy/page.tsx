export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          <span className="text-neon-green">&gt;</span> Privacy Guide
        </h1>
        <p className="mt-4 text-sm leading-7 text-foreground/60 sm:text-base">
          A technical deep-dive into encryption, secure communication, and anonymous browsing. Designed for developers who build with privacy by default.
        </p>
      </div>

      <div className="mt-12 space-y-16">
        <section>
          <h2 className="font-display text-xl font-bold text-neon-blue">01. Encryption Methods</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/60">
            Modern encryption is the foundation of digital privacy. End-to-end encryption (E2EE) ensures only communicating users can read messages. Use AES-256 for data at rest and TLS 1.3 for data in transit. For asymmetric needs, RSA-4096 or elliptic-curve cryptography (ECC) like Curve25519 offers stronger security with smaller key sizes.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/60">
            <li>AES-256-GCM for symmetric encryption</li>
            <li>ChaCha20-Poly1305 for mobile and low-power devices</li>
            <li>Curve25519 for key exchange and signatures</li>
            <li>Argon2id for password hashing</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-neon-blue">02. Secure Communication Protocols</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/60">
            Protocols define how data moves across networks securely. Always prefer TLS 1.3 over older versions. For real-time communication, WebRTC with SRTP provides encrypted peer-to-peer media streams. In service meshes, mTLS ensures every service authenticates its peers automatically.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/60">
            <li>TLS 1.3 with forward secrecy (ECDHE)</li>
            <li>Signal Protocol for messaging apps</li>
            <li>WebRTC + SRTP for real-time media</li>
            <li>mTLS for zero-trust service meshes</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-neon-blue">03. Anonymous Browsing Techniques</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/60">
            True anonymity requires layering. Combine Tor or VPNs with hardened browsers like Tor Browser or Mullvad Browser. Disable JavaScript, block trackers, and use DuckDuckGo or Searx for search. For metadata reduction, route traffic through multiple jurisdictions and avoid logging into personal accounts.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/60">
            <li>Tor Browser for onion-routed anonymity</li>
            <li>VPN + Tor chaining for layered IP protection</li>
            <li>Hardened browser configs (no JS, strict CSP)</li>
            <li>Decentralized search engines (Searx, Brave Search)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-neon-blue">04. Data Protection & User Anonymity</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/60">
            Data protection is about minimizing exposure. Apply data minimization principles: collect only what you need, encrypt what you store, and purge what you do not. Use pseudonyms instead of real identifiers, hash email addresses before indexing, and separate PII from behavioral data in different databases.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/60">
            <li>Data minimization and purpose limitation</li>
            <li>Pseudonymization and tokenization</li>
            <li>Immutable audit logs with cryptographic hashing</li>
            <li>Right-to-deletion automation (GDPR/CCPA)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-neon-blue">05. Privacy Tools for Developers</h2>
          <p className="mt-3 text-sm leading-7 text-foreground/60">
            Equip your workflow with tools that respect privacy. Use threat models to select the right stack: local password managers, encrypted secrets vaults, private analytics, and self-hosted alternatives to cloud services.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/60">
            <li>Bitwarden / KeePassXC for password management</li>
            <li>Age / GPG for file encryption in CI/CD</li>
            <li>Plausible / Umami for privacy-first analytics</li>
            <li>Matrix / Session for decentralized communication</li>
          </ul>
        </section>
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="font-display text-lg font-bold text-neon-green">Why a dark website matters</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/60">
          A dark-themed interface is not just aesthetic — it reduces eye strain during long coding sessions, improves focus in low-light environments, and signals a privacy-first mindset. When combined with encryption, secure protocols, and anonymous browsing techniques, it becomes part of a cohesive developer experience built around control, security, and anonymity.
        </p>
      </div>
    </div>
  );
}
