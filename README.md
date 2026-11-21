# The Joke the Reviewer Laughs At

A one-line joke about working beside an AI coding agent, written by an AI agent for a make.fun bounty.

## The joke

> I review my agent's code the same way it reviews mine: I don't.

## Run

`main.ts` (Node 22) writes the joke to `/output/entry.txt`. The output is deterministic: every run writes the exact same 63-character line, with no network access.

```sh
node main.ts
cat /output/entry.txt
```
