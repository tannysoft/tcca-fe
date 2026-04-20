import Link from "next/link";
import { prepareArticleBody, type ArticleCms } from "@/lib/cms";
import { ArticleCard } from "@/components/cards/ArticleCard";

const FALLBACK_COVER = "/news/press-conference.jpg";

export function ArticleView({ article }: { article: ArticleCms }) {
  const cover = article.cover?.url ?? FALLBACK_COVER;
  const hasBody = Boolean(article.body_html && article.body_html.trim());
  const { html: bodyHtml, toc: autoToc } = prepareArticleBody(
    article.body_html ?? "",
  );
  const toc = article.toc.length ? article.toc : autoToc;
  const authorDisplay = article.author_display?.trim() || "Newsroom";
  const authorRole = article.author_role?.trim() || "TCCA Official";
  const primaryCategory = article.categories?.[0] ?? null;
  const validAttachments = article.attachments.filter((a) => a.file);

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
              primaryCategory ? (
                <Link
                  href={`/category/${primaryCategory.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-orange-tcca px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition hover:bg-orange-light"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  {article.tag_label}
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-tcca px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  {article.tag_label}
                </span>
              )
            )}
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-navy-600/60">
              {article.date_th} · {article.read_minutes} min read
            </span>
          </div>

          <h1 className="mt-6 text-balance font-display text-5xl font-bold !leading-[1.02] tracking-tight text-navy-700 md:text-7xl">
            {article.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-navy-600/70">
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-xs font-bold text-white">
                T
              </span>
              <span>
                <span className="block font-semibold text-navy-700">
                  {authorDisplay}
                </span>
                <span className="block text-xs">{authorRole}</span>
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
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_280px] md:px-8">
          <article className="prose-article space-y-8 text-lg leading-relaxed text-navy-700/90">
            {article.subtitle && (
              <p className="text-xl font-semibold text-navy-700">
                {article.subtitle}
              </p>
            )}

            {hasBody ? (
              <div
                className="tcca-gutenberg space-y-6
                  [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:!leading-[1.1] [&_h2]:text-navy-700 [&_h2]:mt-10 [&_h2]:scroll-mt-28 md:[&_h2]:text-4xl
                  [&_h3]:font-display [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-navy-700 [&_h3]:mt-8 [&_h3]:scroll-mt-28
                  [&_p]:text-lg [&_p]:leading-relaxed
                  [&_strong]:font-semibold [&_strong]:text-navy-700
                  [&_a]:text-orange-tcca [&_a]:underline
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
                  [&_figure]:my-8 [&_figure_img]:rounded-2xl
                  [&_figcaption]:mt-2 [&_figcaption]:text-sm [&_figcaption]:text-navy-600/70
                  [&_img]:rounded-2xl
                  [&_blockquote]:relative [&_blockquote]:my-10 [&_blockquote]:overflow-hidden [&_blockquote]:rounded-3xl [&_blockquote]:bg-navy-700 [&_blockquote]:px-8 [&_blockquote]:py-10 [&_blockquote]:text-cream [&_blockquote]:shadow-xl md:[&_blockquote]:px-12 md:[&_blockquote]:py-12
                  [&_blockquote>p]:relative [&_blockquote>p]:font-display [&_blockquote>p]:text-2xl [&_blockquote>p]:font-semibold [&_blockquote>p]:!leading-[1.25] [&_blockquote>p]:text-cream md:[&_blockquote>p]:text-3xl
                  [&_blockquote_cite]:relative [&_blockquote_cite]:mt-6 [&_blockquote_cite]:not-italic [&_blockquote_cite]:flex [&_blockquote_cite]:items-center [&_blockquote_cite]:gap-3 [&_blockquote_cite]:text-sm [&_blockquote_cite]:font-semibold [&_blockquote_cite]:uppercase [&_blockquote_cite]:tracking-[0.2em] [&_blockquote_cite]:text-cream/70
                  [&_blockquote_cite]:before:inline-block [&_blockquote_cite]:before:h-px [&_blockquote_cite]:before:w-10 [&_blockquote_cite]:before:bg-orange-tcca
                  [&_.tcca-quote-mark]:pointer-events-none [&_.tcca-quote-mark]:absolute [&_.tcca-quote-mark]:-top-4 [&_.tcca-quote-mark]:right-4 [&_.tcca-quote-mark]:font-display [&_.tcca-quote-mark]:text-[160px] [&_.tcca-quote-mark]:!leading-none [&_.tcca-quote-mark]:text-cream/10 md:[&_.tcca-quote-mark]:text-[220px]"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
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

            {validAttachments.length > 0 && (
              <div className="rounded-3xl border border-navy-600/10 bg-white/70 p-6">
                <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-orange-tcca">
                  ดาวน์โหลดเอกสาร
                </p>
                <ul className="mt-4 space-y-2">
                  {validAttachments.map((a, i) => (
                    <li key={i}>
                      <a
                        href={a.file!.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-orange-tcca"
                      >
                        <span aria-hidden>↓</span>
                        {a.label || a.file!.filename}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {article.hashtags.length > 0 && (
              <div className="border-t border-navy-600/10 pt-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.22em] text-navy-600/60">
                    แท็ก
                  </span>
                  {article.hashtags.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tag/${t.slug}`}
                      className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-700 ring-1 ring-navy-600/10 transition hover:bg-orange-soft hover:text-orange-tcca hover:ring-orange-tcca/40"
                    >
                      <span aria-hidden className="mr-0.5 text-orange-tcca">#</span>
                      {t.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          <aside className="relative">
            <div className="sticky top-28 space-y-4">
              {toc.length > 0 && (
                <nav
                  aria-label="On this page"
                  className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy-600/10"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 brand-gradient"
                  />
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-soft text-orange-tcca"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="currentColor"
                      >
                        <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h10v2H4z" />
                      </svg>
                    </span>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-orange-tcca">
                      On this page
                    </p>
                  </div>
                  <ol className="mt-5 space-y-1">
                    {toc.map((t, i) => (
                      <li key={t.id} className="group">
                        <a
                          href={`#${t.id}`}
                          className="relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-navy-700 transition hover:bg-orange-soft"
                        >
                          <span
                            aria-hidden
                            className="font-mono text-sm font-bold text-orange-tcca/70 group-hover:text-orange-tcca"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-base font-medium leading-snug">
                            {t.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm ring-1 ring-navy-600/10">
                <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-orange-tcca">
                  Share
                </p>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  <ShareButton
                    label="Share on X"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                    Icon={XIcon}
                  />
                  <ShareButton
                    label="Share on Facebook"
                    href="#"
                    Icon={FacebookIcon}
                  />
                  <ShareButton
                    label="Share on LINE"
                    href="#"
                    Icon={LineIcon}
                  />
                  <ShareButton
                    label="Share on Instagram"
                    href="#"
                    Icon={InstagramIcon}
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-navy-700 p-6 text-cream shadow-xl">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-tcca/40 blur-2xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 dot-grid-light opacity-20"
                />
                <div className="relative">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange-light">
                    Newsletter
                  </p>
                  <p className="mt-3 font-display text-lg font-bold !leading-[1.15]">
                    รับสรุปข่าวสารและ Insight ของวงการทุกสัปดาห์
                  </p>
                  <form className="mt-5 space-y-2">
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-full bg-cream/10 px-4 py-2.5 text-sm text-cream placeholder-cream/50 ring-1 ring-cream/20 focus:outline-none focus:ring-orange-tcca"
                    />
                    <button
                      type="button"
                      className="font-display group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-orange-tcca text-sm font-semibold text-white transition hover:bg-orange-light"
                    >
                      สมัครรับข่าวสาร
                      <span
                        aria-hidden
                        className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-45"
                      >
                        <svg
                          viewBox="0 0 16 16"
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 11 L11 5" />
                          <path d="M5.5 5 H11 V10.5" />
                        </svg>
                      </span>
                    </button>
                  </form>
                </div>
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
              {article.related.map((r, i) => (
                <ArticleCard key={r.slug} data={r} idx={i} size="sm" showExcerpt={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ShareButton({
  label,
  href,
  Icon,
}: {
  label: string;
  href: string;
  Icon: () => React.JSX.Element;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="inline-flex h-10 items-center justify-center rounded-xl border border-navy-600/10 bg-cream/40 text-navy-700 transition hover:border-orange-tcca/40 hover:bg-orange-soft hover:text-orange-tcca"
    >
      <Icon />
    </a>
  );
}

const socialIconClass = "h-[18px] w-[18px]";

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={socialIconClass}
      aria-hidden
    >
      <path d="M13.5 22v-8h2.7l.4-3.2H13.5V8.7c0-.9.3-1.5 1.6-1.5h1.7V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.5H7.7V14h2.7v8h3.1z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={socialIconClass}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={socialIconClass}
      aria-hidden
    >
      <path d="M17.9 3h3.4l-7.4 8.5L22.6 21H16l-5-6.6L5.2 21H1.8l7.9-9L1.2 3h6.7l4.6 6.1L17.9 3zm-1.2 16h1.9L7.4 5H5.4l11.3 14z" />
    </svg>
  );
}
function LineIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={socialIconClass}
      aria-hidden
    >
      <path d="M12 2C6.5 2 2 5.6 2 10c0 4 3.6 7.3 8.4 7.9.3.1.8.2.9.5.1.3.1.7 0 .9 0 0-.1.7-.2 1-.1.3-.2 1.2 1 .7 1.2-.5 6.6-3.9 9-6.7C22.4 12.7 23 11.4 23 10c0-4.4-5-8-11-8zM7.3 13H5.4c-.3 0-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.5s.5.2.5.5V12h1.4c.3 0 .5.2.5.5s-.2.5-.5.5zm1.9-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.5s.5.2.5.5v3.7zm4.7 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-1.9-2.6v2.3c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8.8c0-.2.1-.4.3-.5.1 0 .1-.1.2-.1.1 0 .3.1.4.2l1.9 2.6V8.8c0-.3.2-.5.5-.5s.5.2.5.5v3.7zm3.1-2.3c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9H17c.3 0 .5.2.5.5s-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.5H17c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9H17z" />
    </svg>
  );
}
