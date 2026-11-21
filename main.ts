import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent.
// The joke is the artifact: a fixed string, written deterministically.
//
// Output contract: /output/entry.txt holds exactly this one line
// (63 Unicode code points, no trailing newline), byte-identical on
// every run — the sandbox re-runs the program and compares hashes.
const JOKE =
  "I review my agent's code the same way it reviews mine: I don't.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
