import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "ข่าวสาร & บทความ",
  description:
    "ข่าวสาร แถลงการณ์ และบทความล่าสุดจาก TCCA — สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย",
};

const articles = [
  {
    slug: "tcca-launch-2026",
    tag: "แถลงการณ์",
    title:
      "TCCA เปิดตัวอย่างเป็นทางการ พร้อมประกาศวิสัยทัศน์ยกระดับวงการครีเอเตอร์ไทย",
    excerpt:
      "สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทยเปิดตัวอย่างเป็นทางการ ณ SCBX Next Tech พร้อมเวทีเสวนาพิเศษโดยผู้นำอุตสาหกรรม",
    date: "27 เม.ย. 2569",
    readMinutes: 4,
    cover: "/news/press-conference.jpg",
  },
  {
    slug: "creator-economy-report-2026",
    tag: "Insight",
    title: "Creator Economy Thailand Report 2026 — โตอย่างไร โตไปทางไหน",
    excerpt:
      "รายงานข้อมูลเชิงลึกฉบับแรกของ TCCA พร้อมตัวเลขสำคัญที่แบรนด์และครีเอเตอร์ต้องรู้ในปีนี้",
    date: "10 เม.ย. 2569",
    readMinutes: 8,
    cover: "/news/agenda.jpg",
  },
  {
    slug: "founding-members-1000",
    tag: "Community",
    title: "เปิดรับสมาชิกรุ่นก่อตั้ง 1,000 คนแรก",
    excerpt:
      "Workshop ฟรีตลอดปีแรก เครือข่ายพาร์ทเนอร์ และสิทธิพิเศษอีกมากมายสำหรับครีเอเตอร์ที่เข้าร่วมในรอบก่อตั้ง",
    date: "01 เม.ย. 2569",
    readMinutes: 3,
    cover: "/news/invite.jpg",
  },
  {
    slug: "creator-summit-2026",
    tag: "Events",
    title: "Thailand Creator Summit 2026 เตรียมจัดเดือนกรกฎาคม",
    excerpt:
      "เวทีรวมครีเอเตอร์ แบรนด์ และแพลตฟอร์มชั้นนำของไทย พร้อมประกาศ Speaker Lineup ในเร็วๆ นี้",
    date: "22 มี.ค. 2569",
    readMinutes: 5,
    cover: "/news/press-conference.jpg",
  },
  {
    slug: "creator-standards-draft",
    tag: "Policy",
    title: "ร่างมาตรฐานวิชาชีพครีเอเตอร์ไทย ฉบับที่ 1",
    excerpt:
      "TCCA เปิดร่างมาตรฐานวิชาชีพให้สมาชิกร่วมเสนอความเห็น ก่อนประกาศใช้เป็นแนวทางอ้างอิงของวงการ",
    date: "14 มี.ค. 2569",
    readMinutes: 6,
    cover: "/news/agenda.jpg",
  },
  {
    slug: "brand-match-program",
    tag: "Program",
    title: "เปิดตัว TCCA Match — ระบบจับคู่ครีเอเตอร์กับแบรนด์",
    excerpt:
      "แพลตฟอร์มภายในสำหรับสมาชิก ช่วยจับคู่งานและพาร์ทเนอร์ที่ตรงกับสไตล์และผู้ติดตามของคุณ",
    date: "02 มี.ค. 2569",
    readMinutes: 4,
    cover: "/news/invite.jpg",
  },
  {
    slug: "masterclass-series-launch",
    tag: "Education",
    title: "Masterclass Series ซีซันแรก เปิดให้สมาชิกลงทะเบียนแล้ว",
    excerpt:
      "8 คลาสจากผู้นำอุตสาหกรรม ครอบคลุมตั้งแต่ Storytelling, Brand Deal ไปจนถึง Tax & Legal สำหรับครีเอเตอร์",
    date: "20 ก.พ. 2569",
    readMinutes: 5,
    cover: "/news/press-conference.jpg",
  },
  {
    slug: "advisory-board-announcement",
    tag: "แถลงการณ์",
    title: "ประกาศคณะที่ปรึกษาสมาคม ชุดก่อตั้ง",
    excerpt:
      "8 ผู้นำจากวงการสื่อ เอเจนซี่ และแพลตฟอร์มดิจิทัล เข้าร่วมเป็นที่ปรึกษาของ TCCA",
    date: "12 ก.พ. 2569",
    readMinutes: 3,
    cover: "/news/agenda.jpg",
  },
  {
    slug: "research-call-2026",
    tag: "Insight",
    title: "เปิดรับงานวิจัยร่วม Creator Economy 2026",
    excerpt:
      "TCCA ร่วมกับมหาวิทยาลัยพันธมิตร เปิดรับโจทย์วิจัยเชิงลึกเกี่ยวกับเศรษฐกิจครีเอเตอร์ไทย",
    date: "01 ก.พ. 2569",
    readMinutes: 4,
    cover: "/news/invite.jpg",
  },
];

