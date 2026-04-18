import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TCCA เปิดตัวอย่างเป็นทางการ",
  description:
    "สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทยเปิดตัวอย่างเป็นทางการ พร้อมประกาศวิสัยทัศน์ยกระดับวงการครีเอเตอร์ไทย",
};

const toc = [
  { id: "intro", label: "บทนำ" },
  { id: "vision", label: "วิสัยทัศน์สมาคม" },
  { id: "pillars", label: "6 พันธกิจหลัก" },
  { id: "speakers", label: "เวทีเสวนาพิเศษ" },
  { id: "next", label: "ก้าวต่อไป" },
];

const related = [
  {
    tag: "Insight",
    title: "Creator Economy Thailand Report 2026",
    date: "10 เม.ย. 2569",
  },
  {
    tag: "Community",
    title: "เปิดรับสมาชิกรุ่นก่อตั้ง 1,000 คนแรก",
    date: "01 เม.ย. 2569",
  },
  {
    tag: "Events",
    title: "Thailand Creator Summit 2026",
    date: "22 ก.ค. 2569",
  },
];

export default function DetailPage() {
  return (
    <>
      {/* HERO — cover + title overlay */}
      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <nav
            aria-label="breadcrumb"
            className="font-display flex flex-wrap items-center gap-2 text-sm text-navy-600/70"
          >
            <Link href="/" className="transition-colors hover:text-navy-700">
              หน้าแรก
            </Link>
            <span aria-hidden className="text-navy-600/40">
              /
            </span>
            <Link
              href="/news"
              className="transition-colors hover:text-navy-700"
            >
              ข่าวสาร & แถลงการณ์
            </Link>
            <span aria-hidden className="text-navy-600/40">
              /
            </span>
            <span className="text-navy-700">บทความ</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-tcca px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              แถลงการณ์
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-navy-600/60">
              27 เม.ย. 2569 · 4 min read
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-bold !leading-[1.02] tracking-tight text-navy-700 md:text-7xl">
            TCCA เปิดตัวอย่างเป็นทางการ พร้อมประกาศ
            <span className="brand-gradient-text"> วิสัยทัศน์</span>
            ยกระดับวงการครีเอเตอร์ไทย
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-navy-600/70">
            <span className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-xs font-bold text-white">
                T
              </span>
              <span>
                <span className="block font-semibold text-navy-700">
                  Newsroom
                </span>
                <span className="block text-xs">TCCA Official</span>
              </span>
            </span>
            <span aria-hidden className="h-6 w-px bg-navy-600/15" />
            <ShareButton label="Share" />
            <ShareButton label="Copy link" />
          </div>
        </div>

        {/* cover image strip */}
        <div className="relative mx-auto mt-12 max-w-7xl px-5 md:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2.5rem] shadow-xl ring-1 ring-navy-600/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/news/press-conference.jpg"
              alt="TCCA press conference"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* caption */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <span className="rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-navy-700 backdrop-blur">
                SCBX Next Tech · Siam Paragon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_260px] md:px-8">
          {/* article body */}
          <article className="prose-article space-y-8 text-lg leading-relaxed text-navy-700/90">
            <section id="intro">
              <p className="text-xl font-semibold text-navy-700">
                เมื่อวันที่ 27 เมษายน 2569 ณ SCBX Next Tech ชั้น 4
                ศูนย์การค้าสยามพารากอน
                สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย (TCCA)
                ได้เปิดตัวอย่างเป็นทางการ พร้อมประกาศคณะกรรมการสมาคม
                และแผนการทำงาน 3 ปีแรก
              </p>
              <p>
                งานครั้งนี้ได้รับความสนใจจากสื่อมวลชน แบรนด์ชั้นนำ
                แพลตฟอร์มดิจิทัล และครีเอเตอร์จากทุกสาขาอาชีพ
                ซึ่งมาร่วมเป็นสักขีพยานในการเริ่มต้นของสมาคมวิชาชีพใหม่
                ที่จะเป็นบ้านของครีเอเตอร์ไทย
              </p>
            </section>

            <PullQuote>
              &ldquo;เราเชื่อว่าครีเอเตอร์ไทยมีศักยภาพระดับโลก —
              สิ่งที่ต้องการคือโครงสร้างที่รองรับ
              และชุมชนที่เข้าใจกัน&rdquo;
            </PullQuote>

            <section id="vision" className="space-y-5">
              <h2 className="font-display text-3xl font-bold !leading-[1.05] text-navy-700 md:text-4xl">
                วิสัยทัศน์ของสมาคม
              </h2>
              <p>
                TCCA ตั้งเป้าหมายให้ครีเอเตอร์ไทยเป็นวิชาชีพที่
                <strong className="font-semibold text-navy-700">
                  {" "}
                  น่าภูมิใจและเติบโตได้ยั่งยืน
                </strong>{" "}
                ผ่านการสร้างมาตรฐานวิชาชีพ การคุ้มครองสิทธิ์
                และการผลักดันนโยบายที่เอื้อต่อการเติบโต
              </p>
              <p>
                สมาคมจะทำงานในบทบาท 3 ประการ — เป็น Gatekeeper
                ในเรื่องมาตรฐาน เป็น Bridge
                เชื่อมระหว่างครีเอเตอร์กับภาครัฐและเอกชน
                และเป็น Accelerator ที่ช่วยให้ครีเอเตอร์เติบโตได้เร็วขึ้น
              </p>
            </section>

            <section id="pillars" className="space-y-5">
              <h2 className="font-display text-3xl font-bold !leading-[1.05] text-navy-700 md:text-4xl">
                6 พันธกิจหลัก
              </h2>
              <ol className="space-y-3">
                {[
                  "มาตรฐานวิชาชีพและจรรยาบรรณ",
                  "พัฒนาทักษะครีเอเตอร์ทุกระดับ",
                  "สร้างโอกาสทางธุรกิจและเครือข่าย",
                  "คุ้มครองสิทธิ์ สัญญา และความปลอดภัย",
                  "Research & Insight ของวงการ",
                  "เชื่อมภาครัฐ-เอกชนและผลักดันนโยบาย",
                ].map((p, i) => (
                  <li
                    key={p}
                    className="flex gap-4 rounded-2xl border border-navy-600/10 bg-white/60 p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-700 font-display text-sm font-bold text-cream">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-lg font-semibold text-navy-700">
                      {p}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="speakers" className="space-y-5">
              <h2 className="font-display text-3xl font-bold !leading-[1.05] text-navy-700 md:text-4xl">
                เวทีเสวนาพิเศษ · อนาคตวงการและวิชาชีพ
              </h2>
              <p>
                ช่วงไฮไลต์ของงานคือเวทีเสวนาที่รวบรวมผู้นำวงการ 7 คน
                — จาก GMM Grammy, Woody World, YouWeeVee, Salmon House,
                Buff Geek, Tellscore และ The Zero Publishing —
                มาถกประเด็นเรื่องความเป็นไปได้ของอาชีพ
                คอนเทนต์ครีเอเตอร์ในอีก 5 ปีข้างหน้า
              </p>
              <figure className="overflow-hidden rounded-[2rem] shadow-lg ring-1 ring-navy-600/10">
                <div className="relative aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/news/press-conference.jpg"
                    alt="speakers panel"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <figcaption className="bg-navy-700 px-5 py-3 text-xs text-cream/80">
                  เวทีเสวนา ของผู้นำวงการครีเอเตอร์ 7 คน
                </figcaption>
              </figure>
            </section>

            <section id="next" className="space-y-5">
              <h2 className="font-display text-3xl font-bold !leading-[1.05] text-navy-700 md:text-4xl">
                ก้าวต่อไปของ TCCA
              </h2>
              <p>
                สมาคมจะเปิดรับสมาชิกรุ่นก่อตั้งจำนวนจำกัด 1,000 คนแรก
                พร้อมเริ่มโปรแกรม Masterclass และ Mentorship ตั้งแต่เดือนพฤษภาคม
                นอกจากนี้ยังเตรียมจัดงาน Thailand Creator Summit
                ครั้งแรกในเดือนกรกฎาคม 2569
              </p>
            </section>

            {/* tags */}
            <div className="flex flex-wrap gap-2 border-t border-navy-600/10 pt-10">
              {["TCCA", "Creator Economy", "Press Conference", "Creator Standards", "Thailand"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-navy-700 ring-1 ring-navy-600/10"
                  >
                    #{t}
                  </span>
                ),
              )}
            </div>
          </article>

          {/* sidebar */}
          <aside className="relative">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-3xl border border-navy-600/10 bg-white/70 p-5 backdrop-blur">
                <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-orange-tcca">
                  On this page
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {toc.map((t) => (
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

      {/* RELATED */}
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
            {related.map((r) => (
              <Link
                href="#"
                key={r.title}
                className="group overflow-hidden rounded-3xl bg-white ring-1 ring-navy-600/10 transition-all hover:-translate-y-1 hover:ring-orange-tcca/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/news/press-conference.jpg"
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-navy-700 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cream">
                    {r.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold !leading-[1.15] text-navy-700">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-xs text-navy-600/60">{r.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <figure className="relative my-10 overflow-hidden rounded-3xl bg-navy-700 p-8 text-cream md:p-10">
      <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
      <div
        aria-hidden
        className="absolute -top-10 -right-6 font-display text-[140px] leading-none text-cream/10"
      >
        &ldquo;
      </div>
      <blockquote className="relative font-display text-2xl font-semibold !leading-[1.2] md:text-3xl">
        {children}
      </blockquote>
      <figcaption className="relative mt-6 flex items-center gap-3 text-sm">
        <span aria-hidden className="h-px w-10 bg-orange-tcca" />
        <span className="text-cream/70">TCCA Manifesto</span>
      </figcaption>
    </figure>
  );
}

function ShareButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="font-display inline-flex items-center gap-2 rounded-full border border-navy-600/15 bg-white/60 px-4 py-2 text-xs font-semibold text-navy-700 backdrop-blur transition hover:border-navy-600/40"
    >
      <span aria-hidden>↗</span>
      {label}
    </button>
  );
}
