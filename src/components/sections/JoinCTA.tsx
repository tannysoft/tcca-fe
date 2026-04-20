import Image from "next/image";
import type { HomeCms } from "@/lib/cms";
import { fbHome } from "@/lib/cms-fallback";

export function JoinCTA({ data }: { data?: HomeCms["join"] }) {
  const d = data ?? fbHome.join;
  const benefits = d.benefits.length ? d.benefits : fbHome.join.benefits;
  const avatar = d.benefits_avatar?.url ?? "/brand/profile-gradient.jpg";

  return (
    <section id="join" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-navy-700 text-cream shadow-2xl">
          <div aria-hidden className="absolute inset-0 brand-gradient opacity-15" />
          <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-orange-tcca/30 blur-3xl"
          />

          <div className="relative grid gap-12 p-8 md:grid-cols-[1.2fr_1fr] md:p-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
                {d.eyebrow}
              </p>
              <h2
                className="mt-5 font-display text-4xl font-bold leading-[1.02] md:text-7xl"
                dangerouslySetInnerHTML={{ __html: d.title }}
              />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
                {d.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={d.primary_cta_href}
                  className="font-display group inline-flex items-center gap-3 rounded-full bg-orange-tcca px-7 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-tcca/20 transition hover:-translate-y-1 hover:bg-orange-light"
                >
                  {d.primary_cta_label}
                  <span
                    aria-hidden
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href={d.secondary_cta_href}
                  className="font-display inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-4 text-lg font-semibold text-cream transition hover:border-cream/60"
                >
                  {d.secondary_cta_label}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-cream/15 bg-navy-600/40 p-7 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-semibold">
                    สิทธิประโยชน์สมาชิก
                  </h3>
                  <Image
                    src={avatar}
                    alt=""
                    width={56}
                    height={56}
                    className="h-12 w-12 rounded-full border-2 border-cream/30 object-cover"
                  />
                </div>
                <ul className="mt-6 space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span
                        aria-hidden
                        className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-tcca text-[11px] font-bold text-white"
                      >
                        ✓
                      </span>
                      <span className="text-cream/90">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-dashed border-orange-tcca/60 bg-orange-tcca/10 p-4 text-sm">
                  <p className="font-semibold text-orange-light">
                    {d.note_title}
                  </p>
                  <p className="mt-1 text-xs text-cream/70">{d.note_body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
