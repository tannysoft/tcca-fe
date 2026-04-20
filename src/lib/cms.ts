/**
 * CMS fetch layer — talks to the TCCA WordPress REST API.
 *
 * Strategy: every page/component calls these fetchers in a Server Component.
 * If the CMS returns a field as null/empty, the component falls back to the
 * hardcoded content in `cms-fallback.ts`. This keeps the site working on
 * first deploy (before editors have filled anything in) while letting
 * uploaded WordPress content take precedence the moment it exists.
 */

export const CMS_BASE =
  process.env.NEXT_PUBLIC_CMS_BASE ?? "https://tcca-cms.livetubex.com";

const REVALIDATE = 60;

export type CmsImage = {
  id: number;
  url: string;
  alt: string;
  width: number | null;
  height: number | null;
  sizes: { thumbnail?: string; medium?: string; large?: string };
} | null;

export type CmsFile = {
  id: number;
  url: string;
  filename: string;
  title: string;
  mime: string;
} | null;

export type Social = { platform: string; label: string; url: string };
export type MenuItem = { label: string; href: string };

export type Bootstrap = {
  identity: {
    logo: CmsImage;
    logo_white: CmsImage;
    site_name: string;
    tagline: string;
    description: string;
    favicon: CmsImage;
    default_og_image: CmsImage;
    brand_avatar: CmsImage;
    contact_email: string;
    contact_address: string;
    socials: Social[];
    brand_assets: { label: string; description: string; file: CmsFile }[];
  };
  navigation: {
    primary_menu: MenuItem[];
    cta_label: string;
    cta_href: string;
  };
  footer: {
    description: string;
    columns: { title: string; items: MenuItem[] }[];
    copyright: string;
    tagline: string;
  };
};

export type HomeCms = {
  hero: {
    line1: string;
    highlight: string;
    line2: string;
    description: string;
    primary_cta_label: string;
    primary_cta_href: string;
    secondary_cta_label: string;
    secondary_cta_href: string;
    visual: CmsImage;
    og_image: CmsImage;
    marquee: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    quote: string;
    quote_caption: string;
    cards: {
      tone: "navy" | "orange" | "cream" | "gradient";
      kicker: string;
      title: string;
      body: string;
      icon: "eye" | "target" | "people" | "infinity";
      span_two: boolean;
    }[];
  };
  pillars_section: { eyebrow: string; title: string; subtitle: string };
  events_section: {
    eyebrow: string;
    title: string;
    featured_event: EventCms | null;
    upcoming_events: EventCms[];
  };
  news_section: {
    eyebrow: string;
    title: string;
    featured_article: ArticleCms | null;
    insight_article: ArticleCms | null;
    community_article: ArticleCms | null;
    insight_big_number: string;
    insight_subtitle: string;
    community_highlight: string;
  };
  partners_section: { eyebrow: string; title: string };
  join: {
    eyebrow: string;
    title: string;
    description: string;
    primary_cta_label: string;
    primary_cta_href: string;
    secondary_cta_label: string;
    secondary_cta_href: string;
    benefits: string[];
    note_title: string;
    note_body: string;
    benefits_avatar: CmsImage;
  };
};

export type ArticleCms = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  date_th: string;
  subtitle: string;
  /** First WP category name — used as the card "badge" label. */
  tag_label: string;
  /** All WP categories attached to the post. */
  categories: { slug: string; name: string }[];
  read_minutes: number;
  is_featured: boolean;
  author_display: string;
  author_role: string;
  /** WP Featured Image. */
  cover: CmsImage;
  cover_caption: string;
  og_image: CmsImage;
  /** Gutenberg-rendered HTML (post_content run through `the_content` filters). */
  body_html: string;
  /** WP post_tag terms (slug + name). */
  hashtags: { slug: string; name: string }[];
  toc: { id: string; label: string }[];
  related: {
    slug: string;
    title: string;
    tag_label: string;
    date_th: string;
    cover: CmsImage;
  }[];
  gallery: CmsImage[];
  attachments: { label: string; file: CmsFile }[];
};

export type EventCms = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  event_date: string;
  time_start: string;
  time_end: string;
  date_display_th: string;
  day_label: string;
  month_label: string;
  tag: string;
  host: string;
  venue: string;
  is_featured: boolean;
  featured_eyebrow: string;
  featured_title: string;
  agenda: { time: string; label: string }[];
  cta_label: string;
  cta_href: string;
  cover: CmsImage;
  sticker: CmsImage;
  og_image: CmsImage;
  venue_map: CmsImage;
  gallery: CmsImage[];
  attachments: { label: string; file: CmsFile }[];
};

export type PartnersCms = {
  section: { eyebrow: string; title: string };
  items: {
    slug: string;
    name: string;
    accent: "navy" | "orange" | "gradient";
    website: string;
    logo: CmsImage;
  }[];
};

