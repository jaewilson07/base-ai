# Prompt snippets (optional)

Keep prompts domain-oriented and contract-driven.

## Structured output (Pydantic)

- Define a Pydantic model for the expected output.
- Ask the model to produce JSON that validates against it.
- Validate + retry/repair on parse failures.
