---
description: Verify a spec's acceptance criteria, fix code mismatches by default, use Context7 for Next.js checks, and use Playwright for visual validation.
agent: spec-acceptance-verifier
model: openai/gpt-5.4
subtask: true
---

Verify the spec identified by `$ARGUMENTS`.

Interpret the command arguments with this contract:

- First meaningful argument: target spec identifier.
- Optional mode flag:
  - `--fix` means fix and re-verify. This is the default if no mode is provided.
  - `--report-only` means inspect and report without changing code.

Execution rules:

1. Resolve the target spec from `specs/` by exact file name, numeric prefix, or slug.
2. Read the spec and treat its `Acceptance criteria` checklist as the verification target.
3. Inspect the codebase and verify each criterion against the actual current state.
4. When a criterion touches Next.js behavior or recommendations, use Context7 before deciding or editing.
5. When a criterion is visual, responsive, or route-screen related, use Playwright to verify the rendered result.
6. In `--fix` mode, correct code and spec mismatches that are within scope, then re-run verification.
7. Update the spec checklist so `[x]` reflects verified passing criteria and `[ ]` reflects failing or unverified ones.
8. Finish with a concise evidence-based report.

If no spec identifier was provided, ask for one and stop.

Default mode when omitted: `--fix`.
