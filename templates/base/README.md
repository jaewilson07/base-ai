# {{projectName}}

Base project scaffold with **shared AI instructions** for:

- **Cursor** (`.cursor/` + `.cursorrules`)
- **GitHub Copilot** (`.github/copilot-instructions.md`)

## AI instructions (single source of truth)

- **Edit**: `ai/INSTRUCTIONS.md`
- **Sync** (copies into Cursor + Copilot locations):

```bash
node scripts/sync-ai-instructions.mjs
```

## What's included

- `ai/INSTRUCTIONS.md`: canonical agent rules + working agreement
- `ai/PROMPTS.md`: reusable prompt fragments
- `ai/SKILLS.md`: expectations / ways of working
- `ai/TOOLS.md`: tool usage conventions (repo-agnostic)
