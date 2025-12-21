#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const TEMPLATE_DIR = path.resolve(__dirname, "..", "templates", "base");

function usage() {
  console.log(
    [
      "create-base-ai",
      "",
      "Usage:",
      "  npx create-base-ai <project-directory> [--yes]",
      "  npm init base-ai <project-directory> [--yes]",
      "",
      "Options:",
      "  --yes       Skip confirmation prompts",
      "  -h, --help  Show help",
    ].join("\n"),
  );
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const out = { yes: false, help: false, dir: null };

  for (const a of args) {
    if (a === "--yes") out.yes = true;
    else if (a === "-h" || a === "--help") out.help = true;
    else if (!out.dir) out.dir = a;
    else {
      console.error(`Unknown argument: ${a}`);
      process.exit(2);
    }
  }
  return out;
}

function isDirEmpty(dir) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    // Allow only .git if user already ran git init
    return entries.every((e) => e.name === ".git");
  } catch {
    return true;
  }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyDir(srcDir, destDir, transformFile) {
  ensureDir(destDir);
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath, transformFile);
    } else if (entry.isFile()) {
      const buf = fs.readFileSync(srcPath);
      const out = transformFile ? transformFile(entry.name, srcPath, buf) : buf;
      fs.mkdirSync(path.dirname(destPath), { recursive: true });
      fs.writeFileSync(destPath, out, { flag: "wx" });
    }
  }
}

function renderTemplateBytes(bytes, vars) {
  const s = bytes.toString("utf8");
  const rendered = s.replace(/\{\{(\w+)\}\}/g, (_m, k) =>
    Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : _m,
  );
  return Buffer.from(rendered, "utf8");
}

function promptYesNo(question) {
  const fd = process.stdin.fd;
  process.stdout.write(`${question} (y/N) `);
  const input = fs.readFileSync(fd, "utf8").trim().toLowerCase();
  return input === "y" || input === "yes";
}

function main() {
  const { yes, help, dir } = parseArgs(process.argv);
  if (help || !dir) {
    usage();
    process.exit(help ? 0 : 1);
  }

  const projectDir = path.resolve(process.cwd(), dir);
  const projectName = path.basename(projectDir);

  if (!fs.existsSync(TEMPLATE_DIR)) {
    console.error(`Template not found: ${TEMPLATE_DIR}`);
    process.exit(1);
  }

  ensureDir(projectDir);
  if (!isDirEmpty(projectDir)) {
    console.error(
      `Target directory is not empty: ${projectDir}\nRefusing to overwrite.`,
    );
    process.exit(1);
  }

  if (!yes) {
    console.log(`About to scaffold into: ${projectDir}`);
    if (!promptYesNo("Continue?")) process.exit(0);
  }

  const vars = {
    projectName,
    year: new Date().getFullYear(),
  };

  copyDir(TEMPLATE_DIR, projectDir, (_name, _srcPath, bytes) =>
    renderTemplateBytes(bytes, vars),
  );

  console.log("");
  console.log("Done.");
  console.log("");
  console.log("Next steps:");
  console.log(`  cd ${dir}`);
  console.log("  npm run sync:ai  # keep Cursor + Copilot instructions identical");
}

main();

