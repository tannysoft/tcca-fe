import type { ReactNode } from "react";
import type { HomeCms } from "@/lib/cms";
import { fbHome } from "@/lib/cms-fallback";

const ICONS: Record<string, ReactNode> = {
  eye: <EyeIcon />,
  target: <TargetIcon />,
  people: <PeopleIcon />,
  infinity: <InfinityIcon />,
};

export function About({ data }: { data?: HomeCms["about"] }) {
  const d = data ?? fbHome.about;
  const cards = d.cards.length ? d.cards : fbHome.about.cards;

  return (
    <section id="about" className="relative pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
              {d.eyebrow}
            </p>
            <h2
              className="mt-4 font-display text-4xl font-bold leading-tight text-navy-700 md:text-6xl"
              dangerouslySetInnerHTML={{ __html: d.title }}
            />

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-navy-600/80">
              {d.description}
            </p>

            <figure className="relative mt-12 overflow-hidden rounded-3xl bg-white/70 p-8 shadow-lg shadow-navy-700/5 ring-1 ring-navy-600/10 backdrop-blur">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 brand-gradient"
              />
              <svg
                aria-hidden
                viewBox="0 0 48 36"
                className="h-10 w-10 text-orange-tcca"
                fill="currentColor"
              >
                <path d="M6 36 C 6 22, 12 12, 22 6 L 24 10 C 18 14, 14 20, 14 26 L 20 26 L 20 36 L 6 36 Z M 28 36 C 28 22, 34 12, 44 6 L 46 10 C 40 14, 36 20, 36 26 L 42 26 L 42 36 L 28 36 Z" />
              </svg>
              <blockquote className="mt-5">
                <p className="font-display text-2xl font-semibold !leading-[1.25] text-navy-700 md:text-3xl">
                  {d.quote}
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 text-sm">
                <span aria-hidden className="h-px w-10 bg-orange-tcca" />
                <span className="font-semibold uppercase tracking-[0.2em] text-navy-600/70">
                  {d.quote_caption}
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <Card
                key={`${c.title}-${i}`}
                tone={c.tone}
                className={c.span_two ? "col-span-2" : ""}
                kicker={c.kicker}
                title={c.title}
                body={c.body}
                icon={ICONS[c.icon] ?? <EyeIcon />}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  tone,
  kicker,
  title,
  body,
  icon,
  className = "",
}: {
  tone: "navy" | "orange" | "cream" | "gradient";
  kicker: string;
  title: string;
  body: string;
  icon: ReactNode;
  className?: string;
}) {
  const toneMap = {
    navy: "bg-navy-700 text-cream ring-0",
    orange: "bg-orange-tcca text-white ring-0",
    cream: "bg-white text-navy-700 ring-1 ring-navy-600/10",
    gradient: "relative overflow-hidden text-white ring-0",
  } as const;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 ${toneMap[tone]} ${className}`}
    >
      {tone === "gradient" && (
        <>
          <div aria-hidden className="absolute inset-0 brand-gradient" />
          <div
            aria-hidden
            className="absolute inset-0 bg-navy-800/25 mix-blend-multiply"
          />
        </>
      )}
      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={`text-xs font-semibold uppercase tracking-[0.2em] ${
              tone === "cream" ? "text-orange-tcca" : "text-white/90"
            }`}
          >
            {kicker}
          </span>
          <span
            aria-hidden
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-12 ${
              tone === "cream"
                ? "bg-navy-700 text-cream"
                : "bg-white/15 text-white backdrop-blur"
            }`}
          >
            {icon}
          </span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-bold leading-tight md:text-3xl">
          {title}
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed ${
            tone === "cream" ? "text-navy-600/80" : "text-white/85"
          }`}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M2 12 C 4 7, 7.5 5, 12 5 C 16.5 5, 20 7, 22 12 C 20 17, 16.5 19, 12 19 C 7.5 19, 4 17, 2 12 Z" />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" />
      <circle cx="13.4" cy="10.6" r="1" fill="#fff" stroke="none" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <path d="M12 12 L 20 4" strokeWidth="2.2" />
      <path d="M16.5 4 L 20 4 L 20 7.5" strokeWidth="2.2" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="7.5" r="2.6" fill="currentColor" />
      <path d="M7.5 17 C 7.5 14, 9.5 12.5, 12 12.5 C 14.5 12.5, 16.5 14, 16.5 17" />
      <circle cx="5" cy="9" r="2" fill="currentColor" />
      <path d="M1.5 17 C 1.5 14.5, 3 13.5, 5 13.5 C 5.6 13.5, 6.2 13.6, 6.8 13.8" />
      <circle cx="19" cy="9" r="2" fill="currentColor" />
      <path d="M17.2 13.8 C 17.8 13.6, 18.4 13.5, 19 13.5 C 21 13.5, 22.5 14.5, 22.5 17" />
    </svg>
  );
}

function InfinityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M17.5 8.5 C 14.5 8.5, 13.5 15.5, 10.5 15.5 C 7.5 15.5, 7.5 8.5, 10.5 8.5 C 13.5 8.5, 14.5 15.5, 17.5 15.5 C 20.5 15.5, 20.5 8.5, 17.5 8.5 Z" />
    </svg>
  );
}
