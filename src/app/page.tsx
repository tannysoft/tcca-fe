import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Pillars } from "@/components/sections/Pillars";
import { Events } from "@/components/sections/Events";
import { News } from "@/components/sections/News";
import { Partners } from "@/components/sections/Partners";
import { JoinCTA } from "@/components/sections/JoinCTA";
import {
  getHome,
  getPartners,
  getPillars,
  getBootstrap,
  getArticles,
  mergeCms,
  pickList,
  type ArticleCms,
} from "@/lib/cms";
import { fbHome, fbBootstrap, fbPillars, fbPartners } from "@/lib/cms-fallback";

/** Pick a card article: use the editor's ACF choice, otherwise find a post
 *  whose category matches, otherwise fall back to the first remaining post. */
function pickCard(
  chosen: ArticleCms | null | undefined,
  pool: ArticleCms[],
  used: Set<number>,
  matchCategory: string,
): ArticleCms | null {
  if (chosen) {
    used.add(chosen.id);
    return chosen;
  }
  const byCategory = pool.find(
    (a) =>
      !used.has(a.id) &&
      (a.tag_label?.toLowerCase() === matchCategory.toLowerCase() ||
        a.categories?.some(
          (c) => c.slug.toLowerCase() === matchCategory.toLowerCase(),
        )),
  );
  if (byCategory) {
    used.add(byCategory.id);
    return byCategory;
  }
  const fallback = pool.find((a) => !used.has(a.id));
  if (fallback) used.add(fallback.id);
  return fallback ?? null;
}

export default async function Home() {
  const [home, pillars, partners, bootstrap, articles] = await Promise.all([
    getHome(),
    getPillars(),
    getPartners(),
    getBootstrap(),
    getArticles({ limit: 12 }),
  ]);

  const h = mergeCms(home, fbHome);

  // Replace default/empty ACF repeater rows with the mock content.
  h.hero.marquee = pickList(h.hero.marquee, fbHome.hero.marquee, (w) => !!w.trim());
  h.about.cards = pickList(
    h.about.cards,
    fbHome.about.cards,
    (c) => !!(c.kicker?.trim() || c.title?.trim() || c.body?.trim()),
  );
  h.join.benefits = pickList(h.join.benefits, fbHome.join.benefits, (b) => !!b.trim());

  const pillarList = pickList(
    pillars,
    fbPillars,
    (p) => !!(p.title?.trim() || p.description?.trim()),
  );

  const partnersData = mergeCms(partners, fbPartners);
  partnersData.items = pickList(
    partnersData.items,
    fbPartners.items,
    (p) => !!(p.name?.trim() || p.logo?.url),
  );

  // News section — prefer the editor's ACF choices on the Home page, then
  // auto-fill missing slots from the latest WP posts so the homepage always
  // has real content as soon as news is published, without manual picking.
  const articlePool = articles ?? [];
  const used = new Set<number>();
  const featuredArticle =
    h.news_section.featured_article ??
    articlePool.find((a) => a.is_featured) ??
    articlePool[0] ??
    null;
  if (featuredArticle) used.add(featuredArticle.id);
  const insightArticle = pickCard(
    h.news_section.insight_article,
    articlePool,
    used,
    "insight",
  );
  const communityArticle = pickCard(
    h.news_section.community_article,
    articlePool,
    used,
    "community",
  );

  const avatar =
    bootstrap?.identity.brand_avatar?.url ??
    fbBootstrap.identity.brand_avatar?.url;

  return (
    <>
      <Hero data={h.hero} />
      <About data={h.about} />
      <Pillars section={h.pillars_section} items={pillarList} />
      <Events
        section={h.events_section}
        featured={h.events_section.featured_event}
        upcoming={h.events_section.upcoming_events}
        avatarUrl={avatar}
      />
      <News
        section={h.news_section}
        featured={featuredArticle}
        insight={insightArticle}
        community={communityArticle}
      />
      <Partners data={partnersData} />
      <JoinCTA data={h.join} />
    </>
  );
}
