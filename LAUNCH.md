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
Show HN: AI Sandbox Landscape - sandboxes for agents, evals, CI and RL
```

## Hacker News URL

```text
https://zozo123.github.io/sandbox-landscape/
```

## Submit Link

```text
https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fzozo123.github.io%2Fsandbox-landscape%2F&t=Show%20HN%3A%20AI%20Sandbox%20Landscape%20-%20sandboxes%20for%20agents%2C%20evals%2C%20CI%20and%20RL
```

## Suggested First Comment

```text
I made this because the recurring question "which sandbox should we use for agents?" seems underspecified.

The framing here is that teams are not buying one sandbox. They are buying execution guarantees: state, scale, isolation, credential control, GitHub/CI integration, orchestration, and evidence capture.

The repo is intentionally early and based on public information. I plan to update it gradually with reproducible benchmarks. For benchmark entries, the rule is to disclose public sources, prompt used, agent/model used, harness, raw logs/artifacts, environment, scoring rubric, and human edits.

I would especially value corrections, missing projects, and real-world experience from people running evals, agent CI, stateful coding agents, or RL rollout infrastructure.
```

## Short Social Copy

```text
I published a living AI Sandbox Landscape: a public-info map for choosing sandboxes by workload and execution guarantees across agent evals, CI, RL rollouts, long-running coding agents, and production-adjacent workflows.

Future benchmarks will disclose sources, prompts, agents/models used, harnesses, logs, and scoring rubrics.
```

## Launch Checklist

- Public site returns 200.
- GitHub repo is public.
- README includes benchmark policy.
- `BENCHMARKS.md` requires public-info sources and agent disclosure.
- `PROMPT.md` records the seed prompt and agent used.
- `AGENTS.md` gives future agents a compact context brief.
- LinkedIn contact URL is correct.
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
