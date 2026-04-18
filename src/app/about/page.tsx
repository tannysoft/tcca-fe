import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "ทำความรู้จักสมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย (TCCA) — เป้าหมาย คณะกรรมการ และเส้นทางการขับเคลื่อนวงการครีเอเตอร์ไทย",
};

const values = [
  {
    n: "01",
    title: "Open",
    body: "เปิดกว้างสำหรับครีเอเตอร์ทุกขนาด ทุกแพลตฟอร์ม ทุกสไตล์ ไม่จำกัดแบบ",
    tone: "navy",
  },
  {
    n: "02",
    title: "Ethical",
    body: "เคารพจริยธรรมและข้อมูลผู้บริโภค — Creator ต้องน่าเชื่อถือระยะยาว",
    tone: "orange",
  },
  {
    n: "03",
    title: "Practical",
    body: "ลงมือทำจริงด้วยโปรแกรม Workshop, Mentorship และ Tooling ที่ใช้ได้",
    tone: "cream",
  },
  {
    n: "04",
    title: "Ambitious",
    body: "ผลักดันครีเอเตอร์ไทยสู่เวทีภูมิภาคและระดับโลกอย่างมีมาตรฐาน",
    tone: "gradient",
  },
] as const;

const timeline = [
  {
    year: "2024",
    title: "รวมตัวครั้งแรก",
    body: "กลุ่มครีเอเตอร์ อินฟลูเอนเซอร์ และผู้นำอุตสาหกรรมเริ่มประชุมร่วมกัน เพื่อร่างแนวทางจัดตั้งสมาคม",
  },
  {
    year: "2025",
    title: "จดทะเบียนสมาคม",
    body: "จดทะเบียนเป็นสมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทยอย่างเป็นทางการ และเปิดรับสมาชิกรุ่นก่อตั้ง",
  },
  {
    year: "2026",
    title: "เปิดตัวสู่สาธารณะ",
    body: "จัดงานแถลงข่าวเปิดตัวสมาคมที่ SCBX Next Tech พร้อมประกาศทิศทาง 3 ปีแรก",
  },
  {
    year: "ต่อไป",
    title: "Creator Summit 2026",
    body: "จัดงาน Thailand Creator Summit ครั้งแรก รวบรวมแบรนด์ แพลตฟอร์ม และครีเอเตอร์บนเวทีเดียวกัน",
  },
];

