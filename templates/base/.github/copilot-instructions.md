<!-- AUTO-GENERATED: edit ai/INSTRUCTIONS.md then run scripts/sync-ai-instructions.mjs -->

# {{projectName}}

## What this repo is

- **Goal**: a reusable base project with shared AI guidance that works in **Cursor** and **GitHub Copilot**.
- **Default stance**: keep things **modular** and **replaceable** (microservices-oriented; infra can be swapped out).

## Tech preferences (project-wide)

- **Python packaging**: use `pyproject.toml` (not `requirements.txt`) for dependencies and tool config.
- **Modeling LLM I/O**: use **Pydantic** models for structured outputs and validation.
- **Agents & orchestration**:
  - Prefer **pydantic-ai** for agent scaffolding/patterns.
  - Prefer **LangGraph** for orchestration/graphs where workflows benefit from state + routing.

## Architecture (universal)

- **Microservices-oriented**: design capabilities as independent, composable services/modules with clear contracts.
- **Swap-infrastructure friendly**:
  - Keep **interfaces/ports** in the domain layer.
  - Put cloud/vendor/framework code behind **adapters** (dependency inversion).
  - Avoid letting storage/queue/LLM vendor details leak into domain logic.

## Folder structure conventions (universal)

- Prefer **domain naming** over implementation/technology naming.
  - ✅ `domains/storage/`, `domains/memory/`, `domains/billing/`
  - ❌ `agents/`, `graphs/`, `llms/`, `prompts/` as top-level organizing units
- Domain folders should hold:
  - **contracts** (interfaces/types)
  - **business logic**
  - **adapters** (IO: db/files/queues/LLM providers) separated from core logic

## Working agreement for changes

- Keep changes small, reviewable, and consistent with existing patterns.
- Prefer adding/adjusting tests alongside behavior changes when feasible.
- Avoid introducing new dependencies unless clearly justified.

