import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const canonical = path.join(root, "ai", "INSTRUCTIONS.md");
const targets = [
  path.join(root, ".github", "copilot-instructions.md"),
  path.join(root, ".cursor", "rules", "ai.md"),
  path.join(root, ".cursorrules"),
];

function ensureDir(p) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
}

function main() {
  if (!fs.existsSync(canonical)) {
    throw new Error(`Missing canonical instructions: ${canonical}`);
  }
  const content = fs.readFileSync(canonical, "utf8");

  for (const t of targets) {
    ensureDir(t);
    fs.writeFileSync(
      t,
      [
        "<!-- AUTO-GENERATED: edit ai/INSTRUCTIONS.md then run scripts/sync-ai-instructions.mjs -->",
        "",
        content.trimEnd(),
        "",
      ].join("\n"),
      "utf8",
    );
  }

  console.log("Synced AI instructions to:");
  for (const t of targets) console.log(`- ${path.relative(root, t)}`);
}

main();
