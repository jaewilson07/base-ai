# Developer workstation setup (CLI tools)

This doc is a grab-bag of **popular CLI tools** that are commonly useful across projects. Commands below target **Ubuntu/Debian**; adapt as needed.

## Baseline (recommended)

```bash
sudo apt update
sudo apt install -y git curl wget ca-certificates unzip xz-utils build-essential
```

## GitHub CLI (`gh`)

```bash
sudo apt install -y gh
gh auth login
```

## Search / inspect / quality-of-life

- **ripgrep (`rg`)**:

```bash
sudo apt install -y ripgrep
```

- **jq**:

```bash
sudo apt install -y jq
```

- **fzf**:

```bash
sudo apt install -y fzf
```

- **bat** (pretty `cat`):

```bash
sudo apt install -y bat
# some distros name it `batcat`
```

## Node.js tooling

This repo uses `npx`-style scaffolding, so you’ll want Node + npm.

```bash
node -v
npm -v
```

Optional package managers:

```bash
npm i -g pnpm
```

## Gemini CLI (via `npx`)

The project reference:

```bash
npx https://github.com/google-gemini/gemini-cli
```

If the package is published to npm, you can also run it by package name (preferred for repeat use):

```bash
# example (name may differ depending on upstream publishing)
npx @google/gemini-cli --help
```

## Python tooling (optional)

```bash
sudo apt install -y python3 python3-pip python3-venv
```

## Docker (optional)

```bash
sudo apt install -y docker.io docker-compose-plugin
sudo usermod -aG docker "$USER"
```
