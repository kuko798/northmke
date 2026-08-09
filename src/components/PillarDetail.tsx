type DetailBlock = {
  title: string;
  intro?: string;
  items?: readonly string[];
  body?: string;
};

type PillarDetailProps = {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  vision?: string;
  blocks: readonly DetailBlock[];
  index: number;
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-brand-black/80">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RoiChain({ text }: { text: string }) {
  const steps = text.split("→").map((s) => s.trim());
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-2">
          <span className="rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-3 py-1.5 text-xs font-medium text-brand-navy">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span className="text-brand-gold" aria-hidden="true">
              →
            </span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

export function PillarDetail({ id, emoji, title, tagline, vision, blocks, index }: PillarDetailProps) {
  const isAlt = index % 2 === 1;

  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t border-brand-navy/10 py-14 sm:py-16 ${isAlt ? "bg-surface" : "bg-white"}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-black/45">
            Strategic pillar {index + 1}
          </p>
          <p className="mt-3 text-3xl" aria-hidden="true">
            {emoji}
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-brand-navy sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-3 text-base font-medium text-brand-gold">{tagline}</p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {blocks.map((block) => {
            const isRoi = block.title.toLowerCase().includes("roi framework");
            const isWide = block.body && block.body.length > 280;

            return (
              <article
                key={block.title}
                className={`rounded-xl border border-brand-navy/10 bg-white p-6 shadow-sm ${
                  isWide || isRoi ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="font-serif text-lg font-bold text-brand-navy">{block.title}</h3>
                {block.intro ? <p className="mt-2 text-sm leading-relaxed text-brand-black/75">{block.intro}</p> : null}
                {block.body && !isRoi ? (
                  <p className="mt-3 text-sm leading-relaxed text-brand-black/80">{block.body}</p>
                ) : null}
                {block.body && isRoi ? <RoiChain text={block.body} /> : null}
                {block.items ? <BulletList items={block.items} /> : null}
              </article>
            );
          })}
        </div>

        {vision ? (
          <div className="mt-8 rounded-xl border border-brand-navy/15 bg-brand-navy p-6 sm:p-8">
            <h3 className="font-serif text-lg font-bold text-brand-gold">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">{vision}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