const committee = [
  { name: "คณะที่ปรึกษา", role: "Advisors", count: "8 ท่าน" },
  { name: "คณะกรรมการบริหาร", role: "Executive Committee", count: "12 ท่าน" },
  { name: "อนุกรรมการวิชาชีพ", role: "Professional Standards", count: "15 ท่าน" },
  { name: "อนุกรรมการกิจกรรม", role: "Events & Programs", count: "10 ท่าน" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "เกี่ยวกับเรา" },
        ]}
        title={
          <>
            สมาคมที่สร้างขึ้น
            <br />
            <span className="brand-gradient-text">
              โดยครีเอเตอร์
            </span>{" "}
            เพื่อครีเอเตอร์
          </>
        }
        description="TCCA คือองค์กรกลางที่รวบรวมคอนเทนต์ครีเอเตอร์ อินฟลูเอนเซอร์ นักขายออนไลน์ และผู้ประกอบการในอุตสาหกรรมสร้างสรรค์ — เพื่อขับเคลื่อน Creator Economy ไทยสู่มาตรฐานสากล"
        accent={
          <div className="relative hidden h-full md:block">
            <div className="absolute inset-x-6 top-6 rounded-[2rem] bg-navy-700 p-8 text-cream shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
                Our North Star
              </p>
              <p className="mt-4 font-display text-3xl font-bold !leading-[1.05]">
                ทำให้ครีเอเตอร์ไทย
                <br />
                เป็นวิชาชีพที่ภูมิใจ
                <br />
                และเติบโตอย่างยั่งยืน
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm">
                <span aria-hidden className="h-px w-10 bg-orange-tcca" />
                <span className="text-cream/70">TCCA Manifesto · 2026</span>
              </div>
            </div>
          </div>
        }
      />

      {/* STORY */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
                Our Story
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold !leading-[1.05] text-navy-700 md:text-5xl">
                จากวันที่ครีเอเตอร์
                <br />
                เป็นอาชีพที่ถูก
                <span className="brand-gradient-text"> มองข้าม</span>
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-navy-600/80">
              <p>
                ปี 2020 คอนเทนต์ครีเอเตอร์ไทยกระโดดจากงานอดิเรกกลายเป็นอาชีพหลักของคนรุ่นใหม่
                นับล้านคน — แต่โครงสร้างรองรับยังเป็นศูนย์
                ไม่มีมาตรฐานสัญญา ไม่มีการคุ้มครองลิขสิทธิ์
                และไม่มีเสียงที่ดังพอต่อภาครัฐและแพลตฟอร์ม
              </p>
              <p>
                TCCA ก่อตัวขึ้นจากครีเอเตอร์ตัวจริงที่เจอปัญหาเดียวกัน
                เรารวมพลังเพื่อเปลี่ยนวงการจาก{" "}
                <strong className="font-semibold text-navy-700">
                  ตัวใครตัวมัน
                </strong>{" "}
                เป็น{" "}
                <strong className="font-semibold text-navy-700">
                  ชุมชนที่มีมาตรฐาน
                </strong>{" "}
                — เปิดโอกาสให้ครีเอเตอร์ทุกระดับเติบโตอย่างมั่นคง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
                Our Values
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold !leading-[1.05] text-navy-700 md:text-6xl">
                4 คุณค่าที่
                <br />
                ยึดถือร่วมกัน
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const toneClass =
                v.tone === "navy"
                  ? "bg-navy-700 text-cream"
                  : v.tone === "orange"
                    ? "bg-orange-tcca text-white"
                    : v.tone === "cream"
                      ? "bg-white text-navy-700 ring-1 ring-navy-600/10"
                      : "relative overflow-hidden text-white";
              return (
                <article
                  key={v.n}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 ${toneClass}`}
                >
                  {v.tone === "gradient" && (
                    <>
                      <div
                        aria-hidden
                        className="absolute inset-0 brand-gradient"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-navy-800/20 mix-blend-multiply"
                      />
                    </>
                  )}
                  <div className="relative">
                    <span className="text-xs font-bold uppercase tracking-[0.28em] opacity-60">
                      {v.n}
                    </span>
                    <h3 className="mt-3 font-display text-3xl font-bold">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed opacity-85">
                      {v.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative bg-navy-700 py-20 text-cream md:py-28">
        <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl opacity-20 brand-gradient"
        />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
            Journey
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold !leading-[1.05] md:text-6xl">
            เส้นทางของเรา
          </h2>

          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute left-4 top-0 bottom-0 w-px bg-cream/15 md:left-1/2 md:-translate-x-1/2"
            />
            <ol className="space-y-10">
              {timeline.map((t, i) => {
                const isRight = i % 2 === 1;
                return (
                  <li
                    key={t.year}
                    className="relative grid gap-4 md:grid-cols-2 md:gap-12"
                  >
                    <div
                      className={`relative pl-12 md:pl-0 ${
                        isRight ? "md:order-2 md:text-left md:pl-12" : "md:text-right md:pr-12"
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`absolute left-2.5 top-2 h-3 w-3 rounded-full bg-orange-tcca ring-4 ring-navy-700 md:top-3 ${
                          isRight
                            ? "md:left-[-26px] md:right-auto"
                            : "md:left-auto md:right-[-26px]"
                        }`}
                      />
                      <span className="font-display text-4xl font-bold text-orange-light md:text-5xl">
                        {t.year}
                      </span>
                    </div>
                    <div
                      className={`pl-12 md:pl-0 ${
                        isRight ? "md:text-right md:pr-12" : "md:pl-12"
                      }`}
                    >
                      <h3 className="font-display text-2xl font-bold text-cream">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/75">
                        {t.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* COMMITTEE */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
                Committee
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold !leading-[1.05] text-navy-700 md:text-5xl">
                คณะทำงานของ
                <br />
                สมาคม
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-600/80">
                ทีมที่อยู่เบื้องหลัง TCCA คือผู้นำจริงในวงการครีเอเตอร์
                สื่อ เอเจนซี่ และแพลตฟอร์มดิจิทัล ที่รู้ปัญหาและรับฟังชุมชน
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {committee.map((c) => (
                <div
                  key={c.name}
                  className="group relative overflow-hidden rounded-3xl border border-navy-600/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-orange-tcca/40 hover:shadow-lg"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-tcca">
                    {c.role}
                  </p>
                  <p className="mt-3 font-display text-2xl font-bold text-navy-700">
                    {c.name}
                  </p>
                  <p className="mt-2 text-sm text-navy-600/70">{c.count}</p>
                  <span
                    aria-hidden
                    className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-700 text-cream transition-transform group-hover:rotate-45"
                  >
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-navy-700 p-10 text-cream md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 brand-gradient opacity-15"
            />
            <div
              aria-hidden
              className="absolute inset-0 dot-grid-light opacity-30"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
                  Join us
                </p>
                <h2 className="mt-4 font-display text-4xl font-bold !leading-[1.05] md:text-6xl">
                  อยากเป็นส่วนหนึ่ง
                  <br />
                  ของเรา?
                </h2>
                <p className="mt-5 max-w-lg text-lg text-cream/80">
                  เปิดรับสมาชิกรุ่นก่อตั้ง 1,000 คนแรก —
                  ร่วมวางรากฐานวงการครีเอเตอร์ไทยไปด้วยกัน
                </p>
              </div>
              <Link
                href="/register"
                className="font-display group inline-flex h-16 items-center gap-3 rounded-full bg-orange-tcca px-8 text-xl font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-light hover:shadow-xl"
              >
                สมัครสมาชิก
                <span
                  aria-hidden
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45"
                >
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
