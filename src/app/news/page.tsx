import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getArticles, getCategories, type ArticleCms } from "@/lib/cms";
import { fbArticles } from "@/lib/cms-fallback";

export const metadata: Metadata = {
  title: "ข่าวสาร & บทความ",
  description:
    "ข่าวสาร แถลงการณ์ และบทความล่าสุดจาก TCCA — สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย",
};

const FALLBACK_COVERS = [
  "/news/press-conference.jpg",
  "/news/agenda.jpg",
  "/news/invite.jpg",
];

export default async function NewsPage() {
  const [cmsArticles, categories] = await Promise.all([
    getArticles({ limit: 50 }),
    getCategories(),
  ]);
  const articles = cmsArticles && cmsArticles.length ? cmsArticles : fbArticles;
  const [featured, ...rest] = articles;
  const cats = (categories ?? []).sort((a, b) => b.count - a.count);

  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "ข่าวสาร" },
        ]}
        title={
          <>
            ข่าวสาร &
            <br />
            <span className="brand-gradient-text">บทความล่าสุด</span>
          </>
        }
        description="ติดตามแถลงการณ์ บทความเชิงลึก และความเคลื่อนไหวล่าสุดของ TCCA — สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย"
      />

      <section className="relative pb-6">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-display text-sm font-semibold text-navy-700">
              หมวด:
            </span>
            <Link
              href="/news"
              className="font-display rounded-full bg-navy-700 px-4 py-1.5 text-sm font-medium text-cream"
            >
              ทั้งหมด
            </Link>
            {cats.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="font-display inline-flex items-center gap-1.5 rounded-full border border-navy-600/15 bg-white px-4 py-1.5 text-sm font-medium text-navy-700 transition hover:border-orange-tcca/40 hover:text-orange-tcca"
              >
                {c.name}
                <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-navy-700/10 px-1.5 text-[10px] font-bold">
                  {c.count}
                </span>
              </Link>
            ))}
            <Link
              href="/tags"
              className="font-display ml-auto inline-flex items-center gap-1.5 rounded-full border border-orange-tcca/40 bg-orange-soft px-4 py-1.5 text-sm font-semibold text-orange-tcca transition hover:bg-orange-tcca hover:text-white"
            >
              <span aria-hidden>#</span>
              ดูแท็กทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative pt-6 pb-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FeaturedArticle data={featured} />
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold text-navy-700 md:text-3xl">
              ทั้งหมด
            </h2>
            <span className="text-sm text-navy-600/60">
              {articles.length} บทความ
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <ArticleCard key={a.slug || i} data={a} idx={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function articleHref(a: ArticleCms) {
  return a.slug ? `/news/${a.slug}` : "/detail";
}

function FeaturedArticle({ data }: { data: ArticleCms }) {
  const cover = data.cover?.url ?? FALLBACK_COVERS[0];
  return (
    <Link
      href={articleHref(data)}
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

function ArticleCard({ data, idx }: { data: ArticleCms; idx: number }) {
  const cover = data.cover?.url ?? FALLBACK_COVERS[idx % FALLBACK_COVERS.length];
  return (
    <Link
      href={articleHref(data)}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-navy-600/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-orange-tcca/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={data.cover?.alt || data.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-700/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cream backdrop-blur">
          {data.tag_label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold !leading-[1.15] text-navy-700 transition-colors group-hover:text-orange-tcca">
          {data.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-600/75 line-clamp-3">
          {data.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-6 text-xs">
          <span className="font-semibold text-navy-600/60">{data.date_th}</span>
          <span className="font-display inline-flex items-center gap-1 text-navy-700 transition-transform group-hover:translate-x-0.5">
            อ่านต่อ
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
