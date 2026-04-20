"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import type { Bootstrap } from "@/lib/cms";

export function Navbar({ nav }: { nav: Bootstrap["navigation"] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = nav.primary_menu;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-cream/80 border-b border-navy-600/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Logo priority height={44} />

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="font-display rounded-full px-4 py-2 text-xl font-medium text-navy-700 transition-colors hover:bg-navy-600/5 hover:text-navy-800"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={nav.cta_href}
            className="font-display hidden rounded-full bg-navy-600 px-6 py-3 text-lg font-semibold text-cream shadow-sm transition-all hover:-translate-y-0.5 hover:bg-navy-700 hover:shadow-lg md:inline-flex"
          >
            {nav.cta_label}
            <span aria-hidden className="ml-2">→</span>
          </a>
          <button
            aria-label="เมนู"
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-600/15 text-navy-700 lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-full bg-current transition ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full bg-current transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-full bg-current transition ${
                  open
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "top-1/2 -translate-y-1/2"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-4 mb-3 rounded-3xl border border-navy-600/10 bg-cream p-3 shadow-lg">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display block rounded-2xl px-4 py-3 text-lg font-medium text-navy-700 hover:bg-navy-600/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta_href}
            onClick={() => setOpen(false)}
            className="font-display mt-2 block rounded-2xl bg-navy-600 px-4 py-3 text-center text-lg font-semibold text-cream"
          >
            {nav.cta_label} →
          </a>
        </nav>
      </div>
    </header>
  );
}
