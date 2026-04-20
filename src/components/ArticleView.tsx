import Link from "next/link";
import type { ArticleCms } from "@/lib/cms";

const FALLBACK_COVER = "/news/press-conference.jpg";

export function ArticleView({ article }: { article: ArticleCms }) {
  const cover = article.cover?.url ?? FALLBACK_COVER;
  const hasBody = Boolean(article.body_html && article.body_html.trim());

  return (
    <>
      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <nav
            aria-label="breadcrumb"
            className="font-display flex flex-wrap items-center gap-2 text-sm text-navy-600/70"
          >
            <Link href="/" className="transition-colors hover:text-navy-700">
              หน้าแรก
            </Link>
            <span aria-hidden className="text-navy-600/40">/</span>
            <Link
              href="/news"
              className="transition-colors hover:text-navy-700"
            >
              ข่าวสาร & แถลงการณ์
            </Link>
            <span aria-hidden className="text-navy-600/40">/</span>
            <span className="text-navy-700">บทความ</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {article.tag_label && (
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-tcca px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                {article.tag_label}
              </span>
            )}
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-navy-600/60">
              {article.date_th} · {article.read_minutes} min read
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-bold !leading-[1.02] tracking-tight text-navy-700 md:text-7xl">
            {article.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-navy-600/70">
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-xs font-bold text-white">
                T
              </span>
              <span>
                <span className="block font-semibold text-navy-700">
                  {article.author_display}
                </span>
                <span className="block text-xs">{article.author_role}</span>
              </span>
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-7xl px-5 md:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem] shadow-xl ring-1 ring-navy-600/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cover}
              alt={article.cover?.alt || article.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {article.cover_caption && (
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span className="rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-700 backdrop-blur">
                  {article.cover_caption}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_260px] md:px-8">
          <article className="prose-article space-y-8 text-lg leading-relaxed text-navy-700/90">
            {article.subtitle && (
              <p className="text-xl font-semibold text-navy-700">
                {article.subtitle}
              </p>
            )}

            {hasBody ? (
              <div
                className="tcca-gutenberg space-y-6 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:!leading-[1.1] [&_h2]:text-navy-700 [&_h2]:mt-10 md:[&_h2]:text-4xl [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-navy-700 [&_h3]:mt-8 [&_p]:text-lg [&_p]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-navy-700 [&_a]:text-orange-tcca [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-orange-tcca [&_blockquote]:bg-white/60 [&_blockquote]:px-6 [&_blockquote]:py-4 [&_blockquote]:rounded-r-2xl [&_figure]:my-8 [&_figure_img]:rounded-2xl [&_figcaption]:mt-2 [&_figcaption]:text-sm [&_figcaption]:text-navy-600/70 [&_img]:rounded-2xl"
                dangerouslySetInnerHTML={{ __html: article.body_html }}
              />
            ) : article.excerpt ? (
              <p className="text-xl font-semibold text-navy-700">
                {article.excerpt}
              </p>
            ) : (
              <p className="text-navy-600/70">
                บทความนี้ยังไม่มีเนื้อหาเพิ่มเติม
              </p>
            )}

            {article.attachments.length > 0 && (
              <div className="rounded-3xl border border-navy-600/10 bg-white/70 p-6">
                <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-orange-tcca">
                  ดาวน์โหลดเอกสาร
                </p>
                <ul className="mt-4 space-y-2">
                  {article.attachments.map((a, i) =>
                    a.file ? (
                      <li key={i}>
                        <a
                          href={a.file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-orange-tcca"
                        >
                          <span aria-hidden>↓</span>
                          {a.label || a.file.filename}
                        </a>
                      </li>
                    ) : null,
                  )}
                </ul>
              </div>
            )}

            {article.hashtags.length > 0 && (
              <div className="flex flex-wrap gap-2 border-t border-navy-600/10 pt-10">
                {article.hashtags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy-700 ring-1 ring-navy-600/10"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </article>

          <aside className="relative">
            <div className="sticky top-28 space-y-4">
              {article.toc.length > 0 && (
                <div className="rounded-3xl border border-navy-600/10 bg-white/70 p-5 backdrop-blur">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange-tcca">
                    On this page
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {article.toc.map((t) => (
                      <li key={t.id}>
                        <a
                          href={`#${t.id}`}
                          className="font-display flex items-center gap-2 rounded-full px-3 py-2 text-navy-700 transition hover:bg-orange-soft"
                        >
                          <span
                            aria-hidden
                            className="h-1.5 w-1.5 rounded-full bg-orange-tcca"
                          />
                          {t.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="rounded-3xl bg-navy-700 p-5 text-cream">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange-light">
                  Newsletter
                </p>
                <p className="mt-3 font-display text-lg font-bold !leading-[1.1]">
                  รับสรุปข่าวสารและ Insight ของวงการทุกสัปดาห์
                </p>
                <form className="mt-4 flex gap-2">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="flex-1 rounded-full bg-cream/10 px-4 py-2.5 text-sm text-cream placeholder-cream/50 ring-1 ring-cream/20 focus:outline-none focus:ring-orange-tcca"
                  />
                  <button
                    type="button"
                    className="font-display inline-flex items-center justify-center rounded-full bg-orange-tcca px-4 text-sm font-semibold text-white"
                  >
                    →
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {article.related.length > 0 && (
        <section className="relative pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex items-end justify-between">
              <h2 className="font-display text-3xl font-bold !leading-[1.05] text-navy-700 md:text-4xl">
                อ่านต่อ
              </h2>
              <Link
                href="/news"
                className="font-display text-sm font-semibold text-navy-700 hover:underline"
              >
                ดูทั้งหมด →
              </Link>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {article.related.map((r) => (
                <Link
                  href={`/news/${r.slug}`}
                  key={r.slug}
                  className="group overflow-hidden rounded-3xl bg-white ring-1 ring-navy-600/10 transition-all hover:-translate-y-1 hover:ring-orange-tcca/40"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.cover?.url ?? FALLBACK_COVER}
                      alt={r.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-navy-700 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cream">
                      {r.tag_label}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold !leading-[1.15] text-navy-700">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs text-navy-600/60">{r.date_th}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
