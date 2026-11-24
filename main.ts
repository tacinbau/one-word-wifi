// One Word for Your Wi-Fi — entry program.
// Writes a single word describing home Wi-Fi to
// $MAKEFUN_OUTPUT_DIR/entry.txt (the grader mounts it at /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word: Wi-Fi that vanishes mid-call without a word,
// like a bad date. Funny at once, true to how home Wi-Fi
// actually behaves, and it works as a network name.
const word = "Ghosting";

// Guard the gate before writing: 1-20 chars, one word, no whitespace.
if (word.length < 1 || word.length > 20 || /\s/.test(word)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(word)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), word, "utf8");
console.log(`Wrote entry: ${word}`);
