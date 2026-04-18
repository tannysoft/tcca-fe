const featured = {
  tag: "แถลงการณ์",
  date: "27 เม.ย. 2569",
  readMinutes: 4,
  title:
    "TCCA เปิดตัวอย่างเป็นทางการ พร้อมประกาศวิสัยทัศน์ยกระดับวงการครีเอเตอร์ไทย",
  excerpt:
    "สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทยเปิดตัวอย่างเป็นทางการ ณ SCBX Next Tech พร้อมเวทีเสวนาพิเศษโดยผู้นำอุตสาหกรรม",
  author: "Newsroom",
};

const insight = {
  tag: "Insight",
  date: "10 เม.ย. 2569",
  bigNumber: "2026",
  title: "Creator Economy Thailand Report",
  subtitle: "โตอย่างไร · โตไปทางไหน",
  excerpt:
    "ข้อมูลเชิงลึกแรกของ TCCA พร้อมตัวเลขสำคัญที่แบรนด์และครีเอเตอร์ต้องรู้",
};

const community = {
  tag: "Community",
  date: "01 เม.ย. 2569",
  title: "เปิดรับสมาชิกรุ่นก่อตั้ง",
  highlight: "1,000 คนแรก",
  excerpt:
    "Workshop ฟรีตลอดปีแรก เครือข่ายพาร์ทเนอร์ และสิทธิพิเศษอีกมากมาย",
};

export function News() {
  return (
    <section id="news" className="relative pt-12 pb-24 md:pt-16 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
              Newsroom
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-navy-700 md:text-6xl">
              ข่าวสารและ
              <br />
              <span className="brand-gradient-text">บทความล่าสุด</span>
            </h2>
          </div>
          <a
            href="#"
            className="font-display group inline-flex h-12 items-center gap-2 rounded-full border border-navy-600/15 bg-white/60 px-5 text-base font-semibold text-navy-700 backdrop-blur transition hover:border-navy-600/40 hover:bg-white"
          >
            ดูทั้งหมด
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-navy-700 text-cream transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:grid-rows-[auto_auto]">
          <FeaturedCard data={featured} />
          <InsightCard data={insight} />
          <CommunityCard data={community} />
        </div>
      </div>
    </section>
  );
}

/* ==========================================================
 * FEATURED — editorial magazine card
 * ========================================================== */

