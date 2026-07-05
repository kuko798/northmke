import type { Metadata } from "next";
import { MerchCard } from "@/components/MerchCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { brand, shopCheckoutUrl } from "@/lib/config";
import { merchProducts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shop",
  description: `Official ${brand.nameWithTm} merchandise — apparel and accessories that support North Milwaukee.`,
};

export default function ShopPage() {
  return (
    <div>
      <PageHero
        eyebrow="Shop"
        title="NorthMKE Merch"
        description="Rep the movement with official NorthMKE apparel and accessories. Every purchase helps spread the message and support community work across North Milwaukee."
        extra={
          shopCheckoutUrl ? (
            <p className="mt-6">
              <a
                href={shopCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-gold-light"
              >
                Visit the full store
              </a>
            </p>
          ) : null
        }
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {merchProducts.map((product, i) => (
              <Reveal key={product.id} delayMs={i * 70}>
                <MerchCard product={product} />
              </Reveal>
            ))}
          </div>
          {!shopCheckoutUrl ? (
            <p className="mt-10 text-center text-sm text-brand-black/65">
              Connect <code className="rounded bg-brand-navy/5 px-1 text-xs">NEXT_PUBLIC_SHOP_URL</code> to link to
              your Shopify, Printful, or storefront when ready.
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
