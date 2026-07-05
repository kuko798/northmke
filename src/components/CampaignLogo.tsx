import Image from "next/image";
import Link from "next/link";
import { brand, logo } from "@/lib/config";

type CampaignLogoProps = {
  variant?: "nav" | "footer" | "hero";
  className?: string;
  /** When false, render image only (e.g. hero wrapped in custom link). */
  withLink?: boolean;
  priority?: boolean;
};

const heightClass = {
  nav: "h-10 w-auto sm:h-11",
  footer: "h-12 w-auto sm:h-14",
  hero: "h-28 w-auto sm:h-32 md:h-36",
} as const;

const sizes = {
  nav: "(max-width: 768px) 200px, 240px",
  footer: "260px",
  hero: "(max-width: 640px) 90vw, 400px",
} as const;

const plateClass = {
  nav: "rounded-xl border border-brand-navy/10 bg-white/95 p-1.5 shadow-md shadow-black/10 backdrop-blur-sm",
  footer:
    "rounded-2xl border border-brand-navy/10 bg-white/95 p-2 shadow-lg shadow-black/15 backdrop-blur-sm",
  hero:
    "hero-logo-board rounded-[2.5rem] border border-white/40 bg-white/15 p-3 shadow-2xl shadow-black/45 backdrop-blur-xl sm:p-4",
} as const;

const shadowClass = {
  nav: "drop-shadow-[0_2px_8px_rgba(10,31,60,0.12)]",
  footer: "drop-shadow-[0_2px_10px_rgba(10,31,60,0.15)]",
  hero: "drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)] drop-shadow-[0_0_32px_rgba(255,255,255,0.35)]",
} as const;

export function CampaignLogo({
  variant = "nav",
  className = "",
  withLink,
  priority = false,
}: CampaignLogoProps) {
  const useLink = withLink ?? variant !== "hero";

  const inner = (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${plateClass[variant]} isolate`}
    >
      <Image
        src={logo.src}
        alt={`${brand.name} — North Milwaukee platform logo`}
        width={logo.width}
        height={logo.height}
        priority={priority}
        sizes={sizes[variant]}
        className={`bg-transparent object-contain object-center mix-blend-normal ${heightClass[variant]} ${shadowClass[variant]} ${className}`.trim()}
      />
    </span>
  );

  if (!useLink) {
    return inner;
  }

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center rounded-md bg-transparent outline-offset-4 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-gold"
      aria-label={`${brand.nameWithTm} home`}
    >
      {inner}
    </Link>
  );
}