export type PillarCms = {
  n: string;
  title: string;
  description: string;
  color_from: string;
  color_to: string;
};

export type AboutCms = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    accent_image: CmsImage;
    og_image: CmsImage;
  };
  north_star: { eyebrow: string; title: string; caption: string };
  story: { eyebrow: string; title: string; body: string; image: CmsImage };
  values_section: {
    eyebrow: string;
    title: string;
    values: {
      number: string;
      title: string;
      body: string;
      tone: "navy" | "orange" | "cream" | "gradient";
    }[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    items: { year: string; title: string; body: string; image: CmsImage }[];
  };
  committee: {
    eyebrow: string;
    title: string;
    description: string;
    groups: {
      name: string;
      role_en: string;
      count_label: string;
      members: {
        name: string;
        position: string;
        bio: string;
        photo: CmsImage;
      }[];
    }[];
  };
  final_cta: {
    eyebrow: string;
    title: string;
    description: string;
    label: string;
    href: string;
  };
};

export type RegisterCms = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    og_image: CmsImage;
    accent_image: CmsImage;
    price_badge: string;
    price_note: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    subtitle: string;
    list: { number: string; title: string; body: string; icon: CmsImage }[];
  };
  form: {
    eyebrow: string;
    title: string;
    channel_options: string[];
    submit_label: string;
    terms_html: string;
  };
  steps: { number: string; title: string; body: string }[];
  fee_note: { title: string; body: string };
};

async function cmsFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${CMS_BASE}/wp-json/tcca/v1${path}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export type TagCms = {
  slug: string;
  name: string;
  description: string;
  count: number;
};

export type TagDetailCms = {
  tag: TagCms;
  articles: ArticleCms[];
};

export type CategoryCms = {
  slug: string;
  name: string;
  description: string;
  count: number;
};

export type CategoryDetailCms = {
  category: CategoryCms;
  articles: ArticleCms[];
};

export const getBootstrap = () => cmsFetch<Bootstrap>("/bootstrap");
export const getHome = () => cmsFetch<HomeCms>("/home");
export const getAbout = () => cmsFetch<AboutCms>("/about");
export const getRegister = () => cmsFetch<RegisterCms>("/register");
export const getPartners = () => cmsFetch<PartnersCms>("/partners");
export const getPillars = () => cmsFetch<PillarCms[]>("/pillars");
function slugifyName(s: string): string {
  return (
    s
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\u0e00-\u0e7f\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 80) || "tag"
  );
}

/** Coerce an article payload to the current frontend type — handles older
 *  plugin versions that returned `hashtags: string[]` before the upgrade. */
function normalizeArticle(a: ArticleCms): ArticleCms {
  type LegacyHashtag = string | { slug: string; name: string };
  const raw = a as unknown as ArticleCms & { hashtags: LegacyHashtag[] };
  const hashtags = (raw.hashtags ?? []).map((t) =>
    typeof t === "string" ? { slug: slugifyName(t), name: t } : t,
  );
  return { ...a, hashtags };
}

export const getArticles = async (
  opts: { limit?: number; tag?: string; category?: string } = {},
) => {
  const p = new URLSearchParams();
  p.set("limit", String(opts.limit ?? 20));
  if (opts.tag) p.set("tag", opts.tag);
  if (opts.category) p.set("category", opts.category);
  const list = await cmsFetch<ArticleCms[]>(`/articles?${p.toString()}`);
  return list ? list.map(normalizeArticle) : null;
};
export const getArticle = async (slug: string) => {
  const a = await cmsFetch<ArticleCms>(
    `/articles/${encodeURIComponent(slug)}`,
  );
  return a ? normalizeArticle(a) : null;
};
export const getEvents = (limit = 20) =>
  cmsFetch<EventCms[]>(`/events?limit=${limit}`);
export const getTags = () => cmsFetch<TagCms[]>("/tags");
export const getTag = async (slug: string) => {
  const d = await cmsFetch<TagDetailCms>(`/tags/${encodeURIComponent(slug)}`);
  return d ? { ...d, articles: d.articles.map(normalizeArticle) } : null;
};
export const getCategories = () => cmsFetch<CategoryCms[]>("/categories");
export const getCategory = async (slug: string) => {
  const d = await cmsFetch<CategoryDetailCms>(
    `/categories/${encodeURIComponent(slug)}`,
  );
  return d ? { ...d, articles: d.articles.map(normalizeArticle) } : null;
};

/* -----------------------------------------------------------
 * Helpers for fallback-aware rendering.
 * ----------------------------------------------------------- */

/** Return `a` if it is a non-empty value, otherwise `b`. */
export function pick<T>(a: T | null | undefined | "", b: T): T {
  if (a === null || a === undefined || a === "") return b;
  if (Array.isArray(a) && a.length === 0) return b;
  return a as T;
}

