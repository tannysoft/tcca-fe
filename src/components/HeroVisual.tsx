export function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full">
      {/* big navy card */}
      <div className="absolute inset-x-0 top-0 h-[82%] overflow-hidden rounded-[2.5rem] bg-navy-700 shadow-2xl">
        <div className="relative h-full w-full">
          {/* ambient background */}
          <div aria-hidden className="absolute inset-0 dot-grid-light opacity-40" />
          <div
            aria-hidden
            className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-tcca/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full brand-gradient opacity-25 blur-3xl"
          />
          {/* dashed ring accents */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            className="absolute right-6 top-6 h-24 w-24 text-cream/20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          >
            <circle cx="50" cy="50" r="45" />
          </svg>
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            className="absolute left-4 bottom-[34%] h-16 w-16 text-cream/15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <circle cx="50" cy="50" r="45" strokeDasharray="2 6" />
          </svg>

          {/* === camera : main hero object === */}
          <div
            className="absolute left-1/2 top-[22%] w-[58%] -translate-x-1/2 animate-float-slow"
            style={{ filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.4))" }}
          >
            <Camera />
          </div>

          {/* === lightbulb === */}
          <div className="absolute right-6 top-10 w-20 -rotate-6 animate-float">
            <Lightbulb />
          </div>

          {/* === pencil === */}
          <div className="absolute left-6 top-14 w-24 -rotate-[28deg]">
            <Pencil />
          </div>

          {/* === paper sheet === */}
          <div className="absolute right-10 top-[44%] w-16 rotate-6 animate-float-slow">
            <Paper />
          </div>

          {/* === microphone === */}
          <div className="absolute left-4 top-[42%] w-14 rotate-6 animate-float">
            <Microphone />
          </div>

          {/* === play badge === */}
          <div className="absolute bottom-[30%] right-4 w-14 animate-float-slow">
            <PlayBadge />
          </div>

          {/* === heart sticker === */}
          <div className="absolute bottom-[34%] left-10 w-10 animate-float">
            <HeartSticker />
          </div>

          {/* === sparkles === */}
          <Sparkle className="absolute right-24 top-[32%] h-4 w-4 text-accent-yellow" />
          <Sparkle className="absolute left-[30%] top-[18%] h-3 w-3 text-orange-tcca" />
          <Sparkle className="absolute right-[36%] top-[50%] h-3 w-3 text-accent-cyan" />

          {/* MANIFESTO caption */}
          <div className="absolute inset-x-8 bottom-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-orange-light">
              Manifesto
            </p>
            <p className="mt-2 font-display text-xl font-semibold !leading-[1.15] text-cream md:text-2xl">
              &ldquo;ทุกคนคือครีเอเตอร์ —
              <br className="hidden md:block" />
              และทุกเสียงมีพื้นที่ให้เติบโตไปด้วยกัน&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* floating event card — press conference */}
      <a
        href="#events"
        className="group absolute -bottom-6 left-6 right-6 overflow-hidden rounded-3xl bg-cream shadow-2xl shadow-navy-700/20 ring-1 ring-navy-600/10 transition-transform duration-300 hover:-translate-y-1"
      >
        <div aria-hidden className="h-1 brand-gradient" />
        <div className="flex items-stretch">
          {/* date tile */}
          <div className="relative flex w-24 shrink-0 flex-col items-center justify-center bg-navy-700 text-cream">
            <div
              aria-hidden
              className="absolute inset-0 dot-grid-light opacity-30"
            />
            <div
              aria-hidden
              className="absolute -right-2 top-1/2 hidden -translate-y-1/2 md:block"
            >
              {/* ticket perforations */}
              <div className="h-4 w-4 rounded-full bg-cream" />
            </div>
            <div
              aria-hidden
              className="absolute -left-2 top-1/2 hidden -translate-y-1/2 md:block"
            >
              <div className="h-4 w-4 rounded-full bg-navy-700" />
            </div>
            <span className="font-display text-3xl font-bold leading-none">
              27
            </span>
            <span className="mt-1 text-[10px] font-bold tracking-[0.24em] text-orange-light">
              APR 26
            </span>
          </div>

          {/* event info */}
          <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-tcca opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-tcca" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-tcca">
                  Upcoming Event
                </span>
              </div>
              <p className="mt-1 font-display text-base font-bold leading-tight text-navy-700">
                Press Conference · เปิดตัวสมาคม
              </p>
              <p className="mt-0.5 text-[11px] text-navy-600/70">
                13:00 · SCBX Next Tech, Siam Paragon
              </p>
            </div>
            <span
              aria-hidden
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-tcca text-white shadow-md transition-transform duration-300 group-hover:rotate-45"
            >
              ↗
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

/* ===================== SVG icons ===================== */

