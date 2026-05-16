# Launch Notes

Use this file when posting or updating the Hacker News launch. Keep the post direct and non-promotional.

## Status

```text
Site: https://zozo123.github.io/sandbox-landscape/
Repo: https://github.com/zozo123/sandbox-landscape
Pages: deployed from main with GitHub Actions
```

## Hacker News Title

```text
Show HN: Sandbox Landscape for evals, RL rollouts, and generated code
```

## Hacker News URL

```text
https://zozo123.github.io/sandbox-landscape/
```

## Submit Link

```text
https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fzozo123.github.io%2Fsandbox-landscape%2F&t=Show%20HN%3A%20Sandbox%20Landscape%20for%20evals%2C%20RL%20rollouts%2C%20and%20generated%20code
```

## Suggested First Comment

```text
I made this because the recurring question "which sandbox should we use for agents?" is usually underspecified.

The framing here is that teams are not buying one sandbox. They are buying execution guarantees: isolation, reset semantics, state, scale, credential control, GitHub/CI integration, orchestration, and evidence capture.

The site is written for technical people comparing eval harnesses, RL/post-training rollout environments, generated-code execution, PR validation, persistent agent workspaces, and production-adjacent sandboxes.

The repo is intentionally early and based on public information. I plan to update it gradually with reproducible benchmarks. For benchmark entries, the rule is to disclose public sources, prompt used, agent/model used, harness, raw logs/artifacts, environment, scoring rubric, and human edits.

I also added official links and public cost signals for the tools mentioned, so corrections can point to vendor pages, pricing pages, docs, or canonical repos rather than screenshots or private claims.

I would especially value corrections, missing projects, and real-world experience from people running evals, agent CI, stateful coding agents, RL rollout infrastructure, or production sandboxing for generated code.
```

## Short Social Copy

```text
I published a living Sandbox Landscape: a public-info map for choosing execution boundaries across agent evals, RL/post-training rollouts, generated-code execution, PR validation, persistent agent workspaces, and production-adjacent automation.

Future benchmarks will disclose sources, prompts, agents/models used, harnesses, logs, and scoring rubrics.
```

## Launch Checklist

- Public site returns 200.
- GitHub repo is public.
- README includes benchmark policy.
- `BENCHMARKS.md` requires public-info sources and agent disclosure.
- `PROMPT.md` records the seed prompt and agent used.
- `AGENTS.md` gives future agents a compact context brief.
- Website includes official links for each mentioned solution.
- Website includes public pricing/cost links for the major solutions.
- LinkedIn contact URL is correct: https://www.linkedin.com/in/yossi-eliaz
- HN first comment is pasted after submission.

## Post-Launch Triage

Track feedback as small repo issues or doc updates:

```text
correction: factual update or stale source
addition: provider/tool candidate
benchmark: reproducible workload proposal
methodology: scoring or evidence rule change
design: site readability or navigation improvement
```
