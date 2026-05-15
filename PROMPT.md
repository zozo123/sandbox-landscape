# Prompt Provenance

This repository was seeded from a user-provided landscape prompt and implemented by Codex in a local coding workspace on May 15, 2026.

## Agent Used

```text
Agent: Codex
Model family: GPT-5
Workspace: /Users/zozo123/repos/bench-sandboxes
Date: 2026-05-15
```

## Seed Prompt Summary

The user asked for a public repository and website about the AI sandbox landscape, with:

- A decision matrix for workloads such as agent evals, GitHub Actions, post-training/RL rollouts, long-running coding agents, auto-healing workflows, auto-spawning experiments, browser/research agents, and production-adjacent actions.
- A clear thesis that the answer is not one sandbox, but a portfolio of sandbox backends with a control plane above them.
- Coverage of tools and providers including Harbor, Modal, Daytona, Docker Sandboxes, Temporal, GitHub Actions ARC, E2B, Runloop, Islo, Tensorlake, Kubernetes Agent Sandbox, and related model-native code execution tools.
- A way for people to reach out on LinkedIn to give feedback or be considered for inclusion.
- A benchmark policy stating that future benchmarks should be based on public information and should disclose which agent was used.
- A repo that can be updated gradually and posted on Hacker News.

## Benchmark Prompt Requirement

Future benchmark prompts should be committed with the benchmark artifacts. Each prompt should state:

```text
1. The public sources the agent may use.
2. The workload being tested.
3. The providers or tools being compared.
4. The exact scoring rubric.
5. The agent/model used.
6. The allowed tools.
7. The environment and timeout limits.
8. The required output artifacts.
```

This makes the benchmark reproducible and separates measured behavior from vendor claims.
