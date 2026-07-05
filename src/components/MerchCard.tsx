import Link from "next/link";
import { shopCheckoutUrl } from "@/lib/config";
import type { MerchProduct } from "@/lib/content";

type MerchCardProps = {
  product: MerchProduct;
};

export function MerchCard({ product }: MerchCardProps) {
  const shopHref = shopCheckoutUrl || "/shop";

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-dark">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.25),transparent_55%)]"
          aria-hidden="true"
        />
        <span className="relative font-serif text-lg font-bold tracking-wide text-brand-gold">{product.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{product.category}</p>
        <h3 className="mt-1 font-serif text-lg font-bold text-brand-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-black/75">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="font-semibold text-brand-navy">${product.price}</p>
          {shopCheckoutUrl ? (
            <a
              href={shopCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-navy px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-navy/90"
            >
              Shop now
            </a>
          ) : (
            <Link
              href={shopHref}
              className="rounded-full bg-brand-navy px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-navy/90"
            >
              View details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
