import Link from "next/link";
import type { ArticleCms, HomeCms } from "@/lib/cms";
import { fbArticles, fbHome } from "@/lib/cms-fallback";

const FALLBACK_COVERS = {
  featured: "/news/press-conference.jpg",
  insight: "/news/agenda.jpg",
  community: "/news/invite.jpg",
};

export function News({
  section,
  featured,
  insight,
  community,
}: {
  section?: HomeCms["news_section"];
  featured?: ArticleCms | null;
  insight?: ArticleCms | null;
  community?: ArticleCms | null;
}) {
  const s = section ?? fbHome.news_section;
  const f = featured ?? { ...fbArticles[0], tag_label: "แถลงการณ์" };
  const i = insight ?? { ...fbArticles[1], tag_label: "Insight" };
  const c = community ?? { ...fbArticles[2], tag_label: "Community" };

  return (
    <section id="news" className="relative pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
              {s.eyebrow}
            </p>
            <h2
              className="mt-4 font-display text-4xl font-bold leading-tight text-navy-700 md:text-6xl"
              dangerouslySetInnerHTML={{ __html: s.title }}
            />
          </div>
          <a
            href="/news"
            className="font-display group inline-flex h-12 items-center gap-2 rounded-full border border-navy-600/15 bg-white/60 px-5 text-base font-semibold text-navy-700 backdrop-blur transition hover:border-navy-600/40 hover:bg-white"
          >
            ดูทั้งหมด
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy-700 text-cream transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:grid-rows-[auto_auto]">
          <FeaturedCard data={f} />
          <InsightCard
            data={i}
            bigNumber={s.insight_big_number}
            subtitle={s.insight_subtitle}
          />
          <CommunityCard data={c} highlight={s.community_highlight} />
        </div>
      </div>
    </section>
  );
}

function articleHref(a: ArticleCms) {
  return a.slug ? `/news/${a.slug}` : "/detail";
}

function FeaturedCard({ data }: { data: ArticleCms }) {
  const cover = data.cover?.url ?? FALLBACK_COVERS.featured;
  return (
    <Link
      href={articleHref(data)}
      className="group relative col-span-1 row-span-2 grid overflow-hidden rounded-[2rem] bg-navy-700 text-cream shadow-xl md:col-span-2 md:grid-cols-[1fr_1.1fr]"
    >
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={data.cover?.alt || data.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-700/90 via-navy-700/10 to-transparent md:hidden"
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
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-tcca/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full brand-gradient opacity-20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-4 -top-10 rotate-[12deg] font-display text-[180px] font-bold leading-none text-cream/5"
        >
          tcca
        </div>

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

          <h3 className="mt-6 font-display text-3xl font-bold !leading-[1.05] text-cream md:text-[44px]">
            {data.title}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-cream/80 md:text-base">
            {data.excerpt}
          </p>
        </div>

        <footer className="relative mt-auto flex items-center justify-between gap-4 border-t border-cream/15 pt-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full brand-gradient text-xs font-bold text-white shadow-md">
              T
            </span>
            <div className="min-w-0 text-sm">
              <p className="truncate font-semibold text-cream">
                {data.author_display}
              </p>
              <p className="truncate text-xs text-cream/60">
                {data.author_role}
              </p>
            </div>
          </div>
          <span className="font-display inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-cream px-5 text-sm font-semibold text-navy-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
            อ่านเต็ม
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-tcca text-white transition-transform duration-300 group-hover:rotate-45"
            >
              ↗
            </span>
          </span>
        </footer>
      </div>
    </Link>
  );
}

function InsightCard({
  data,
  bigNumber,
  subtitle,
}: {
  data: ArticleCms;
  bigNumber: string;
  subtitle: string;
}) {
  const cover = data.cover?.url ?? FALLBACK_COVERS.insight;
  return (
    <Link
      href={articleHref(data)}
      className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-navy-600/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-orange-tcca/40"
    >
      <div className="relative h-32 overflow-hidden md:h-36">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={data.cover?.alt || data.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-navy-700 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cream shadow-md">
          {data.tag_label}
        </span>
        <span
          className="absolute bottom-2 right-4 font-display text-4xl font-bold !leading-none tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:text-5xl"
          aria-label={bigNumber}
        >
          <span className="brand-gradient-text">{bigNumber}</span>
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-7 pt-5">
        <svg
          aria-hidden
          viewBox="0 0 200 80"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="insightFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e87a26" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#e87a26" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 20 L120 30 L140 15 L160 22 L180 10 L200 15 L200 80 L0 80 Z"
            fill="url(#insightFill)"
          />
          <path
            d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 20 L120 30 L140 15 L160 22 L180 10 L200 15"
            fill="none"
            stroke="#e87a26"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="relative">
          <h3 className="font-display text-xl font-bold !leading-[1.1] text-navy-700">
            {data.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-orange-tcca">
            {subtitle}
          </p>

          <p className="mt-4 text-xs leading-relaxed text-navy-600/70">
            {data.excerpt}
          </p>
        </div>

        <div className="relative mt-auto flex items-center justify-between pt-6 text-xs font-semibold">
          <span className="text-navy-600/60">{data.date_th}</span>
          <span className="font-display inline-flex items-center gap-1 text-navy-700 transition-transform group-hover:translate-x-0.5">
            ดูรายงาน
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function CommunityCard({
  data,
  highlight,
}: {
  data: ArticleCms;
  highlight: string;
}) {
  const cover = data.cover?.url ?? FALLBACK_COVERS.community;
  return (
    <Link
      href={articleHref(data)}
      className="group relative isolate flex flex-col overflow-hidden rounded-[2rem] bg-orange-tcca text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={data.cover?.alt || data.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute left-4 top-4 inline-flex w-fit rounded-full bg-orange-tcca px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-md">
          {data.tag_label}
        </span>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="#fff"
          className="absolute right-5 top-5 h-5 w-5 animate-float-slow drop-shadow"
        >
          <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
        </svg>
      </div>

      <div className="relative flex flex-1 flex-col p-7">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent 0 14px, rgba(255,255,255,0.8) 14px 15px)",
          }}
        />

        <div className="relative">
          <p className="font-display text-[30px] font-bold !leading-[1.05] text-white md:text-[34px]">
            {data.title}
            {highlight ? (
              <>
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">{highlight}</span>
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 right-0 h-3 rounded-sm bg-navy-700/40"
                  />
                </span>
              </>
            ) : null}
          </p>

          <p className="mt-4 text-xs leading-relaxed text-white/90">
            {data.excerpt}
          </p>
        </div>

        <div className="relative mt-auto flex items-center justify-between pt-6">
          <span className="text-[11px] font-semibold text-white/75">
            {data.date_th}
          </span>
          <span
            aria-hidden
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-tcca shadow-md transition-transform duration-300 group-hover:rotate-45"
          >
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
