import type { ReactNode } from "react";
import { MilwaukeeRegionBackdrop, MilwaukeeRegionPhotoCredit } from "@/components/MilwaukeeRegionBackdrop";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Optional content below the description (e.g. disclaimer line). */
  extra?: ReactNode;
  /**
   * Same Milwaukee-region photo treatment as the home hero (Unsplash — attribution rendered below).
   * @default true
   */
  regionPhoto?: boolean;
};

/**
 * Shared inner-page hero: Milwaukee photo + overlays (matches home); typography only — logo stays in the nav.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  extra,
  regionPhoto = true,
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden border-b border-white/10 bg-brand-navy py-12 text-white sm:py-16 ${
        regionPhoto ? "min-h-[min(52vh,580px)]" : ""
      }`}
    >
      {regionPhoto ? <MilwaukeeRegionBackdrop priority /> : null}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-serif text-3xl font-bold drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]">
            {description}
          </p>
        ) : null}
        {extra}
        {regionPhoto ? <MilwaukeeRegionPhotoCredit className="mt-8 max-w-2xl sm:mt-10" /> : null}
      </div>
    </section>
  );
}
