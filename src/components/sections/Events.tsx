import Image from "next/image";

const upcoming = [
  {
    date: "15 พ.ค. 69",
    day: "15",
    month: "MAY",
    title: "Creator Masterclass · Storytelling for Short-form",
    tag: "Workshop",
    host: "TCCA × iCreator",
  },
  {
    date: "04 มิ.ย. 69",
    day: "04",
    month: "JUN",
    title: "Roundtable: อนาคต Affiliate & Live Commerce ไทย",
    tag: "Roundtable",
    host: "TCCA",
  },
  {
    date: "22 ก.ค. 69",
    day: "22",
    month: "JUL",
    title: "Thailand Creator Summit 2026",
    tag: "Summit",
    host: "TCCA × Partners",
  },
];

export function Events() {
  return (
    <section id="events" className="relative pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
              Events & Agenda
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy-700 md:text-6xl">
              มาเจอกัน
              <br />
              ที่งานของเรา
            </h2>
          </div>
          <a
            href="#"
            className="font-display hidden rounded-full border border-navy-600/15 px-5 py-2.5 text-base font-semibold text-navy-700 transition hover:border-navy-600/40 md:inline-flex"
          >
            ปฏิทินทั้งหมด →
          </a>
        </div>

        {/* FEATURED press conference */}
        <article className="group relative mt-12 overflow-hidden rounded-[2.5rem] bg-navy-700 text-cream shadow-2xl">
          <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
          <div
            aria-hidden
            className="absolute -left-20 -top-10 h-64 w-64 rounded-full bg-orange-tcca/40 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full brand-gradient opacity-40 blur-3xl"
          />

          <div className="relative grid gap-10 p-8 md:grid-cols-[1fr_0.9fr] md:p-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-full bg-orange-tcca px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  Featured
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cream/70">
                  Press Conference · Grand Opening
                </span>
              </div>

              <h3 className="mt-3 font-display text-4xl font-bold leading-tight md:text-6xl">
                แถลงข่าว
                <br />
                <span className="brand-gradient-text">เปิดตัวสมาคม</span>
                <br />
                อย่างเป็นทางการ
              </h3>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80">
                ร่วมเป็นสักขีพยานวันสำคัญของวงการครีเอเตอร์ไทย
                พร้อมประกาศวิสัยทัศน์ คณะกรรมการสมาคม และเวทีเสวนาพิเศษ
                &ldquo;อนาคตวงการและวิชาชีพ&rdquo;
                โดยผู้นำอุตสาหกรรมตัวจริง
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-cream/60">
                    Date
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold">
                    27 เม.ย. 69
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-cream/60">
                    Time
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold">
                    13:00 – 16:00
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-cream/60">
                    Venue
                  </dt>
                  <dd className="mt-1 font-display text-xl font-semibold">
                    SCBX Next Tech · ชั้น 4 ศูนย์การค้าสยามพารากอน
                  </dd>
                </div>
              </dl>

              <a
                href="#"
                className="font-display mt-10 inline-flex items-center gap-3 rounded-full bg-cream px-6 py-3.5 text-base font-semibold text-navy-700 transition hover:bg-white"
              >
                ลงทะเบียนเข้าร่วมงาน
                <span
                  aria-hidden
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-tcca text-white"
                >
                  ↗
                </span>
              </a>
            </div>

            {/* agenda ticker */}
            <div className="relative">
              <div className="rounded-3xl border border-cream/10 bg-navy-600/40 p-6 backdrop-blur">
                <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
                  Agenda
                </h4>
                <ul className="mt-5 space-y-4">
                  {[
                    ["13:00", "ลงทะเบียนผู้เข้าร่วมงาน"],
                    ["13:30", "Opening Session · VTR แนะนำสมาคม"],
                    ["13:35", "วิสัยทัศน์และวัตถุประสงค์"],
                    ["13:50", "ที่ปรึกษา & คณะกรรมการสมาคม"],
                    ["14:20", "เวทีเสวนา · อนาคตวงการและวิชาชีพ"],
                    ["15:20", "ถ่ายภาพร่วมกัน"],
                    ["15:30", "สัมภาษณ์สื่อมวลชน"],
                  ].map(([t, l]) => (
                    <li key={t} className="flex gap-4 text-sm">
                      <span className="w-14 shrink-0 font-mono font-semibold text-orange-light">
                        {t}
                      </span>
                      <span className="text-cream/90">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute -top-4 -right-4 hidden h-24 w-24 rotate-[8deg] overflow-hidden rounded-2xl border-4 border-navy-700 shadow-xl md:block">
                <Image
                  src="/brand/profile-gradient.jpg"
                  alt=""
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </article>

        {/* upcoming grid */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-navy-600/70">
            Upcoming · กิจกรรมถัดไป
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {upcoming.map((e) => (
              <article
                key={e.title}
                className="group flex flex-col justify-between rounded-3xl border border-navy-600/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-orange-tcca/50 hover:shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-navy-700 text-cream">
                    <span className="font-display text-3xl font-bold leading-none">
                      {e.day}
                    </span>
                    <span className="mt-1 text-[10px] font-semibold tracking-widest text-orange-light">
                      {e.month}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="inline-flex rounded-full bg-orange-soft px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-orange-tcca">
                      {e.tag}
                    </span>
                    <h4 className="mt-3 font-display text-lg font-semibold leading-tight text-navy-700">
                      {e.title}
                    </h4>
                    <p className="mt-1 text-xs text-navy-600/70">by {e.host}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-navy-700">
                  <span>ดูรายละเอียด</span>
                  <span
                    aria-hidden
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy-700 text-cream transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