function FeaturedCard({ data }: { data: typeof featured }) {
  return (
    <article className="group relative col-span-1 row-span-2 overflow-hidden rounded-[2rem] bg-navy-700 text-cream shadow-xl md:col-span-2">
      {/* ambient fx */}
      <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-tcca/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full brand-gradient opacity-20 blur-3xl"
      />

      {/* diagonal gradient ribbon */}
      <svg
        aria-hidden
        viewBox="0 0 400 400"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="newsRib" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5a8a" />
            <stop offset="50%" stopColor="#e87a26" />
            <stop offset="100%" stopColor="#3ed0e6" />
          </linearGradient>
        </defs>
        <path
          d="M-20 280 C 120 240, 220 360, 420 300"
          stroke="url(#newsRib)"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M-20 320 C 140 280, 260 400, 420 340"
          stroke="url(#newsRib)"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
      </svg>

      {/* floating decorative mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-10 rotate-[12deg] font-display text-[180px] font-bold leading-none text-cream/5 md:text-[260px]"
      >
        tcca
      </div>

      <div className="relative flex h-full flex-col p-8 md:p-12">
        {/* top row: tag + read time */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-tcca px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            Featured · {data.tag}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/60">
            {data.readMinutes} min read
          </span>
        </div>

        {/* title block — pushed toward middle-bottom */}
        <div className="mt-auto pt-16">
          <h3 className="font-display text-3xl font-bold !leading-[1.05] text-cream md:text-5xl">
            {data.title}
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-cream/75 md:text-base">
            {data.excerpt}
          </p>
        </div>

        {/* bottom meta */}
        <footer className="mt-8 flex items-center justify-between border-t border-cream/15 pt-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full brand-gradient text-xs font-bold text-white">
              T
            </span>
            <div className="text-sm">
              <p className="font-semibold text-cream">{data.author}</p>
              <p className="text-cream/60">{data.date}</p>
            </div>
          </div>
          <span className="font-display inline-flex h-11 items-center gap-2 rounded-full bg-cream px-5 text-sm font-semibold text-navy-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
            อ่านเต็ม
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-tcca text-white transition-transform duration-300 group-hover:rotate-45"
            >
              ↗
            </span>
          </span>
        </footer>
      </div>
    </article>
  );
}

/* ==========================================================
 * INSIGHT — data-forward card with large number
 * ========================================================== */

function InsightCard({ data }: { data: typeof insight }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-navy-600/10 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-orange-tcca/40">
      {/* mini-chart decoration */}
      <svg
        aria-hidden
        viewBox="0 0 200 80"
        className="absolute inset-x-0 bottom-0 h-24 w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="insightFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e87a26" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#e87a26" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 20 L120 30 L140 15 L160 22 L180 10 L200 15 L200 80 L0 80 Z"
          fill="url(#insightFill)"
        />
        <path
          d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 20 L120 30 L140 15 L160 22 L180 10 L200 15"
          fill="none"
          stroke="#e87a26"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative flex h-full flex-col p-7">
        <div className="flex items-start justify-between">
          <span className="inline-flex rounded-full bg-navy-700 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-cream">
            {data.tag}
          </span>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-orange-tcca"
          >
            <path d="M3 17 L 9 11 L 13 14 L 21 6" />
            <path d="M15 6 L 21 6 L 21 12" />
          </svg>
        </div>

        <div className="mt-4">
          <span
            className="font-display text-6xl font-bold leading-none tracking-tight text-navy-700 md:text-7xl"
            aria-label={data.bigNumber}
          >
            <span className="brand-gradient-text">{data.bigNumber}</span>
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-bold !leading-[1.1] text-navy-700">
          {data.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-orange-tcca">
          {data.subtitle}
        </p>

        <p className="mt-4 text-xs leading-relaxed text-navy-600/70">
          {data.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between pt-6 text-xs font-semibold">
          <span className="text-navy-600/60">{data.date}</span>
          <span className="font-display inline-flex items-center gap-1 text-navy-700 transition-transform group-hover:translate-x-0.5">
            ดูรายงาน
            <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </article>
  );
}

/* ==========================================================
 * COMMUNITY — sticker-style card
 * ========================================================== */

function CommunityCard({ data }: { data: typeof community }) {
  return (
    <article className="group relative isolate overflow-hidden rounded-[2rem] bg-orange-tcca text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* sticker-style diagonal stripes */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent 0 14px, rgba(255,255,255,0.8) 14px 15px)",
        }}
      />
      {/* speech bubble tail */}
      <svg
        aria-hidden
        viewBox="0 0 60 60"
        className="absolute -bottom-1 left-10 h-8 w-8 text-orange-tcca"
        fill="currentColor"
      >
        <polygon points="20,0 40,0 30,30" />
      </svg>

      {/* floating star */}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="#fff"
        className="absolute right-6 top-6 h-5 w-5 animate-float-slow"
      >
        <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
      </svg>

      <div className="relative flex h-full flex-col p-7">
        <span className="inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur">
          {data.tag}
        </span>

        <div className="mt-5">
          <p className="font-display text-[34px] font-bold !leading-[1.05] text-white md:text-[38px]">
            {data.title}
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">{data.highlight}</span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-3 rounded-sm bg-navy-700/40"
              />
            </span>
          </p>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-white/90">
          {data.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-[11px] font-semibold text-white/70">
            {data.date}
          </span>
          <span
            aria-hidden
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-tcca shadow-md transition-transform duration-300 group-hover:rotate-45"
          >
            ↗
          </span>
        </div>
      </div>
    </article>
  );
}
