import Image from "next/image";
import { heroPhoto } from "@/lib/config";

/** Full-bleed region photo + overlays for hero sections. */
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
          className="object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-brand-navy/90 via-brand-navy/72 to-brand-navy/92"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_100%_65%_at_50%_-5%,rgba(201,162,39,0.16),transparent_58%)]"
        aria-hidden
      />
    </>
  );
}

export function MilwaukeeRegionPhotoCredit({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[11px] leading-relaxed text-white/55 ${className}`.trim()}>
      {heroPhoto.caption}
    </p>
  );
}
