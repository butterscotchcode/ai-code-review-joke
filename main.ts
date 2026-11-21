import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent.
// Written verbatim to /output/entry.txt — deterministic, no network.
const JOKE = "I review my agent's code the same way it reviews mine: I don't.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
