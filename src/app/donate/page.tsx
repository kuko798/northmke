import type { Metadata } from "next";
import { DonateCard } from "@/components/DonateCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { brand, disclaimer } from "@/lib/config";

export const metadata: Metadata = {
  title: "Donate",
  description: `Securely support ${brand.nameWithTm} and ${brand.candidate}.`,
};

export default function DonatePage() {
  return (
    <div>
      <PageHero
        eyebrow="Donate"
        title="Invest in North Milwaukee"
        description="Grassroots donations power voter contact, community events, and the digital tools we need to compete. Thank you for your support."
        extra={<p className="mt-6 text-xs font-medium uppercase tracking-wide text-brand-gold/90">{disclaimer}</p>}
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <DonateCard />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
