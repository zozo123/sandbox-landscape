# AGENTS.md

This file is the compact operating brief for future coding agents working on this repo.

## Project

AI Sandbox Landscape is a static public website and living repo for choosing AI agent sandbox infrastructure by execution guarantees.

Public site:

```text
https://zozo123.github.io/sandbox-landscape/
```

Repo:

```text
https://github.com/zozo123/sandbox-landscape
```

Core thesis:

```text
You are not buying a sandbox.
You are buying execution guarantees.
```

The main workload dimensions are:

- Dangerousness of code.
- Runtime length.
- State persistence.
- GitHub/CI integration.
- GPU, RL, and post-training scale.
- Auto-healing, retries, and orchestration.
- Enterprise credential control.

## Context Discipline

Read in this order:

1. `AGENTS.md`
2. `README.md`
3. `BENCHMARKS.md`
4. `PROMPT.md`
5. `DESIGN.md` for UI or canvas work
6. The specific site or doc file you are editing

Do not load or rewrite everything unless the task truly requires it. Keep future context compact by updating this file when project rules change, and use `PROMPT.md` only for provenance or prompt history that matters later.

## Content Boundaries

- Treat this as a public-info baseline, not a finished benchmark suite.
- Do not add benchmark results without public sources, harness details, logs/artifacts, and agent disclosure.
- Do not use private vendor claims, confidential pricing, private customer stories, or unverifiable screenshots.
- If a claim may have changed, verify it against public sources and include the date in the relevant benchmark or source note.
- Separate measured behavior from vendor positioning.
- Keep the tone sober, technical, and useful for Hacker News readers.
- Write for technical readers making infrastructure decisions for evals,
  RL/post-training rollouts, generated-code execution, PR validation, and
  production-adjacent automation.
- Keep official solution links on the website pointed at public vendor pages,
  documentation, or canonical open-source repositories.
- Keep Crabbox represented as a broker/control-plane option, not just another
  sandbox runtime.
- Keep Monty represented as an embedded, capability-limited micro runtime rather
  than a full agent workspace.
- Keep emerging vendors in the watchlist until they have public evidence,
  benchmark coverage, and a clear workload fit.
- Keep the ComputeSDK benchmarks link visible as an external benchmark
  reference, not as this repo's own measurement.
- Keep the officialskills.sh link visible as an adjacent agent-skills registry,
  not as a sandbox benchmark or vendor ranking.
- Keep cost signals conservative. Prefer linking to public pricing pages over
  embedding fragile exact numbers. If exact numbers are shown, verify them
  against public pricing pages and update the date-sensitive language.

## Visual Direction

- Keep the site slim, dark, and research-oriented, with a registry feel inspired
  by terminal directories such as officialskills.sh. Do not copy their assets or
  scrape their directory; link to it as an adjacent reference.
- Use low-level systems cues: Vim-like command text, monospace labels, compact
  stats, status lines, precise borders, and execution diagrams.
- For dynamic visuals, prefer deterministic seeded canvas graphics that explain
  execution routes, not decorative animation.
- Keep accessibility from the installed `accessibility` skill in scope: native
  controls, visible focus, sufficient contrast, reduced-motion behavior, and
  textual equivalents for canvas graphics.
- Avoid generic SaaS hero styling, heavy gradients, decorative blobs, or
  marketing copy. The page should feel like a clear technical note with a
  polished console surface.
- Preserve the runtime-shape framing before the vendor lists: micro runtime,
  ephemeral task sandbox, persistent agent computer, and control plane.

## Files

```text
index.html                  Main static site
styles.css                  Site layout and visual design
script.js                   Matrix filtering and execution atlas canvas
DESIGN.md                   Design philosophy and canvas/accessibility notes
README.md                   Repo overview and local/deploy instructions
BENCHMARKS.md               Benchmark protocol and disclosure template
PROMPT.md                   Initial prompt provenance and agent disclosure
LAUNCH.md                   Hacker News launch copy and checklist
.github/workflows/pages.yml GitHub Pages deployment
.agents/skills              Local skills installed with `npx skills add`
skills-lock.json            Installed skill lockfile
```

## Update Workflow

1. Keep the static site dependency-free unless there is a strong reason to add tooling.
2. Update docs when changing methodology, benchmark policy, or launch copy.
3. For provider or benchmark changes, add public source links and disclose the agent/model used.
4. Run a local preview:

```bash
python3 -m http.server 8000
```

5. Verify the page:

```bash
curl -I http://localhost:8000/
```

6. Commit with a concrete message and push to `main`.
7. Check the Pages workflow:

```bash
gh run list --repo zozo123/sandbox-landscape --limit 3
```

## Benchmark Rule

Every benchmark must disclose:

```text
public sources
prompt used
agent/model used
date run
repo commit
environment
harness code
raw logs/artifacts
scoring rubric
human edits or exclusions
```

Use `BENCHMARKS.md` as the source of truth.

## Contact

Current LinkedIn contact URL:

```text
https://www.linkedin.com/in/yossi-eliaz
```

If this is wrong, update it in `index.html`, `README.md`, and `LAUNCH.md`.

## Disclosure

Keep the footer disclosure concise:

```text
As of May 16, 2026, Yossi Eliaz is part of Incredibuild and was a founding member of Islo.dev.
```
