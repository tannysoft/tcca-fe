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
  mergeCms,
  pickList,
} from "@/lib/cms";
import { fbHome, fbBootstrap, fbPillars, fbPartners } from "@/lib/cms-fallback";

export default async function Home() {
  const [home, pillars, partners, bootstrap] = await Promise.all([
    getHome(),
    getPillars(),
    getPartners(),
    getBootstrap(),
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
        featured={h.news_section.featured_article}
        insight={h.news_section.insight_article}
        community={h.news_section.community_article}
      />
      <Partners data={partnersData} />
      <JoinCTA data={h.join} />
    </>
  );
}
