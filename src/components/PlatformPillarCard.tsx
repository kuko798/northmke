import Link from "next/link";
import type { Pillar } from "@/lib/content";

type PlatformPillarCardProps = {
  pillar: Pillar;
  index: number;
};

export function PlatformPillarCard({ pillar, index }: PlatformPillarCardProps) {
  const previewItems = pillar.priorities?.slice(0, 4) ?? [pillar.description];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/40 hover:shadow-md">
      <div className="flex items-start gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-2xl"
          aria-hidden="true"
        >
          {pillar.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-black/45">
            Pillar {index + 1}
          </p>
          <h2 className="mt-1 font-serif text-lg font-bold leading-snug text-brand-navy">{pillar.title}</h2>
          <p className="mt-1.5 text-sm font-medium text-brand-gold">{pillar.tagline}</p>
        </div>
      </div>

      <ul className="mt-5 flex-1 space-y-2 text-sm text-brand-black/75">
        {previewItems.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`#${pillar.id}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-gold"
      >
        Read full pillar
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
