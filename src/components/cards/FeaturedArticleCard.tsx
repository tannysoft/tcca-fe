import Link from "next/link";
import type { ArticleCms } from "@/lib/cms";

/**
 * Large editorial "Featured" card — used at the top of the /news list page.
 * Dark navy background, cover image bleeds on the left, meta + excerpt +
 * "อ่านเต็ม" CTA on the right.
 */

const FALLBACK_COVER = "/news/press-conference.jpg";

export function FeaturedArticleCard({ data }: { data: ArticleCms }) {
  const cover = data.cover?.url ?? FALLBACK_COVER;
  const href = data.slug ? `/news/${data.slug}` : "/detail";

  return (
    <Link
      href={href}
      className="group relative grid overflow-hidden rounded-[2.5rem] bg-navy-700 text-cream shadow-xl ring-1 ring-navy-600/10 md:grid-cols-[1.1fr_1fr]"
    >
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={data.cover?.alt || data.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-700/85 via-navy-700/20 to-transparent md:hidden"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-navy-700 md:block"
        />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-orange-tcca px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          Featured · {data.tag_label}
        </span>
      </div>

      <div className="relative flex flex-col p-7 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 dot-grid-light opacity-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-tcca/25 blur-3xl"
        />
        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/60">
              {data.date_th}
            </span>
            <span aria-hidden className="h-px flex-1 bg-cream/15" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/60">
              {data.read_minutes} min read
            </span>
          </div>
          <h3 className="mt-6 font-display text-3xl font-bold !leading-[1.05] text-cream md:text-[40px]">
            {data.title}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-cream/80 md:text-base">
            {data.excerpt}
          </p>
        </div>
        <div className="relative mt-auto flex items-center justify-between gap-4 border-t border-cream/15 pt-6">
          <span className="text-xs text-cream/60">TCCA Newsroom</span>
          <span className="font-display inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-cream px-5 text-sm font-semibold text-navy-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
            อ่านเต็ม
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-tcca text-white transition-transform duration-300 group-hover:rotate-45"
            >
              ↗
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
