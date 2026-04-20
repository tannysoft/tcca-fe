import Link from "next/link";
import { Logo } from "./Logo";
import type { Bootstrap } from "@/lib/cms";

const iconClass = "h-[18px] w-[18px]";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
      <path d="M13.5 22v-8h2.7l.4-3.2H13.5V8.7c0-.9.3-1.5 1.6-1.5h1.7V4.3c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.5H7.7V14h2.7v8h3.1z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconClass} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
      <path d="M16.5 2h-2.8v13.1c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9c0-1.6 1.3-2.9 2.9-2.9.3 0 .6 0 .9.1V9.4c-.3 0-.6-.1-.9-.1-3.2 0-5.8 2.6-5.8 5.8S7.6 21 10.8 21s5.8-2.6 5.8-5.8V8.5c1.1.7 2.4 1.2 3.8 1.2V6.9c-2.3 0-4-1.9-4-4.3V2z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
      <path d="M23 7.3c-.3-1-1-1.8-2-2C19.2 5 12 5 12 5s-7.2 0-9 .3c-1 .3-1.8 1-2 2-.3 1.8-.3 4.7-.3 4.7s0 2.9.3 4.7c.3 1 1 1.8 2 2 1.8.3 9 .3 9 .3s7.2 0 9-.3c1-.3 1.8-1 2-2 .3-1.8.3-4.7.3-4.7s0-2.9-.3-4.7zM9.8 15.4V8.6l6 3.4-6 3.4z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
      <path d="M17.9 3h3.4l-7.4 8.5L22.6 21H16l-5-6.6L5.2 21H1.8l7.9-9L1.2 3h6.7l4.6 6.1L17.9 3zm-1.2 16h1.9L7.4 5H5.4l11.3 14z" />
    </svg>
  );
}
function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
      <path d="M12 2C6.5 2 2 5.6 2 10c0 4 3.6 7.3 8.4 7.9.3.1.8.2.9.5.1.3.1.7 0 .9 0 0-.1.7-.2 1-.1.3-.2 1.2 1 .7 1.2-.5 6.6-3.9 9-6.7C22.4 12.7 23 11.4 23 10c0-4.4-5-8-11-8zM7.3 13H5.4c-.3 0-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.5s.5.2.5.5V12h1.4c.3 0 .5.2.5.5s-.2.5-.5.5zm1.9-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.5s.5.2.5.5v3.7zm4.7 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-1.9-2.6v2.3c0 .3-.2.5-.5.5s-.5-.2-.5-.5V8.8c0-.2.1-.4.3-.5.1 0 .1-.1.2-.1.1 0 .3.1.4.2l1.9 2.6V8.8c0-.3.2-.5.5-.5s.5.2.5.5v3.7zm3.1-2.3c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9H17c.3 0 .5.2.5.5s-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5V8.8c0-.3.2-.5.5-.5H17c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9H17z" />
    </svg>
  );
}

const ICONS: Record<string, () => React.JSX.Element> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YouTubeIcon,
  x: XIcon,
  line: LineIcon,
};

export function Footer({
  identity,
  footer,
}: {
  identity: Bootstrap["identity"];
  footer: Bootstrap["footer"];
}) {
  const year = new Date().getFullYear();
  const copyright = (footer.copyright || "").replace("{year}", String(year));
  const socials = identity.socials.length
    ? identity.socials
    : [
        { platform: "facebook", label: "Facebook", url: "#" },
        { platform: "instagram", label: "Instagram", url: "#" },
        { platform: "tiktok", label: "TikTok", url: "#" },
        { platform: "youtube", label: "YouTube", url: "#" },
        { platform: "x", label: "X", url: "#" },
        { platform: "line", label: "LINE", url: "#" },
      ];

  return (
    <footer className="relative isolate overflow-hidden bg-navy-700 text-cream/90">
      <div aria-hidden className="absolute inset-0 dot-grid-light opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl opacity-30 brand-gradient"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" height={56} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              {footer.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => {
                const Icon = ICONS[s.platform] ?? FacebookIcon;
                return (
                  <a
                    key={s.platform + s.url}
                    href={s.url || "#"}
                    aria-label={s.label}
                    title={s.label}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition hover:border-orange-tcca hover:bg-orange-tcca hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-light">
                {col.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {col.items.map((it) => (
                  <li key={it.label + it.href}>
                    <Link
                      href={it.href}
                      className="text-cream/70 transition hover:text-cream"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/60 md:flex-row md:items-center">
          <p>{copyright}</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-orange-tcca" />
            {footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