const TAG_OPTIONS = [
  "ทั้งหมด",
  "แถลงการณ์",
  "Insight",
  "Community",
  "Events",
  "Policy",
  "Education",
] as const;

export default function NewsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
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

      {/* FILTER */}
      <section className="relative pb-6">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-display text-sm font-semibold text-navy-700">
              หมวด:
            </span>
            {TAG_OPTIONS.map((t, i) => (
              <button
                key={t}
                type="button"
                className={`font-display rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  i === 0
                    ? "bg-navy-700 text-cream"
                    : "border border-navy-600/15 bg-white text-navy-700 hover:border-navy-600/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative pt-6 pb-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <FeaturedArticle data={featured} />
        </div>
      </section>

      {/* GRID */}
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
            {rest.map((a) => (
              <ArticleCard key={a.slug} data={a} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="font-display group inline-flex h-12 items-center gap-2 rounded-full border border-navy-600/15 bg-white px-6 text-base font-semibold text-navy-700 transition hover:border-navy-600/40 hover:bg-cream"
            >
              โหลดเพิ่ม
              <span
                aria-hidden
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy-700 text-cream transition-transform duration-300 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

type Article = (typeof articles)[number];

function FeaturedArticle({ data }: { data: Article }) {
  return (
    <Link
      href="/detail"
      className="group relative grid overflow-hidden rounded-[2.5rem] bg-navy-700 text-cream shadow-xl ring-1 ring-navy-600/10 md:grid-cols-[1.1fr_1fr]"
    >
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.cover}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy-700/85 via-navy-700/20 to-transparent md:hidden"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-navy-700 md:block"
        />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-orange-tcca px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          Featured · {data.tag}
        </span>
      </div>

      <div className="relative flex flex-col p-7 md:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 dot-grid-light opacity-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-tcca/25 blur-3xl"
        />
        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/60">
              {data.date}
            </span>
            <span aria-hidden className="h-px flex-1 bg-cream/15" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/60">
              {data.readMinutes} min read
            </span>
          </div>
          <h3 className="mt-6 font-display text-3xl font-bold !leading-[1.05] text-cream md:text-[40px]">
            {data.title}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-cream/80 md:text-base">
            {data.excerpt}
          </p>
        </div>
        <div className="relative mt-auto flex items-center justify-between gap-4 border-t border-cream/15 pt-6">
          <span className="text-xs text-cream/60">TCCA Newsroom</span>
          <span className="font-display inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-cream px-5 text-sm font-semibold text-navy-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
            อ่านเต็ม
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-tcca text-white transition-transform duration-300 group-hover:rotate-45"
            >
              ↗
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ data }: { data: Article }) {
  return (
    <Link
      href="/detail"
      className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-navy-600/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-orange-tcca/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.cover}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-navy-700/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cream backdrop-blur">
          {data.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold !leading-[1.15] text-navy-700 transition-colors group-hover:text-orange-tcca">
          {data.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-navy-600/75 line-clamp-3">
          {data.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-6 text-xs">
          <span className="font-semibold text-navy-600/60">{data.date}</span>
          <span className="font-display inline-flex items-center gap-1 text-navy-700 transition-transform group-hover:translate-x-0.5">
            อ่านต่อ
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

