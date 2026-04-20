import Link from "next/link";
import type { ArticleCms, CmsImage } from "@/lib/cms";

/**
 * Compact news card used across the news index, category pages, tag pages,
 * and the "อ่านต่อ" related block at the bottom of an article.
 *
 * Takes a minimal data shape so it also works with trimmed payloads like
 * `ArticleCms['related'][number]` (no excerpt / hashtags). Image falls back
 * through a rotating set of local static covers when the CMS post has no
 * Featured Image yet.
 */

const FALLBACK_COVERS = [
  "/news/press-conference.jpg",
  "/news/agenda.jpg",
  "/news/invite.jpg",
];

export type ArticleCardData = {
  slug: string;
  title: string;
  excerpt?: string;
  date_th: string;
  tag_label?: string;
  cover: CmsImage;
  hashtags?: { slug: string; name: string }[];
};

export function ArticleCard({
  data,
  idx = 0,
  showExcerpt = true,
  showHashtags = false,
  size = "md",
}: {
  data: ArticleCardData | ArticleCms;
  idx?: number;
  showExcerpt?: boolean;
  showHashtags?: boolean;
  size?: "sm" | "md";
}) {
  const cover = data.cover?.url ?? FALLBACK_COVERS[idx % FALLBACK_COVERS.length];
  const href = data.slug ? `/news/${data.slug}` : "/detail";
  const titleCls =
    size === "sm"
      ? "font-display text-lg font-bold !leading-[1.15] text-navy-700 transition-colors group-hover:text-orange-tcca"
      : "font-display text-2xl font-bold !leading-[1.15] text-navy-700 transition-colors group-hover:text-orange-tcca";
  const contentPad = size === "sm" ? "p-6" : "p-6";
  const rounded = size === "sm" ? "rounded-3xl" : "rounded-[1.75rem]";

  return (
    <Link
      href={href}
      className={`group flex flex-col overflow-hidden bg-white shadow-sm ring-1 ring-navy-600/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-orange-tcca/40 ${rounded}`}
    >
      <div className={`relative overflow-hidden ${size === "sm" ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
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
      <div className={`flex flex-1 flex-col ${contentPad}`}>
        <h3 className={titleCls}>{data.title}</h3>
        {showExcerpt && data.excerpt && (
          <p className="mt-3 text-sm leading-relaxed text-navy-600/75 line-clamp-3">
            {data.excerpt}
          </p>
        )}
        {showHashtags && data.hashtags && data.hashtags.length > 0 && (
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
