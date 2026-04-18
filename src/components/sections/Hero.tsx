import { HeroVisual } from "@/components/HeroVisual";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      {/* background: dot grid + gradient blobs */}
      <div aria-hidden className="absolute inset-0 dot-grid opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-40 brand-gradient animate-float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-30 bg-orange-tcca animate-float"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1.15fr_1fr] md:px-8">
        {/* LEFT: copy */}
        <div className="flex flex-col justify-center">
          <h1 className="text-balance font-display text-5xl font-bold leading-[0.95] tracking-tight text-navy-700 md:text-7xl lg:text-[88px]">
            บ้านของ
            <br />
            <span className="relative inline-block">
              <span className="brand-gradient-text">
                คอนเทนต์<wbr />ครีเอเตอร์
              </span>
              <svg
                aria-hidden
                viewBox="0 0 400 20"
                className="absolute -bottom-2 left-0 h-3 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 12 C 80 2, 160 20, 240 8 S 380 16, 398 6"
                  fill="none"
                  stroke="#e87a26"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            ของประเทศไทย
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-navy-600/80 md:text-xl">
            <strong className="font-semibold text-navy-700">
              Thailand Content Creator Associaton
            </strong>{" "}
            รวมพลังครีเอเตอร์ อินฟลูเอนเซอร์ และนักขายออนไลน์
            เพื่อยกระดับมาตรฐานวิชาชีพ สร้างโอกาส และขับเคลื่อน Creator Economy
            ของไทยให้เติบโตอย่างสร้างสรรค์และยั่งยืน
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              className="font-display group inline-flex h-16 items-center gap-3 rounded-full bg-navy-700 px-8 text-xl font-semibold text-cream shadow-lg shadow-navy-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-navy-800 hover:shadow-xl"
            >
              ร่วมเป็นสมาชิก
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-tcca text-white transition-transform duration-300 group-hover:rotate-45"
              >
                ↗
              </span>
            </a>
            <a
              href="#about"
              className="font-display group inline-flex h-16 items-center gap-3 rounded-full border border-navy-600/20 bg-white/70 px-8 text-xl font-semibold text-navy-700 shadow-lg shadow-navy-700/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-navy-600/40 hover:bg-white hover:shadow-xl"
            >
              รู้จักเรามากขึ้น
              <span
                aria-hidden
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-navy-600/30 bg-white text-navy-700 transition-transform duration-300 group-hover:rotate-45"
              >
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT: creative vector collage */}
        <div className="relative hidden md:block">
          <HeroVisual />
        </div>
      </div>

      {/* scrolling tag line */}
      <div className="relative mt-20 overflow-hidden border-y border-navy-600/10 bg-white/50 py-5 backdrop-blur">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {[
                "CREATE",
                "CONNECT",
                "COLLABORATE",
                "CULTIVATE",
                "COMMUNITY",
                "CREATIVITY",
                "CREDIBILITY",
              ].map((w) => (
                <span
                  key={w + i}
                  className="flex items-center gap-12 font-display text-4xl font-semibold tracking-tight text-navy-700/70 md:text-5xl"
                >
                  {w}
                  <span aria-hidden className="text-orange-tcca">
                    ✦
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
