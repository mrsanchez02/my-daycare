# Open Daycare

Next.js 16 App Router project with a spec-driven workflow for defining, implementing, and verifying features.

## Requirements

- Node.js compatible with this project's Next.js setup
- npm

## Commands

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Verification

Run the standard project verification before handoff:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Spec Workflow

This repo includes local skills and commands for a spec-driven process:

- `/spec` creates and refines specs under `specs/`
- `/spec-impl` implements an approved spec
- `/verify-spec` verifies acceptance criteria against the current codebase

### Verify a spec

```text
/verify-spec <spec-identifier>
/verify-spec <spec-identifier> --fix
/verify-spec <spec-identifier> --report-only
```

Behavior:

- Uses the project agent `spec-acceptance-verifier`
- Resolves specs by file name, numeric prefix, or slug fragment
- Treats `Acceptance criteria` as the source of truth
- Fixes code/spec mismatches by default in `--fix` mode
- Uses Context7 for Next.js-specific checks
- Uses Playwright for visual and responsive validation when needed

## Project Automation

- Agent: `.opencode/agents/spec-acceptance-verifier.md`
- Command: `.opencode/commands/verify-spec.md`
- Repo guidance: `AGENTS.md`
