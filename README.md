# create-base-ai

Scaffold a new repo with **shared AI instructions** that work in both **Cursor** and **GitHub Copilot**.

## Usage

```bash
npx create-base-ai my-project
# or
npm init base-ai my-project
```

### Install into an existing repo (no overwrites)

```bash
# from inside an existing repo:
npx create-base-ai . --merge
```

## What it generates

- `.github/copilot-instructions.md` (Copilot Chat instructions)
- `.github/prompts/*.prompt.md` (Copilot prompt/agent pack)
- `.cursor/rules/ai.md` and `.cursorrules` (Cursor rules)
- `ai/` (canonical docs: agent behavior, prompts, skills, tools)
- `scripts/sync-ai-instructions.mjs` (keeps Cursor + Copilot files identical)

## Publishing (later)

This repo is already structured as an npm `create-*` package. Publish it to npm and then you (or anyone) can run it via `npx create-base-ai ...`.
