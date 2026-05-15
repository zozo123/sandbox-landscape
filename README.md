# AI Sandbox Landscape

A living static website for mapping AI agent sandbox choices across evals, GitHub Actions, post-training/RL rollouts, long-running coding agents, auto-healing workflows, and production-adjacent automation.

The central claim:

```text
You are not buying a sandbox.
You are buying execution guarantees.
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
script.js                  Matrix filtering
BENCHMARKS.md              Benchmark methodology and disclosure template
PROMPT.md                  Prompt provenance and agent disclosure
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

## Hacker News Draft

Title:

```text
AI Sandbox Landscape: choosing execution guarantees for agents, evals, CI, and RL
```

Text:

```text
I made a living public-info map of AI sandbox choices for agent evals, GitHub Actions, post-training/RL rollouts, long-running coding agents, auto-healing workflows, and production-adjacent automation.

The main framing is that teams are not buying "a sandbox"; they are buying execution guarantees: state, scale, isolation, credential control, CI integration, orchestration, and evidence capture.

The repo is intentionally early. I plan to update it gradually. Future benchmarks will be created from public information and reproducible experiments, and each benchmark should disclose the prompt, sources, agent/model used, harness, raw logs, and scoring rubric.

Feedback and inclusion requests welcome, especially if you can point to public docs or reproducible behavior.
```

## Feedback

For corrections, additions, or to be considered for inclusion, reach out on LinkedIn:

```text
https://www.linkedin.com/in/zozo123/
```
