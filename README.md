# AI Sandbox Landscape

A living static website for mapping AI agent sandbox choices across evals, GitHub Actions, post-training/RL rollouts, generated-code execution, long-running coding agents, auto-healing workflows, and production-adjacent automation.

The central claim:

```text
You are not buying a sandbox.
You are buying an execution contract:
what may run, what persists, what is measured, and what can be stopped.
```

For each workload, ask:

```text
1. How dangerous is the code?
2. How long does it run?
3. Does state need to survive?
4. Does it need GitHub/CI integration?
5. Does it need GPU / RL / post-training scale?
6. Does it need auto-healing / retries / orchestration?
7. Does it need enterprise credential control?
```

## Local Preview

This is a dependency-free static site.

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Repo Structure

```text
index.html                 Static website
styles.css                 Site styling
script.js                  Matrix filtering and execution atlas canvas
DESIGN.md                  Visual philosophy and accessibility notes
BENCHMARKS.md              Benchmark methodology and disclosure template
PROMPT.md                  Prompt provenance and agent disclosure
AGENTS.md                  Compact operating brief for future coding agents
LAUNCH.md                  Hacker News copy and launch checklist
.github/workflows/pages.yml GitHub Pages deployment workflow
```

## Benchmark Policy

Benchmarks added to this repo should be created from public information and reproducible experiments only. Each benchmark must disclose:

- Public sources used.
- Prompt used.
- Agent/model used.
- Date run.
- Commit SHA.
- Environment configuration.
- Harness code.
- Raw logs and artifacts.
- Scoring rubric.
- Human edits or exclusions.

See [BENCHMARKS.md](BENCHMARKS.md).

## Official Links

The website includes official links and public cost signals for the products, docs, and repositories mentioned in the matrix, including Crabbox, exe.dev, ComputeSDK benchmarks, and additional sandbox providers to watch. Keep those links pointed at public vendor pages, pricing pages, docs, benchmark pages, or canonical open-source repositories.

Cost notes are snapshots from public pricing pages. Recheck pricing before using the site for vendor selection or benchmarks.

The page also links to [officialskills.sh](https://officialskills.sh/) as an adjacent agent-skills registry. This repo is focused on execution boundaries and sandbox infrastructure, not skill packaging.

The repo includes local `.agents/skills` installs for accessibility, canvas-design, and algorithmic-art so future agents can keep UI work constrained to accessibility, visual clarity, and deterministic generative graphics.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the static site from the repository root.

After pushing to `main`, enable GitHub Pages in the repository settings if GitHub has not enabled it automatically:

```text
Settings -> Pages -> Build and deployment -> GitHub Actions
```

Expected public URL after deployment:

```text
https://zozo123.github.io/sandbox-landscape/
```

## Hacker News Launch

The Hacker News title, submit link, first comment, and checklist live in [LAUNCH.md](LAUNCH.md).

## Feedback

For corrections, additions, or to be considered for inclusion, reach out on LinkedIn:

```text
https://www.linkedin.com/in/yossi-eliaz
```
