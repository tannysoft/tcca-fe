import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { PageBackdrop } from "@/components/PageBackdrop";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { getTag } from "@/lib/cms";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getTag(slug);
  if (!data) return { title: `#${slug}` };
  return {
    title: `#${data.tag.name}`,
    description:
      data.tag.description ||
      `บทความทั้งหมดที่ติดแท็ก #${data.tag.name} จาก TCCA`,
  };
}

export default async function TagDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const data = await getTag(slug);

  if (!data) notFound();

  return (
    <>
      <PageBackdrop />
      <PageHero
        eyebrow="Tag"
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "ข่าวสาร", href: "/news" },
          { label: "แท็กทั้งหมด", href: "/tags" },
          { label: `#${data.tag.name}` },
        ]}
        title={
          <>
            <span className="text-orange-tcca">#</span>
            {data.tag.name}
          </>
        }
        description={
          data.tag.description ||
          `บทความทั้งหมดที่เกี่ยวข้องกับ ${data.tag.name} — ${data.articles.length} บทความ`
        }
      />

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold text-navy-700 md:text-3xl">
              บทความในแท็กนี้
            </h2>
            <span className="text-sm text-navy-600/60">
              {data.articles.length} บทความ
            </span>
          </div>

          {data.articles.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-navy-600/10 bg-white/60 p-10 text-center text-navy-600/70">
              ยังไม่มีบทความในแท็กนี้
            </div>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.articles.map((a, i) => (
                <ArticleCard key={a.slug} data={a} idx={i} showHashtags />
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/tags"
              className="font-display inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-orange-tcca"
            >
              <span aria-hidden>←</span>
              ดูแท็กทั้งหมด
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
