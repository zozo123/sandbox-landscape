# AI Sandbox Landscape

A static snapshot (May 16, 2026), AI-generated with Codex from public sources, mapping AI agent sandbox choices across evals, GitHub Actions, post-training/RL rollouts, generated-code execution, long-running coding agents, auto-healing workflows, and production-adjacent automation. Live page: [zozo123.github.io/sandbox-landscape](https://zozo123.github.io/sandbox-landscape/). By [Yossi Eliaz](https://zozo123.github.io/).

The central claim:

```text
You are not buying a sandbox.
Choose the execution contract first:
permissions, isolation, reset, state, scale, secrets, evidence, and stop conditions.
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
og-image.html              Source for the generated social preview image
og-image.png               Open Graph / LinkedIn / Twitter preview image
styles.css                 Site styling
script.js                  Matrix filtering and execution atlas canvas
DESIGN.md                  Visual philosophy and accessibility notes
BENCHMARKS.md              Benchmark methodology and disclosure template
PROMPT.md                  Prompt provenance and agent disclosure
AGENTS.md                  Compact operating brief for future coding agents
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

Disclosure: the author works at Incredibuild / islo.dev, one of the providers listed. Vendors in each matrix cell are listed alphabetically.

The page also links to [officialskills.sh](https://officialskills.sh/) as an adjacent agent-skills registry. This repo is focused on execution boundaries and sandbox infrastructure, not skill packaging.

The repo vendors agent skills from [addyosmani/web-quality-skills](https://github.com/addyosmani/web-quality-skills) (accessibility) and [anthropics/skills](https://github.com/anthropics/skills) (canvas-design, algorithmic-art) under `.agents/skills`, so future agents can keep UI work constrained to accessibility, visual clarity, and deterministic generative graphics.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the static site from the repository root.

When changing the social preview, update `og-image.html`, regenerate `og-image.png`, and verify the deployed `og:image` metadata.

After pushing to `main`, enable GitHub Pages in the repository settings if GitHub has not enabled it automatically:

```text
Settings -> Pages -> Build and deployment -> GitHub Actions
```

Expected public URL after deployment:

```text
https://zozo123.github.io/sandbox-landscape/
```

## Feedback

For corrections, additions, or to be considered for inclusion, reach out on LinkedIn:

```text
https://www.linkedin.com/in/yossi-eliaz
```
