# Partner logos

Drop real partner logo files here as `.svg` (preferred) or `.png` with transparent
background. The expected filenames match the `slug` field in
`src/components/sections/Partners.tsx` — e.g. `gmm-grammy.svg`, `tellscore.svg`.

Guidelines:
- Monochrome versions render best on the partner wall (they get tinted on hover).
- Aim for ~200 px wide; aspect ratio is preserved automatically.
- For SVGs, use `currentColor` or a single fill color so the marquee can recolor.

If a file is missing the component will fall back to a styled wordmark so the
layout never breaks.
