import Image from "next/image";
import { heroPhoto } from "@/lib/config";

/** Full-bleed region photo + overlays (Unsplash — see `HeroPhotoCredit`). */
export function MilwaukeeRegionBackdrop({ priority = false }: { priority?: boolean }) {
  return (
    <>
      <div className="absolute inset-0 z-0">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-[center_32%] sm:object-[center_40%]"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-navy/92 via-brand-navy/78 to-brand-navy/93"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_100%_65%_at_50%_-5%,rgba(201,162,39,0.18),transparent_58%)]"
        aria-hidden
      />
    </>
  );
}

export function MilwaukeeRegionPhotoCredit({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[11px] leading-relaxed text-white/55 ${className}`.trim()}>
      Photo:{" "}
      <a
        href={heroPhoto.photoPageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/75 underline decoration-white/25 underline-offset-2 transition-colors hover:text-white"
      >
        Milwaukee skyline and Lake Michigan
      </a>{" "}
      by{" "}
      <a
        href={heroPhoto.photographerUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/75 underline decoration-white/25 underline-offset-2 transition-colors hover:text-white"
      >
        {heroPhoto.photographer}
      </a>{" "}
      ·{" "}
      <a
        href={heroPhoto.licenseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/75 underline decoration-white/25 underline-offset-2 transition-colors hover:text-white"
      >
        {heroPhoto.licenseName}
      </a>
    </p>
  );
}
