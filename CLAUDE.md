# CLAUDE.md — Autonomous GitHub Actions Web App

## Project Overview
This is a React + TypeScript web app managed by an autonomous pipeline. Changes are driven by GitHub Issues — when an issue is created with the `ai-implement` label, a GitHub Action runs Claude Code to implement the changes and open a PR automatically.

## Tech Stack
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS (vanilla)
- **Linting**: ESLint (flat config)

## Project Structure
```
src/
  main.tsx       # Entry point
  App.tsx         # Root component
  App.css         # App styles
  index.css       # Global styles
  assets/         # Static assets
.github/
  workflows/
    issue-to-pr.yml   # Main autonomous pipeline
    auto-label.yml    # Auto-triage new issues
```

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build (must pass before committing)
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build

## Coding Conventions
- Use TypeScript strict mode (enforced by tsconfig)
- Functional components with hooks — no class components
- Keep components small and focused
- Use CSS modules or vanilla CSS — no CSS-in-JS libraries
- Export components as default exports from their files
- Named exports for utilities and types

## Autonomous Agent Guidelines
When implementing an issue:
1. **Understand first** — Read the full issue body and any referenced context
2. **Keep changes minimal** — Only modify what the issue asks for
3. **Verify** — Always run `npm run build` before committing
4. **Branch naming** — Use `ai/issue-{number}` for the branch
5. **PR description** — Reference the issue with "Closes #{number}", summarize changes, note assumptions
6. **No secrets** — Never commit API keys, tokens, or credentials
7. **No unnecessary dependencies** — Don't add packages unless the issue requires it

## Labels
- `ai-implement` — Triggers the autonomous pipeline
- `ai-triage` — Applied to all new issues for review
- Comment `/implement` on any issue to manually trigger the pipeline
