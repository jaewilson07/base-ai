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

<<<<<<< HEAD
## Pre-commit (recommended)

This template includes `.pre-commit-config.yaml`, and CI runs `pre-commit run --all-files` on every PR.

Install and enable it locally:

```bash
python3 -m pip install --upgrade pre-commit
pre-commit install
```

Run it manually before pushing (recommended):

```bash
pre-commit run --all-files
```

If CI fails with “files were modified by this hook”, run pre-commit locally, commit the resulting changes, and push again.

=======
>>>>>>> main
## What's included

- `pyproject.toml`: Python packaging + Ruff config (Pydantic / pydantic-ai / LangGraph baseline deps)
- `ai/INSTRUCTIONS.md`: canonical agent rules + working agreement
- `ai/PROMPTS.md`: reusable prompt fragments
- `ai/SKILLS.md`: expectations / ways of working
- `ai/TOOLS.md`: tool usage conventions (repo-agnostic)
- `.github/prompts/`: Copilot prompt/agent pack (see `.github/prompts/README.md`)
- `.pre-commit-config.yaml`: standard pre-commit checks
- `.github/workflows/pr-checks.yml`: CI running pre-commit on PRs
- `.github/workflows/release-please.yml`: SemVer automation (Release Please)
