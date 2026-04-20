import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PageBackdrop } from "@/components/PageBackdrop";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { FeaturedArticleCard } from "@/components/cards/FeaturedArticleCard";
import { getArticles, getCategories } from "@/lib/cms";
import { fbArticles } from "@/lib/cms-fallback";

export const metadata: Metadata = {
  title: "ข่าวสาร & บทความ",
  description:
    "ข่าวสาร แถลงการณ์ และบทความล่าสุดจาก TCCA — สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย",
};

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
      <PageBackdrop />
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
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-display text-lg font-semibold text-navy-700">
              หมวด:
            </span>
            <Link
              href="/news"
              className="font-display rounded-full bg-navy-700 px-5 py-2 text-lg font-medium text-cream"
            >
              ทั้งหมด
            </Link>
            {cats.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="font-display inline-flex items-center gap-2 rounded-full border border-navy-600/15 bg-white px-5 py-2 text-lg font-medium text-navy-700 transition hover:border-orange-tcca/40 hover:text-orange-tcca"
              >
                {c.name}
                <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-navy-700/10 px-1.5 text-xs font-bold">
                  {c.count}
                </span>
              </Link>
            ))}
            <Link
              href="/tags"
              className="font-display ml-auto inline-flex items-center gap-1.5 rounded-full border border-orange-tcca/40 bg-orange-soft px-5 py-2 text-lg font-semibold text-orange-tcca transition hover:bg-orange-tcca hover:text-white"
            >
              <span aria-hidden>#</span>
              ดูแท็กทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative pt-6 pb-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FeaturedArticleCard data={featured} />
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
