const pillars = [
  {
    n: "01",
    title: "มาตรฐานวิชาชีพ",
    desc: "พัฒนากรอบจรรยาบรรณ มาตรฐานการทำงาน และแนวปฏิบัติที่ดีให้วงการคอนเทนต์ไทย",
    color: "from-[#ff5a8a] to-[#e87a26]",
  },
  {
    n: "02",
    title: "พัฒนาทักษะ",
    desc: "Workshop, Masterclass และ Mentorship จากผู้เชี่ยวชาญในอุตสาหกรรม ตลอดทั้งปี",
    color: "from-[#e87a26] to-[#f9e24a]",
  },
  {
    n: "03",
    title: "โอกาสทางธุรกิจ",
    desc: "จับคู่ครีเอเตอร์กับแบรนด์ แพลตฟอร์ม และเอเจนซี่อย่างเป็นธรรมและโปร่งใส",
    color: "from-[#f9e24a] to-[#b2ea3a]",
  },
  {
    n: "04",
    title: "คุ้มครองสิทธิ์",
    desc: "ให้คำปรึกษาด้านสัญญา ลิขสิทธิ์ ภาษี และความปลอดภัยบนโลกออนไลน์",
    color: "from-[#b2ea3a] to-[#3ed0e6]",
  },
  {
    n: "05",
    title: "Research & Insight",
    desc: "จัดทำรายงานอุตสาหกรรมครีเอเตอร์ไทย ข้อมูลที่ใช้ได้จริงสำหรับตัดสินใจทางธุรกิจ",
    color: "from-[#3ed0e6] to-[#8a5cff]",
  },
  {
    n: "06",
    title: "เชื่อมภาครัฐ-เอกชน",
    desc: "เป็นกระบอกเสียงและสะพานเชื่อม เพื่อผลักดันนโยบายที่เอื้อต่อการเติบโตของวงการ",
    color: "from-[#8a5cff] to-[#ff5a8a]",
  },
];

export function Pillars() {
  return (
    <section
      id="pillars"
      className="relative isolate overflow-hidden bg-navy-700 py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl opacity-20 brand-gradient"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-light">
              Our Pillars
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-cream md:text-6xl">
              6 พันธกิจหลัก
              <br />
              ที่ขับเคลื่อน
              <span className="text-orange-tcca"> วงการครีเอเตอร์ไทย</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-cream/70">
            TCCA ทำงานตลอดทั้งปีเพื่อให้ครีเอเตอร์ไทยมีมาตรฐาน โอกาส
            และเครื่องมือที่ดีที่สุดในการเติบโต
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.n}
              className="group relative overflow-hidden rounded-3xl border border-cream/10 bg-navy-600/40 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-tcca/40 hover:bg-navy-600/70"
            >
              <div
                aria-hidden
                className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60`}
              />
              <span className="font-display text-xs font-bold uppercase tracking-[0.28em] text-cream/50">
                Pillar {p.n}
              </span>
              <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-cream md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">
                {p.desc}
              </p>
              <div
                aria-hidden
                className="mt-6 h-0.5 w-10 bg-orange-tcca transition-all duration-300 group-hover:w-24"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
