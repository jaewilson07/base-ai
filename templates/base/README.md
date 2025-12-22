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

- `pyproject.toml`: Python packaging + Ruff config (Pydantic / pydantic-ai / LangGraph baseline deps)
- `ai/INSTRUCTIONS.md`: canonical agent rules + working agreement
- `ai/PROMPTS.md`: reusable prompt fragments
- `ai/SKILLS.md`: expectations / ways of working
- `ai/TOOLS.md`: tool usage conventions (repo-agnostic)
- `.github/prompts/backend-engineer.prompt.md`: Copilot prompt/agent for backend work
- `.pre-commit-config.yaml`: standard pre-commit checks
- `.github/workflows/pr-checks.yml`: CI running pre-commit on PRs
- `.github/workflows/release-please.yml`: SemVer automation (Release Please)