/** Return a cover src (CMS image URL if present, otherwise a static path). */
export function imgSrc(img: CmsImage, fallback: string): string {
  return img?.url ?? fallback;
}

/**
 * Deep-merge a CMS response over a fallback object.
 *
 * A field from the CMS "wins" unless it is considered empty — in which case
 * the fallback value is used instead. This is what keeps the mock content
 * visible on pages where an editor has not filled in every ACF field yet.
 *
 * Considered empty: `null`, `undefined`, `""`, `[]`, `{}`.
 * NOT empty: `0`, `false`, a CMS image object with `url`, populated arrays.
 */
function isEmpty(v: unknown): boolean {
  if (v === null || v === undefined) return true;
  if (typeof v === "string") return v.trim() === "";
  if (Array.isArray(v)) {
    if (v.length === 0) return true;
    // Arrays of trivially-empty items (e.g. marquee `[""]`, benefits `[""]`)
    // count as empty too — let the fallback take over.
    return v.every((item) => isEmpty(item));
  }
  if (typeof v === "object") {
    const obj = v as Record<string, unknown>;
    if ("url" in obj && typeof obj.url === "string" && obj.url) return false;
    if ("id" in obj && typeof obj.id === "number" && obj.id > 0) return false;
    return Object.keys(obj).length === 0;
  }
  return false;
}

/**
 * Build a table of contents from a Gutenberg-rendered article body by
 * scanning for `<h2>` headings. Injects an `id` attribute on headings that
 * don't already have one (slugified from the heading text) so the TOC links
 * anchor to the right position, and returns the rewritten HTML alongside the
 * list of TOC items.
 */
function slugifyHeading(text: string): string {
  const cleaned = text
    .replace(/<[^>]+>/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u0e00-\u0e7f\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80);
  return cleaned || "section";
}

export function prepareArticleBody(html: string): {
  html: string;
  toc: { id: string; label: string }[];
} {
  if (!html) return { html, toc: [] };
  const toc: { id: string; label: string }[] = [];
  const used = new Set<string>();

  let rewritten = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/gi,
    (_full, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      if (!text) return `<h2${attrs}>${inner}</h2>`;
      const existingId = /\bid=["']([^"']+)["']/.exec(attrs)?.[1];
      let id = existingId ?? "";
      if (!id) {
        const base = slugifyHeading(text);
        id = base;
        let n = 1;
        while (used.has(id)) id = `${base}-${++n}`;
      }
      used.add(id);
      toc.push({ id, label: text });
      const nextAttrs = existingId ? attrs : attrs + ` id="${id}"`;
      return `<h2${nextAttrs}>${inner}</h2>`;
    },
  );

  // Inject a decorative opening quote mark inside every <blockquote>.
  // Gutenberg's default blockquote has the shape:
  //   <blockquote class="wp-block-quote"><p>…</p><cite>…</cite></blockquote>
  // We prepend an absolutely-positioned span so the pull-quote card can
  // display a big "\u201C" without relying on Tailwind's arbitrary-content
  // unicode escapes (which render literally as "\\u201C").
  const quoteMark =
    '<span aria-hidden="true" class="tcca-quote-mark">\u201C</span>';
  rewritten = rewritten.replace(
    /<blockquote([^>]*)>/gi,
    (_m, attrs: string) => `<blockquote${attrs}>${quoteMark}`,
  );

  return { html: rewritten, toc };
}

/**
 * Filter a list of items via the given predicate (what counts as "meaningful"),
 * falling back to the mock list when nothing meaningful remains.
 *
 * ACF repeaters often return a single default row even when the editor never
 * filled anything in (e.g. an About card with only `tone: "navy"` set, or a
 * marquee with `[""]`). The enum-default makes the row look non-empty to a
 * generic deep-merge, so a per-field predicate is needed.
 */
export function pickList<T>(
  items: T[] | null | undefined,
  fb: T[],
  hasContent: (item: T) => boolean,
): T[] {
  const filtered = (items ?? []).filter(hasContent);
  return filtered.length ? filtered : fb;
}

export function mergeCms<T>(cms: unknown, fb: T): T {
  if (isEmpty(cms)) return fb;

  // Arrays: keep CMS array as-is (each item may have its own fallbacks handled
  // by the consuming component). Only swap to fallback when CMS sent nothing.
  if (Array.isArray(cms) || Array.isArray(fb)) return cms as T;

  if (typeof cms === "object" && typeof fb === "object" && fb !== null) {
    const cmsObj = cms as Record<string, unknown>;
    const fbObj = fb as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    const keys = new Set([...Object.keys(fbObj), ...Object.keys(cmsObj)]);
    for (const k of keys) {
      out[k] = mergeCms(cmsObj[k], fbObj[k]);
    }
    return out as T;
  }

  return cms as T;
}
