import { Reveal } from "@/components/Reveal";
import type { StrategicArgument } from "@/lib/content";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-brand-black/80">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RippleChain({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {items.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-3 py-1.5 text-xs font-medium text-brand-navy">
            {step}
          </span>
          {i < items.length - 1 ? (
            <span className="text-brand-gold" aria-hidden="true">
              →
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

function ArgumentCard({ argument, index }: { argument: StrategicArgument; index: number }) {
  return (
    <Reveal delayMs={index * 80}>
      <article
        id={`strategic-argument-${argument.number}`}
        className="scroll-mt-28 rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm sm:p-8"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
          Argument {argument.number}
        </p>
        <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-brand-navy sm:text-2xl">
          {argument.title}
        </h3>

        <div className="mt-5 space-y-4">
          {argument.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="text-sm leading-relaxed text-brand-black/80 sm:text-base">
              {p}
            </p>
          ))}
        </div>

        {argument.items ? (
          <div className="mt-5 rounded-xl border border-brand-navy/10 bg-surface p-5">
            <BulletList items={argument.items} />
          </div>
        ) : null}

        {argument.rippleEffect ? (
          <div className="mt-5">
            <p className="text-sm font-semibold text-brand-navy">
              Strategically investing in this group creates a ripple effect:
            </p>
            <RippleChain items={argument.rippleEffect} />
          </div>
        ) : null}

        {argument.subsections?.map((sub) => (
          <div key={sub.title} className="mt-5 rounded-xl border border-brand-navy/10 bg-surface p-5">
            <h4 className="font-serif text-base font-bold text-brand-navy">{sub.title}</h4>
            {sub.body ? <p className="mt-2 text-sm leading-relaxed text-brand-black/80">{sub.body}</p> : null}
            {sub.items ? <BulletList items={sub.items} /> : null}
          </div>
        ))}

        {argument.closing ? (
          <p className="mt-5 border-l-2 border-brand-gold pl-4 text-sm font-medium leading-relaxed text-brand-navy sm:text-base">
            {argument.closing}
          </p>
        ) : null}
      </article>
    </Reveal>
  );
}

type StrategicArgumentsSectionProps = {
  title: string;
  subtitle: string;
  districtTagline: string;
  arguments: readonly StrategicArgument[];
};

export function StrategicArgumentsSection({
  title,
  subtitle,
  districtTagline,
  arguments: args,
}: StrategicArgumentsSectionProps) {
  return (
    <section id="strategic-arguments" className="scroll-mt-28 border-t border-brand-navy/10 bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">{subtitle}</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm font-medium text-brand-black/60">{districtTagline}</p>
        </Reveal>

        <div className="mt-10 space-y-6">
          {args.map((arg, i) => (
            <ArgumentCard key={arg.number} argument={arg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
