# Developer Tools & AI Services Platform — Implementation Plan

## Goal
Build a fully responsive, cyberpunk-tech-styled developer tools discovery platform with static embedded data.

## Architecture
- Next.js 16 (App Router) + React 19 + Tailwind v4 + TypeScript
- Static data in `lib/data.ts`
- Routes: `/`, `/tools`, `/tools/[id]`, `/privacy`

## Design System
- **Colors** (extend via `@theme` in `globals.css`): deep black `#0a0a0f`, neon green `#00ff41`, cyber blue `#00d4ff`, neon purple `#bf00ff`
- **Typography**: Geist Sans (body) + JetBrains Mono (headings/code/terminal)
- **Responsive**: mobile-first Tailwind breakpoints

## Data Model
- 15–20 tools with: `id`, `name`, `slug`, `category`, `tags[]`, `description`, `features[]`, `pricing`, `url`
- Hybrid organization: fixed top-level categories + per-tool tags

## Pages
1. `/` — Hero with animated terminal typing effect + featured tools preview + CTA
2. `/tools` — Search bar + category tabs + tag chips + tool card grid + comparison modal
3. `/tools/[id]` — Full tool detail: description, features, specs, related tools, CTA
4. `/privacy` — Encryption, secure protocols, anonymous browsing, data protection, privacy tools

## Components
- `Navbar` — logo + Home/Tools/Privacy + search icon, responsive hamburger
- `Footer` — copyright, social links, About/Privacy/Terms
- `Hero`, `ToolCard`, `SearchBar`, `CategoryTabs`, `TagChips`, `ComparisonModal`, `ToolDetail`, `PrivacySection`

## Comparison Mode
- Modal/overlay on `/tools`
- Select 2–4 tools via checkboxes on cards
- Side-by-side feature/spec table
- React state for selections + shareable URL via query params

## Validation
- `next build` for type checking and build validation
- Manual responsive testing across breakpoints

## Execution Order
1. Update `globals.css` with Tailwind theme extension + Google Fonts
2. Create `lib/data.ts` with static tool data (15–20 entries)
3. Build `Navbar` and `Footer` components
4. Build `/` page with Hero and featured tools
5. Build `/tools` page with search, filters, cards, and comparison modal
6. Build `/tools/[id]` page
7. Build `/privacy` page
8. Final responsive polish and validation
