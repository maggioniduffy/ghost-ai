# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Foundation / Design System

## Current Goal

- Implement Feature 03: Auth

## Completed

- Feature 01: Design System — shadcn/ui initialized (Tailwind v4, Radix, Nova preset), lucide-react installed, Button/Card/Dialog/Input/Tabs/Textarea/ScrollArea components added, lib/utils.ts with cn() created, globals.css updated with full dark theme tokens and @theme inline mappings.
- Feature 02: Editor Chrome — EditorNavbar (fixed top bar, sidebar toggle with PanelLeftOpen/Close icons, left/center/right sections) and ProjectSidebar (floating overlay, slide-in from left, Projects header + close button, My Projects / Shared tabs with empty states, full-width New Project button) created in components/editor/.
- Feature 03: Auth — ClerkProvider with @clerk/ui dark theme wraps root layout; proxy.ts at project root protects all routes except /sign-in and /sign-up; two-panel sign-in/sign-up pages (logo+tagline+feature list left, Clerk form right; form-only on small screens); app/page.tsx redirects to /editor (authed) or /sign-in (unauthed); app/editor/page.tsx hosts EditorShell; UserButton added to editor navbar right section.

## In Progress

- None.

## Next Up

- Feature 04 (TBD — see feature-specs directory)

## Open Questions

- None yet.

## Architecture Decisions

- Tailwind v4 CSS-first config (no tailwind.config.js) — all theme tokens live in globals.css via @theme inline.
- shadcn/ui components live in components/ui/ and must not be modified after installation.
- Dark-only theme: shadcn :root variables mapped directly to project palette; no .dark class toggle needed.
- Next.js 16 uses proxy.ts (not middleware.ts) — the middleware file convention was renamed in v16.

## Session Notes

- Project uses Next.js 16.2.6, React 19, Tailwind v4, TypeScript.
- Dark-only theme. All color tokens are CSS custom properties mapped via @theme inline.
- Tailwind utility classes: bg-base, bg-surface, bg-elevated, bg-subtle, text-copy-primary, text-copy-muted, border-surface-border, text-brand, bg-accent-dim, etc.
- @clerk/nextjs v7.4.0, @clerk/ui v1.13.0 installed.
- Clerk appearance overrides use CSS var() references to project design tokens — no hardcoded colors.
