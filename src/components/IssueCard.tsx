import type { ReactNode } from "react";

type IssueCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function IssueCard({ title, description, icon }: IssueCardProps) {
  return (
    <article className="group relative flex h-full cursor-default flex-col overflow-hidden rounded-2xl border border-white/70 bg-white/75 p-6 shadow-sm ring-1 ring-brand-navy/[0.06] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/35 hover:bg-white/90 hover:shadow-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        {icon ? (
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-navy text-brand-gold shadow-inner transition-[transform,colors] duration-300 group-hover:scale-105 group-hover:bg-brand-gold group-hover:text-brand-navy"
            aria-hidden="true"
          >
            {icon}
          </div>
        ) : null}
        <div>
          <h2 className="font-serif text-lg font-bold text-brand-navy">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-black/75">{description}</p>
        </div>
      </div>
      <div className="mt-4 h-1 w-12 rounded-full bg-brand-gold transition-all duration-300 group-hover:w-24" />
    </article>
  );
}
