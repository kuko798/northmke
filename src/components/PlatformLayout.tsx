import Link from "next/link";
import type { ReactNode } from "react";

const body = "text-[15px] leading-7 text-brand-black/85";
const h2 = "font-serif text-2xl font-bold tracking-tight text-brand-navy sm:text-[1.75rem]";
const h3 = "font-serif text-lg font-bold text-brand-navy sm:text-xl";
const h4 = "text-sm font-semibold uppercase tracking-[0.12em] text-brand-navy/70";
const rule = "border-b border-brand-navy/12 pb-4";

export function PlatformJumpNav({ items }: { items: readonly { id: string; label: string }[] }) {
  return (
    <nav aria-label="Platform sections" className="border-b border-brand-navy/10 bg-surface/60">
      <div className="mx-auto flex max-w-3xl flex-wrap gap-x-4 gap-y-2 px-4 py-4 sm:px-6 lg:px-8">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="text-xs font-medium text-brand-navy/65 transition-colors hover:text-brand-navy"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function PlatformPart({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 sm:py-16">
      <header className={`mb-8 ${rule}`}>
        <h2 className={h2}>{title}</h2>
        {subtitle ? <p className={`mt-2 ${body} text-brand-black/70`}>{subtitle}</p> : null}
      </header>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

export function PlatformPillar({
  index,
  id,
  title,
  tagline,
  children,
}: {
  index: number;
  id: string;
  title: string;
  tagline?: string;
  children: ReactNode;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article id={id} className="scroll-mt-24 border-t border-brand-navy/10 pt-10 first:border-t-0 first:pt-0">
      <div className="flex gap-5">
        <p className="w-8 shrink-0 pt-0.5 text-sm font-semibold tabular-nums text-brand-gold" aria-hidden="true">
          {num}
        </p>
        <div className="min-w-0 flex-1">
          <h3 className={h3}>{title}</h3>
          {tagline ? <p className="mt-1.5 text-sm font-medium text-brand-black/60">{tagline}</p> : null}
          <div className="mt-5 space-y-5">{children}</div>
        </div>
      </div>
    </article>
  );
}

export function PlatformSubsection({
  title,
  intro,
  body,
  items,
}: {
  title?: string;
  intro?: string;
  body?: string;
  items?: readonly string[];
}) {
  if (!title && !intro && !body && !items?.length) return null;

  return (
    <div>
      {title ? <h4 className={h4}>{title}</h4> : null}
      {intro ? <p className={`${title ? "mt-2" : ""} ${body}`}>{intro}</p> : null}
      {body ? <p className={`${title || intro ? "mt-2" : ""} ${body}`}>{body}</p> : null}
      {items?.length ? (
        <ul className={`${title || intro || body ? "mt-3" : ""} list-disc space-y-1.5 pl-5 ${body}`}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function PlatformVision({ label = "Vision", text }: { label?: string; text: string }) {
  return (
    <div className="border-l-2 border-brand-gold pl-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/55">{label}</p>
      <p className={`mt-1.5 ${body}`}>{text}</p>
    </div>
  );
}

export function PlatformLead({ children }: { children: ReactNode }) {
  return <p className={`${body} text-base sm:text-[17px]`}>{children}</p>;
}

export function PlatformArgument({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="border-t border-brand-navy/10 pt-8 first:border-t-0 first:pt-0">
      <h3 className={h3}>
        <span className="mr-2 text-brand-gold">{number}.</span>
        {title}
      </h3>
      <div className="mt-4 space-y-4">{children}</div>
    </article>
  );
}

export function PlatformClosing({ text }: { text: string }) {
  return <p className={`border-l-2 border-brand-navy/20 pl-4 ${body} font-medium text-brand-navy`}>{text}</p>;
}

export function PlatformRoiLine({ text }: { text: string }) {
  return <p className={`${body} text-brand-black/75`}>{text}</p>;
}
