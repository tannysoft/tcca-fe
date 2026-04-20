/**
 * Fixed-position ambient backdrop behind inner-page content.
 *
 * Strategy: one very wide warm glow centered above the viewport plus a
 * faint top-down wash. Both layers extend well beyond the visible area
 * so only the soft outer tail shows inside the viewport — no visible
 * lobe or falloff edge anywhere on screen.
 */
export function PageBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: [
            // A single, centered warm glow whose center sits 800px above
            // the top of the viewport. The radius is ~2800px so at a
            // typical desktop width the visible portion is purely the
            // ultra-soft outer band.
            "radial-gradient(circle 2800px at 50% -800px, rgba(232, 122, 38, 0.14) 0%, rgba(255, 90, 138, 0.08) 25%, rgba(138, 92, 255, 0.04) 55%, transparent 85%)",
            // A barely-there vertical wash to keep the lower half of the
            // page from feeling empty as you scroll.
            "linear-gradient(180deg, rgba(255, 243, 230, 0.35) 0%, rgba(255, 248, 239, 0) 60%)",
          ].join(", "),
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-40" />
    </div>
  );
}
