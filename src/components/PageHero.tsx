import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  accent,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  accent?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30 brand-gradient animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -right-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-20 bg-orange-tcca animate-float"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {breadcrumbs && (
          <nav
            aria-label="breadcrumb"
            className="font-display flex flex-wrap items-center gap-2 text-sm text-navy-600/70"
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? (
                  <Link
                    href={b.href}
                    className="transition-colors hover:text-navy-700"
                  >
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-navy-700">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <span aria-hidden className="text-navy-600/40">
                    /
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="mt-6 grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-balance font-display text-5xl font-bold leading-[0.98] tracking-tight text-navy-700 md:text-7xl">
              {title}
            </h1>
            {description && (
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-navy-600/80 md:text-xl">
                {description}
              </p>
            )}
          </div>
          {accent && <div className="relative">{accent}</div>}
        </div>
      </div>
    </section>
  );
}
