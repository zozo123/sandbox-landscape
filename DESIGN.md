# Design Notes

## Execution Cartography

The site uses a terminal-directory aesthetic for technical readers: compact labels, high-contrast dark surfaces, precise borders, and sparse green accents. The goal is to feel closer to a runtime map or public research artifact than a generic SaaS landing page.

The visual system is based on execution paths. Workloads move from risk and intent, through a control layer, into a sandbox boundary, and out as evidence. The canvas atlas makes that flow visible without turning the page into decoration.

The graphic is intentionally deterministic. Each route uses a fixed seed so the animation feels computational and reproducible, matching the repo's benchmark policy: prompts, agents, dates, commits, logs, artifacts, and scoring should be disclosed.

Accessibility constraints are part of the design, not a post-pass. Interactive controls use native buttons, focus states remain visible, route changes update text, and the canvas has a plain-language label plus a textual summary.
