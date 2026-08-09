import Link from "next/link";
import type { ReactNode } from "react";

type PlatformTocProps = {
  items: readonly { id: string; label: string }[];
};

export function PlatformToc({ items }: PlatformTocProps) {
  return (
    <nav
      aria-label="Platform sections"
      className="rounded-lg border border-brand-navy/10 bg-white p-5 shadow-sm lg:sticky lg:top-28"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-black/50">On this page</p>
      <ol className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="text-brand-navy/80 transition-colors hover:text-brand-gold"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

type PlatformSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "muted";
};

export function PlatformSection({ id, title, subtitle, children, variant = "default" }: PlatformSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 border-t border-brand-navy/10 py-12 sm:py-14 ${
        variant === "muted" ? "bg-surface" : "bg-white"
      }`}
    >
      <header className="mb-8 max-w-3xl">
        <h2 className="font-serif text-2xl font-bold text-brand-navy sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-base font-medium text-brand-black/65">{subtitle}</p> : null}
      </header>
      <div className="max-w-3xl space-y-8">{children}</div>
    </section>
  );
}

type PlatformBlockProps = {
  title?: string;
  intro?: string;
  body?: readonly string[];
  items?: readonly string[];
  ordered?: boolean;
};

export function PlatformBlock({ title, intro, body, items, ordered = false }: PlatformBlockProps) {
  const ListTag = ordered ? "ol" : "ul";
  const listClass = ordered
    ? "mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed text-brand-black/85"
    : "mt-3 space-y-2 text-base leading-relaxed text-brand-black/85";

  return (
    <article>
      {title ? <h3 className="font-serif text-xl font-bold text-brand-navy">{title}</h3> : null}
      {intro ? <p className={`text-base leading-relaxed text-brand-black/85 ${title ? "mt-3" : ""}`}>{intro}</p> : null}
      {body?.map((p) => (
        <p key={p.slice(0, 40)} className="mt-3 text-base leading-relaxed text-brand-black/85">
          {p}
        </p>
      ))}
      {items?.length ? (
        <ListTag className={listClass}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ListTag>
      ) : null}
    </article>
  );
}

export function PlatformVision({ text }: { text: string }) {
  return (
    <div className="mt-6 border-l-4 border-brand-gold bg-brand-navy/5 px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy/60">Vision</p>
      <p className="mt-2 text-base leading-relaxed text-brand-navy">{text}</p>
    </div>
  );
}

export function PlatformCallout({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border border-brand-navy/10 bg-surface px-5 py-4">
      <p className="font-serif text-lg font-bold text-brand-navy">{title}</p>
      <p className="mt-2 text-base leading-relaxed text-brand-black/85">{text}</p>
    </div>
  );
}

export function PlatformChain({ items }: { items: readonly string[] }) {
  return (
    <p className="mt-3 text-base leading-relaxed text-brand-black/85">
      {items.map((item, i) => (
        <span key={item}>
          {i > 0 ? <span className="text-brand-gold"> → </span> : null}
          {item}
        </span>
      ))}
    </p>
  );
}
