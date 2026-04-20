import fs from "node:fs";
import path from "node:path";
import type { PartnersCms } from "@/lib/cms";
import { fbPartners } from "@/lib/cms-fallback";

const LOGO_DIR = path.join(process.cwd(), "public", "partners");
const EXTS = ["svg", "png", "webp", "jpg"] as const;

function findLocalLogo(slug: string): string | null {
  for (const ext of EXTS) {
    const abs = path.join(LOGO_DIR, `${slug}.${ext}`);
    if (fs.existsSync(abs)) return `/partners/${slug}.${ext}`;
  }
  return null;
}

export function Partners({ data }: { data?: PartnersCms }) {
  const d = data ?? fbPartners;
  const list = d.items.length ? d.items : fbPartners.items;

  const resolved = list.map((p) => ({
    ...p,
    logoUrl: p.logo?.url ?? findLocalLogo(p.slug),
  }));

  return (
    <section id="partners" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
            {d.section.eyebrow}
          </p>
          <h2
            className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-navy-700 md:text-5xl"
            dangerouslySetInnerHTML={{ __html: d.section.title }}
          />
        </div>

        <div className="relative mt-14 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent"
          />

          <div className="flex w-max animate-marquee-slow gap-3">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-3" aria-hidden={i === 1}>
                {resolved.map((p) => (
                  <PartnerCard key={p.slug + i} partner={p} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ResolvedPartner = PartnersCms["items"][number] & { logoUrl: string | null };

function PartnerCard({ partner }: { partner: ResolvedPartner }) {
  const href = partner.website || undefined;
  const content = (
    <div className="group flex h-24 min-w-[220px] items-center justify-center overflow-visible rounded-3xl border border-navy-600/10 bg-white px-8 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-tcca/40 hover:shadow-md">
      {partner.logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={partner.logoUrl}
          alt={partner.name}
          className="max-h-14 w-auto max-w-[200px] object-contain opacity-85 transition-opacity group-hover:opacity-100"
        />
      ) : (
        <Wordmark name={partner.name} accent={partner.accent ?? "navy"} />
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={partner.name}>
        {content}
      </a>
    );
  }
  return content;
}

function Wordmark({
  name,
  accent,
}: {
  name: string;
  accent: "navy" | "orange" | "gradient";
}) {
  const base =
    "font-display text-2xl font-bold tracking-tight !leading-[1.15] whitespace-nowrap";

  if (accent === "gradient") {
    return (
      <span className={base}>
        <span className="brand-gradient-text">{name}</span>
      </span>
    );
  }

  const color = accent === "orange" ? "text-orange-tcca" : "text-navy-700";

  return <span className={`${base} ${color}`}>{name}</span>;
}
