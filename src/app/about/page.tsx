import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getAbout, mergeCms, pickList } from "@/lib/cms";
import { fbAbout } from "@/lib/cms-fallback";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "ทำความรู้จักสมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย (TCCA) — เป้าหมาย คณะกรรมการ และเส้นทางการขับเคลื่อนวงการครีเอเตอร์ไทย",
};

export default async function AboutPage() {
  const d = mergeCms(await getAbout(), fbAbout);
  d.values_section.values = pickList(
    d.values_section.values,
    fbAbout.values_section.values,
    (v) => !!(v.title?.trim() || v.body?.trim()),
  );
  d.timeline.items = pickList(
    d.timeline.items,
    fbAbout.timeline.items,
    (t) => !!(t.year?.trim() || t.title?.trim() || t.body?.trim()),
  );
  d.committee.groups = pickList(
    d.committee.groups,
    fbAbout.committee.groups,
    (g) => !!(g.name?.trim() || g.role_en?.trim()),
  );

  return (
    <>
      <PageHero
        eyebrow={d.hero.eyebrow}
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "เกี่ยวกับเรา" },
        ]}
        title={<span dangerouslySetInnerHTML={{ __html: d.hero.title }} />}
        description={d.hero.description}
        accent={
          <div className="relative hidden h-full md:block">
            <div className="absolute inset-x-6 top-6 rounded-[2rem] bg-navy-700 p-8 text-cream shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
                {d.north_star.eyebrow}
              </p>
              <p
                className="mt-4 font-display text-3xl font-bold !leading-[1.05]"
                dangerouslySetInnerHTML={{ __html: d.north_star.title }}
              />
              <div className="mt-8 flex items-center gap-3 text-sm">
                <span aria-hidden className="h-px w-10 bg-orange-tcca" />
                <span className="text-cream/70">{d.north_star.caption}</span>
              </div>
            </div>
          </div>
        }
      />

      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
                {d.story.eyebrow}
              </p>
              <h2
                className="mt-4 font-display text-4xl font-bold !leading-[1.05] text-navy-700 md:text-5xl"
                dangerouslySetInnerHTML={{ __html: d.story.title }}
              />
            </div>
            <div
              className="space-y-5 text-lg leading-relaxed text-navy-600/80 [&_strong]:font-semibold [&_strong]:text-navy-700"
              dangerouslySetInnerHTML={{ __html: d.story.body }}
            />
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
                {d.values_section.eyebrow}
              </p>
              <h2
                className="mt-4 font-display text-4xl font-bold !leading-[1.05] text-navy-700 md:text-6xl"
                dangerouslySetInnerHTML={{ __html: d.values_section.title }}
              />
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {d.values_section.values.map((v) => {
              const toneClass =
                v.tone === "navy"
                  ? "bg-navy-700 text-cream"
                  : v.tone === "orange"
                    ? "bg-orange-tcca text-white"
                    : v.tone === "cream"
                      ? "bg-white text-navy-700 ring-1 ring-navy-600/10"
                      : "relative overflow-hidden text-white";
              return (
                <article
                  key={v.number + v.title}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 ${toneClass}`}
                >
                  {v.tone === "gradient" && (
                    <>
                      <div aria-hidden className="absolute inset-0 brand-gradient" />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-navy-800/20 mix-blend-multiply"
                      />
                    </>
                  )}
                  <div className="relative">
                    <span className="text-xs font-bold uppercase tracking-[0.28em] opacity-60">
                      {v.number}
                    </span>
                    <h3 className="mt-3 font-display text-3xl font-bold">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-85">
                      {v.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-navy-700 py-20 text-cream md:py-28">
        <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl opacity-20 brand-gradient"
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
            {d.timeline.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold !leading-[1.05] md:text-6xl">
            {d.timeline.title}
          </h2>

          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute left-4 top-0 bottom-0 w-px bg-cream/15 md:left-1/2 md:-translate-x-1/2"
            />
            <ol className="space-y-10">
              {d.timeline.items.map((t, i) => {
                const isRight = i % 2 === 1;
                return (
                  <li
                    key={t.year + t.title}
                    className="relative grid gap-4 md:grid-cols-2 md:gap-12"
                  >
                    <div
                      className={`relative pl-12 md:pl-0 ${
                        isRight ? "md:order-2 md:text-left md:pl-12" : "md:text-right md:pr-12"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`absolute left-2.5 top-2 h-3 w-3 rounded-full bg-orange-tcca ring-4 ring-navy-700 md:top-3 ${
                          isRight
                            ? "md:left-[-26px] md:right-auto"
                            : "md:left-auto md:right-[-26px]"
                        }`}
                      />
                      <span className="font-display text-4xl font-bold text-orange-light md:text-5xl">
                        {t.year}
                      </span>
                    </div>
                    <div
                      className={`pl-12 md:pl-0 ${
                        isRight ? "md:text-right md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <h3 className="font-display text-2xl font-bold text-cream">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/75">
                        {t.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
                {d.committee.eyebrow}
              </p>
              <h2
                className="mt-4 font-display text-4xl font-bold !leading-[1.05] text-navy-700 md:text-5xl"
                dangerouslySetInnerHTML={{ __html: d.committee.title }}
              />
              <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-600/80">
                {d.committee.description}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {d.committee.groups.map((c) => (
                <div
                  key={c.name + c.role_en}
                  className="group relative overflow-hidden rounded-3xl border border-navy-600/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-orange-tcca/40 hover:shadow-lg"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-tcca">
                    {c.role_en}
                  </p>
                  <p className="mt-3 font-display text-2xl font-bold text-navy-700">
                    {c.name}
                  </p>
                  <p className="mt-2 text-sm text-navy-600/70">{c.count_label}</p>
                  <span
                    aria-hidden
                    className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-700 text-cream transition-transform group-hover:rotate-45"
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-navy-700 p-10 text-cream md:p-16">
            <div aria-hidden className="absolute inset-0 brand-gradient opacity-15" />
            <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
                  {d.final_cta.eyebrow}
                </p>
                <h2
                  className="mt-4 font-display text-4xl font-bold !leading-[1.05] md:text-6xl"
                  dangerouslySetInnerHTML={{ __html: d.final_cta.title }}
                />
                <p className="mt-5 max-w-lg text-lg text-cream/80">
                  {d.final_cta.description}
                </p>
              </div>
              <Link
                href={d.final_cta.href}
                className="font-display group inline-flex h-16 items-center gap-3 rounded-full bg-orange-tcca px-8 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-light hover:shadow-xl"
              >
                {d.final_cta.label}
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
