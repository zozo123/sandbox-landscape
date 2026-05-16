# Design Notes

## Execution Cartography

The site uses a terminal-directory aesthetic for technical readers: compact labels, high-contrast dark surfaces, precise borders, and sparse green accents. The goal is to feel closer to a runtime map or public research artifact than a generic SaaS landing page.

The visual system is based on execution paths. Workloads move from risk and intent, through a control layer, into a sandbox boundary, and out as evidence. The canvas atlas makes that flow visible without turning the page into decoration.

The graphic is intentionally deterministic. Each route uses a fixed seed so the animation feels computational and reproducible, matching the repo's benchmark policy: prompts, agents, dates, commits, logs, artifacts, and scoring should be disclosed.

Accessibility constraints are part of the design, not a post-pass. Interactive controls use native buttons, focus states remain visible, route changes update text, and the canvas has a plain-language label plus a textual summary.

## Social Preview

The Open Graph image is generated from `og-image.html` at 1200 by 630 pixels and committed as `og-image.png`. It should read clearly at LinkedIn thumbnail size, so it uses one strong thesis, sparse labels, and a compact execution-route diagram instead of a screenshot of the page.

Design philosophy: Contract Cartography. The card treats agent execution as a map of permissions, state, resets, scale, secrets, evidence, and stop conditions. The composition should feel like a meticulously crafted systems diagram: high-contrast terminal surface, precise grid, restrained green signal color, and minimal text. It must avoid generic SaaS polish and communicate the subject through structure, not decoration.
