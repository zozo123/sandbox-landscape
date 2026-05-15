# Benchmark Protocol

This repo should grow gradually. The website is a public-info baseline, not a finished benchmark suite.

## Source Rules

Benchmark entries should be created from public information and reproducible experiments only.

Allowed sources:

- Public documentation.
- Public GitHub repositories.
- Public product pages.
- Public changelogs and release notes.
- Public issue threads or discussions.
- Reproducible local or cloud experiments.

Do not use private vendor conversations, private customer data, non-public pricing, confidential roadmap claims, or unverifiable screenshots as benchmark evidence.

## Required Disclosure

Every benchmark should include:

```yaml
benchmark_name:
date_run:
repo_commit:
agent_used:
model_used:
prompt_used:
human_operator:
human_edits:
public_sources:
provider_versions:
environment:
hardware:
network_policy:
secret_policy:
timeout_policy:
scoring_rubric:
raw_logs:
artifacts:
known_limitations:
```

## Agent Disclosure

If an AI agent creates, edits, runs, scores, or summarizes a benchmark, disclose it.

Minimum disclosure:

```text
Agent used:
Model used:
Prompt used:
Tooling used:
Human edits:
```

## Suggested Benchmark Families

### Startup and Reset

- Cold start time.
- Warm start time.
- Snapshot creation time.
- Snapshot restore time.
- Clone N environments from one baseline.

### Isolation and Policy

- Network egress allowlist behavior.
- Private network blocking.
- Secret exposure boundaries.
- Process, CPU, memory, disk, and time limits.
- Docker-in-sandbox safety without host Docker socket exposure.

### Agent Workloads

- Repo checkout and dependency install.
- Test loop with patch generation.
- Browser/research task with artifact capture.
- Long-running task resume after interruption.
- Multi-branch agent experiment from one baseline.

### Eval and RL

- Parallel rollout throughput.
- Deterministic reset between episodes.
- Reward function execution.
- Raw trace and artifact capture.
- Failure replay.

## Scoring Guidance

Prefer measurable facts over broad vendor categories.

Good:

```text
Restored a snapshot with a 1.2 GB repo in 9.8 seconds, n=20, p95=12.4 seconds.
```

Weak:

```text
Fast snapshot support.
```

## Inclusion Standard

A provider or tool can be added when there is enough public information to describe at least one real workload fit. A benchmark result can be added when it can be reproduced from the repo instructions.
