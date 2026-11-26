// news-image-20261126 — copies the front page drawn for 26 November 2026
// (entry.png, in this repository) to the grader's output directory.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(join(here, "entry.png"), target);

// The grader runs this program twice and requires byte-identical output:
// a plain copy of a fixed file is deterministic by construction.
const bytes = statSync(target).size;
if (bytes === 0 || bytes > 1048576) {
  throw new Error(`entry.png has unexpected size: ${bytes} bytes`);
}
console.log(`wrote ${target} (${bytes} bytes)`);
