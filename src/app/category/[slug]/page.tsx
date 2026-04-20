import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { PageBackdrop } from "@/components/PageBackdrop";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { getCategory } from "@/lib/cms";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCategory(slug);
  if (!data) return { title: slug };
  return {
    title: `หมวด ${data.category.name}`,
    description:
      data.category.description ||
      `บทความทั้งหมดในหมวด ${data.category.name} จาก TCCA`,
  };
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const data = await getCategory(slug);

  if (!data) notFound();

  return (
    <>
      <PageBackdrop />
      <PageHero
        eyebrow="Category"
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "ข่าวสาร", href: "/news" },
          { label: "หมวดหมู่", href: "/categories" },
          { label: data.category.name },
        ]}
        title={<>{data.category.name}</>}
        description={
          data.category.description ||
          `บทความทั้งหมดในหมวด ${data.category.name} — ${data.articles.length} บทความ`
        }
      />

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold text-navy-700 md:text-3xl">
              บทความในหมวดนี้
            </h2>
            <span className="text-sm text-navy-600/60">
              {data.articles.length} บทความ
            </span>
          </div>

          {data.articles.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-navy-600/10 bg-white/60 p-10 text-center text-navy-600/70">
              ยังไม่มีบทความในหมวดนี้
            </div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.articles.map((a, i) => (
                <ArticleCard key={a.slug} data={a} idx={i} showHashtags />
              ))}
            </div>
          )}

          <div className="mt-12 flex items-center justify-center gap-6 text-sm">
            <Link
              href="/categories"
              className="font-display font-semibold text-navy-700 hover:text-orange-tcca"
            >
              ← ดูหมวดหมู่ทั้งหมด
            </Link>
            <span aria-hidden className="h-4 w-px bg-navy-600/15" />
            <Link
              href="/news"
              className="font-display font-semibold text-navy-700 hover:text-orange-tcca"
            >
              ดูบทความทั้งหมด →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
