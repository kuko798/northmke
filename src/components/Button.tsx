import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outlineLight";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-[color,background-color,border-color,transform,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:active:scale-100";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gold text-brand-navy shadow-lg shadow-[0_14px_36px_-10px_rgba(201,162,39,0.45)] hover:bg-brand-gold-light hover:shadow-[0_18px_44px_-10px_rgba(201,162,39,0.5)] focus-visible:outline-brand-gold",
  secondary:
    "border-2 border-white/90 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 focus-visible:outline-white",
  ghost:
    "rounded-xl border-2 border-brand-navy/15 bg-transparent text-brand-navy hover:border-brand-navy/35 hover:bg-brand-navy/[0.04] focus-visible:outline-brand-navy",
  outlineLight:
    "border-2 border-white/90 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 focus-visible:outline-white",
};

type ButtonAsLink = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = {
  href?: undefined;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & ComponentProps<"button">;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const cls = `${base} ${variants[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, variant: _v, className: _c, children: _ch, ...linkRest } = props as ButtonAsLink;
    return (
      <Link href={href} className={cls} {...linkRest}>
        {children}
      </Link>
    );
  }

  const {
    type = "button",
    variant: _variant,
    className: _className,
    children: _children,
    href: _href,
    ...domProps
  } = props as ButtonAsButton;

  return (
    <button type={type} className={cls} {...domProps}>
      {children}
    </button>
  );
}
