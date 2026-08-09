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
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-3 space-y-2 text-sm text-brand-black/80">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PillarDetail({ id, emoji, title, tagline, vision, blocks }: PillarDetailProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-brand-navy/10 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-2xl" aria-hidden="true">
          {emoji}
        </p>
        <h2 className="mt-2 font-serif text-2xl font-bold text-brand-navy sm:text-3xl">{title}</h2>
        <p className="mt-2 text-sm font-medium text-brand-gold">{tagline}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-xl border border-brand-navy/10 bg-surface p-6">
              <h3 className="font-serif text-lg font-bold text-brand-navy">{block.title}</h3>
              {block.intro ? <p className="mt-2 text-sm text-brand-black/75">{block.intro}</p> : null}
              {block.body ? <p className="mt-3 text-sm leading-relaxed text-brand-black/80">{block.body}</p> : null}
              {block.items ? <BulletList items={block.items} /> : null}
            </article>
          ))}
        </div>

        {vision ? (
          <div className="mt-8 rounded-xl border border-brand-navy/10 bg-brand-navy p-6 text-white">
            <h3 className="font-serif text-lg font-bold text-brand-gold">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">{vision}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
