import Link from "next/link";
import type { ReactNode } from "react";
import { AnimatedHeroTitle } from "@/components/AnimatedHeroTitle";
import { CampaignLogo } from "@/components/CampaignLogo";
import { Button } from "@/components/Button";
import { MilwaukeeRegionBackdrop, MilwaukeeRegionPhotoCredit } from "@/components/MilwaukeeRegionBackdrop";
import { brand } from "@/lib/config";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost" | "outlineLight";
};

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  actions?: HeroAction[];
  children?: ReactNode;
  /** Show campaign mark above the eyebrow (home). */
  showBrandLogo?: boolean;
  /** Full-bleed Milwaukee-region photo behind gradient (home). */
  milwaukeePhoto?: boolean;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  actions = [],
  children,
  showBrandLogo = false,
  milwaukeePhoto = false,
}: HeroProps) {
  const motionFx = showBrandLogo;
  const titleWordCount = title.trim().split(/\s+/).filter(Boolean).length;
  const subtitleDelayMs = Math.min(920, 260 + titleWordCount * 44);

  const photoCredit = milwaukeePhoto ? (
    <MilwaukeeRegionPhotoCredit className="mt-12 max-w-2xl lg:mt-10" />
  ) : null;

  const logoBlock = showBrandLogo ? (
    <Link
      href="/"
      className="inline-block shrink-0 rounded-md bg-transparent outline-offset-4 transition-transform duration-300 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
      aria-label={`${brand.nameWithTm} home`}
    >
      <CampaignLogo variant="hero" withLink={false} priority />
    </Link>
  ) : null;

  const brandStack =
    showBrandLogo || eyebrow ? (
      <div className="mb-6 flex flex-col items-start gap-3 sm:mb-7 sm:gap-4">
        {logoBlock}
        {eyebrow ? (
          <p
            className={`inline-flex w-fit rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-gold backdrop-blur-md sm:text-xs ${
              motionFx ? "hero-eyebrow-reveal" : ""
            }`}
          >
            {eyebrow}
          </p>
        ) : null}
      </div>
    ) : null;

  const mainColumn = (
    <>
      {motionFx ? (
        <AnimatedHeroTitle text={title} />
      ) : (
        <h1 className="max-w-3xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl sm:leading-[1.06] lg:text-[2.75rem] lg:leading-[1.05]">
          {title}
        </h1>
      )}
      <p
        className={`max-w-2xl text-base leading-relaxed text-white/92 drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)] sm:text-lg mt-5 ${motionFx ? "hero-subtitle-reveal" : ""}`}
        style={motionFx ? { animationDelay: `${subtitleDelayMs}ms` } : undefined}
      >
        {subtitle}
      </p>
      {actions.length > 0 ? (
        <div className={`mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${motionFx ? "hero-actions-reveal" : ""}`}>
          {actions.map((a) => (
            <Button key={a.href} href={a.href} variant={a.variant ?? "primary"}>
              {a.label}
            </Button>
          ))}
        </div>
      ) : null}
      {children}
      {photoCredit}
    </>
  );

  return (
    <section
      className={`relative overflow-hidden text-white ${
        milwaukeePhoto ? "min-h-[min(92vh,980px)] bg-brand-navy" : "bg-brand-navy"
      }`}
    >
      {milwaukeePhoto ? (
        <MilwaukeeRegionBackdrop priority />
      ) : (
        <>
          <div className="pointer-events-none absolute inset-0 hero-mesh opacity-45" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            aria-hidden
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, var(--color-brand-gold) 0%, transparent 45%),
            radial-gradient(circle at 80% 0%, var(--color-brand-gold-light) 0%, transparent 35%),
            linear-gradient(160deg, var(--color-brand-navy-dark) 0%, var(--color-brand-navy) 50%, #0d2847 100%)`,
            }}
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {brandStack}
        {mainColumn}
      </div>
    </section>
  );
}
