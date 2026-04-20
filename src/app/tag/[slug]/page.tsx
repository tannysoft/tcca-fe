import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getTag, type ArticleCms } from "@/lib/cms";

type Params = { slug: string };

const FALLBACK_COVERS = [
  "/news/press-conference.jpg",
  "/news/agenda.jpg",
  "/news/invite.jpg",
];

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
                <ArticleCard key={a.slug} data={a} idx={i} />
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

function ArticleCard({ data, idx }: { data: ArticleCms; idx: number }) {
  const cover = data.cover?.url ?? FALLBACK_COVERS[idx % FALLBACK_COVERS.length];
  return (
    <Link
      href={`/news/${data.slug}`}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-navy-600/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-orange-tcca/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={data.cover?.alt || data.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        {data.tag_label && (
          <span className="absolute left-4 top-4 rounded-full bg-navy-700/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cream backdrop-blur">
            {data.tag_label}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold !leading-[1.15] text-navy-700 transition-colors group-hover:text-orange-tcca">
          {data.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-600/75 line-clamp-3">
          {data.excerpt}
        </p>
        {data.hashtags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {data.hashtags.slice(0, 3).map((t) => (
              <span
                key={t.slug}
                className="rounded-full bg-orange-soft px-2.5 py-0.5 text-[10px] font-semibold text-orange-tcca"
              >
                #{t.name}
              </span>
            ))}
          </div>
        )}
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