function Camera() {
  return (
    <svg viewBox="0 0 200 160" className="h-auto w-full">
      {/* back strap */}
      <path
        d="M36 52 L58 38 L96 38 L114 52 Z"
        fill="#0b1f38"
        stroke="#fff"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
      {/* body */}
      <rect
        x="14"
        y="48"
        width="172"
        height="96"
        rx="14"
        fill="#e87a26"
      />
      {/* top stripe */}
      <rect x="14" y="48" width="172" height="14" fill="#d2631b" />
      {/* viewfinder */}
      <rect x="160" y="52" width="18" height="8" rx="2" fill="#fff8ef" />
      {/* flash */}
      <rect x="26" y="54" width="16" height="5" rx="1.5" fill="#fff8ef" />
      {/* lens */}
      <circle cx="100" cy="104" r="36" fill="#04101d" />
      <circle cx="100" cy="104" r="30" fill="#081729" stroke="#fff" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="100" cy="104" r="22" fill="url(#lensGrad)" />
      <circle cx="100" cy="104" r="14" fill="#0b1f38" />
      {/* lens highlight */}
      <ellipse cx="92" cy="96" rx="6" ry="3" fill="#fff" fillOpacity="0.55" />
      {/* shutter button */}
      <circle cx="44" cy="70" r="5" fill="#04101d" />
      {/* record light */}
      <circle cx="168" cy="120" r="4" fill="#ff5a8a">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
      <defs>
        <radialGradient id="lensGrad" cx="0.3" cy="0.3">
          <stop offset="0%" stopColor="#3ed0e6" />
          <stop offset="55%" stopColor="#8a5cff" />
          <stop offset="100%" stopColor="#04101d" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function Lightbulb() {
  return (
    <svg viewBox="0 0 80 100" className="h-auto w-full">
      {/* rays */}
      <g stroke="#f9e24a" strokeWidth="3" strokeLinecap="round">
        <line x1="40" y1="4" x2="40" y2="14" />
        <line x1="14" y1="14" x2="20" y2="22" />
        <line x1="66" y1="14" x2="60" y2="22" />
        <line x1="4" y1="40" x2="14" y2="40" />
        <line x1="76" y1="40" x2="66" y2="40" />
      </g>
      {/* bulb glass */}
      <path
        d="M40 18 C 20 18, 12 34, 18 52 C 22 64, 30 66, 30 74 L 50 74 C 50 66, 58 64, 62 52 C 68 34, 60 18, 40 18 Z"
        fill="#f9e24a"
      />
      <path
        d="M34 30 C 28 34, 26 42, 28 50"
        fill="none"
        stroke="#fff8ef"
        strokeOpacity="0.7"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* base */}
      <rect x="28" y="76" width="24" height="8" rx="1" fill="#0b1f38" />
      <rect x="30" y="86" width="20" height="5" rx="1" fill="#0b1f38" />
      <rect x="32" y="93" width="16" height="4" rx="2" fill="#0b1f38" />
    </svg>
  );
}

function Pencil() {
  return (
    <svg viewBox="0 0 200 40" className="h-auto w-full">
      {/* tip */}
      <polygon points="0,20 14,10 14,30" fill="#0b1f38" />
      {/* wood */}
      <polygon points="14,10 26,4 26,36 14,30" fill="#fff8ef" />
      {/* body */}
      <rect x="26" y="4" width="140" height="32" fill="#e87a26" />
      {/* stripes */}
      <rect x="156" y="4" width="10" height="32" fill="#d2631b" />
      {/* ferrule */}
      <rect x="166" y="4" width="14" height="32" fill="#3ed0e6" />
      <rect x="166" y="4" width="14" height="6" fill="#2aa8bc" />
      <rect x="166" y="30" width="14" height="6" fill="#2aa8bc" />
      {/* eraser */}
      <rect x="180" y="6" width="18" height="28" rx="3" fill="#ff5a8a" />
    </svg>
  );
}

function Paper() {
  return (
    <svg viewBox="0 0 80 100" className="h-auto w-full">
      <rect
        x="4"
        y="4"
        width="72"
        height="92"
        rx="4"
        fill="#fff8ef"
        stroke="#0b1f38"
        strokeWidth="2"
      />
      {/* folded corner */}
      <path d="M60 4 L76 4 L76 20 Z" fill="#fdecd8" stroke="#0b1f38" strokeWidth="2" />
      {/* lines */}
      <g stroke="#0b1f38" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="32" x2="68" y2="32" />
        <line x1="12" y1="42" x2="58" y2="42" />
        <line x1="12" y1="52" x2="64" y2="52" />
        <line x1="12" y1="62" x2="52" y2="62" />
        <line x1="12" y1="72" x2="60" y2="72" />
      </g>
      {/* orange accent */}
      <rect x="12" y="82" width="20" height="6" rx="1" fill="#e87a26" />
    </svg>
  );
}

function Microphone() {
  return (
    <svg viewBox="0 0 60 110" className="h-auto w-full">
      {/* head */}
      <rect x="16" y="6" width="28" height="54" rx="14" fill="#fff8ef" />
      <g stroke="#0b1f38" strokeWidth="1.8" strokeLinecap="round">
        <line x1="22" y1="18" x2="38" y2="18" />
        <line x1="22" y1="28" x2="38" y2="28" />
        <line x1="22" y1="38" x2="38" y2="38" />
        <line x1="22" y1="48" x2="38" y2="48" />
      </g>
      {/* body */}
      <path
        d="M8 56 C 8 80, 52 80, 52 56"
        stroke="#e87a26"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* stand */}
      <line x1="30" y1="72" x2="30" y2="92" stroke="#0b1f38" strokeWidth="4" strokeLinecap="round" />
      <line x1="14" y1="98" x2="46" y2="98" stroke="#0b1f38" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function PlayBadge() {
  return (
    <svg viewBox="0 0 60 60" className="h-auto w-full">
      <circle cx="30" cy="30" r="28" fill="#ff5a8a" stroke="#fff8ef" strokeWidth="3" />
      <polygon points="23,18 23,42 44,30" fill="#fff8ef" />
    </svg>
  );
}

function HeartSticker() {
  return (
    <svg viewBox="0 0 60 56" className="h-auto w-full">
      <path
        d="M30 52 C 16 42, 4 30, 4 18 C 4 10, 10 4, 18 4 C 24 4, 28 8, 30 13 C 32 8, 36 4, 42 4 C 50 4, 56 10, 56 18 C 56 30, 44 42, 30 52 Z"
        fill="#ff5a8a"
        stroke="#fff8ef"
        strokeWidth="3"
      />
    </svg>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
    </svg>
  );
}
