"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CampaignLogo } from "@/components/CampaignLogo";
import { Button } from "@/components/Button";
import { navigation } from "@/lib/config";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-brand-navy transition-[box-shadow] duration-300 ${
        scrolled ? "shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)]" : "shadow-none"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:translate-y-0 sm:px-6 lg:px-8 ${
          scrolled ? "translate-y-0" : "translate-y-2"
        }`}
      >
        <CampaignLogo variant="nav" priority />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
              <span
                className="pointer-events-none absolute inset-x-2 bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-brand-gold transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                aria-hidden="true"
              />
            </Link>
          ))}
          <Button href="/donate" variant="primary" className="ml-1 py-2.5 text-xs uppercase">
            Donate
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button href="/donate" variant="primary" className="px-3 py-2.5 text-xs uppercase">
            Donate
          </Button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 bg-brand-navy md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col px-4 py-3" aria-label="Mobile primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-medium text-white/95 transition-colors hover:bg-white/10 hover:text-brand-gold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
