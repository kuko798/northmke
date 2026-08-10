import type { Metadata } from "next";
import { DonateCard } from "@/components/DonateCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { brand, disclaimer } from "@/lib/config";

export const metadata: Metadata = {
  title: "Donate",
  description: `Support ${brand.nameWithTm} and invest in community development across North Milwaukee.`,
};

export default function DonatePage() {
  return (
    <div>
      <PageHero
        eyebrow="Donate"
        title="Invest in North Milwaukee"
        description="Your support powers community outreach, neighborhood events, volunteer coordination, and the digital infrastructure that keeps NorthMKE connected to residents. Thank you for investing in this community."
        extra={
          disclaimer ? (
            <p className="mt-6 text-xs font-medium uppercase tracking-wide text-brand-gold/90">{disclaimer}</p>
          ) : null
        }
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
