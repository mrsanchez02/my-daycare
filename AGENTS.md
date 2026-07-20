## Next.js

- This repo is on `next@16.2.10` with React 19. Do not assume older Next.js behavior.
- Before changing framework-level patterns, read the relevant local Next docs in `node_modules/next/dist/docs/`.
- This is an App Router app only: the real entrypoints are `app/layout.tsx`, `app/page.tsx`, and `app/globals.css`.

## Commands

- Package manager is npm (`package-lock.json` is committed).
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Focused lint: `npm run lint -- app/page.tsx`
- There is no `test` script and no `typecheck` script. Use `npx tsc --noEmit` for TS verification.
- Full pre-handoff verification: `npm run lint`, `npx tsc --noEmit`, then `npm run build`

## Styling And Structure

- Tailwind is v4 via `@import "tailwindcss"` in `app/globals.css`; do not add a legacy `tailwind.config.*` unless the task requires it.
- The root layout wires Geist fonts into CSS variables; reuse `--font-geist-sans` and `--font-geist-mono` rather than introducing a second font path.
- TypeScript path alias `@/*` points to the repo root.
- Use clean code. name, variables, functions, types, enums, etc. Everything needs to be in english.

## Repo Workflow

- Playwright MCP is enabled in `opencode.json`. Keep screenshots and Playwright artifacts under `.playwright-mcp/`; that directory is gitignored.
- Context7 MCP is enabled in  `opencode.json`. use it to fetch current framework docs instead of relying on training data.
- Repo-local `/spec` and `/spec-impl` skills are installed under `.agents/skills/`. Use them for larger spec-driven work instead of inventing a new flow.
