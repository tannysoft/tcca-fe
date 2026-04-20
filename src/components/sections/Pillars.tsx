import type { HomeCms, PillarCms } from "@/lib/cms";
import { fbHome, fbPillars } from "@/lib/cms-fallback";

export function Pillars({
  section,
  items,
}: {
  section?: HomeCms["pillars_section"];
  items?: PillarCms[];
}) {
  const s = section ?? fbHome.pillars_section;
  const list = items && items.length ? items : fbPillars;

  return (
    <section
      id="pillars"
      className="relative isolate overflow-hidden bg-navy-700 py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl opacity-20 brand-gradient"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
              {s.eyebrow}
            </p>
            <h2
              className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-cream md:text-6xl"
              dangerouslySetInnerHTML={{ __html: s.title }}
            />
          </div>
          <p className="max-w-md text-base leading-relaxed text-cream/70">
            {s.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => {
            const gradient =
              p.color_from && p.color_to
                ? `linear-gradient(135deg, ${p.color_from}, ${p.color_to})`
                : undefined;
            return (
              <article
                key={p.n + p.title}
                className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-navy-600/40 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-tcca/40 hover:bg-navy-600/70"
              >
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: gradient }}
                />
                <span className="font-display text-xs font-bold uppercase tracking-[0.28em] text-cream/50">
                  Pillar {p.n}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-cream md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream/70">
                  {p.description}
                </p>
                <div
                  aria-hidden
                  className="mt-6 h-0.5 w-10 bg-orange-tcca transition-all duration-300 group-hover:w-24"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
