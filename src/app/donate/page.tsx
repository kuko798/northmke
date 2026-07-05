import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DonateCard } from "@/components/DonateCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { activePhase, brand, disclaimer } from "@/lib/config";

export const metadata: Metadata = {
  title: "Donate",
  description: `Securely support ${brand.nameWithTm}.`,
};

export default function DonatePage() {
  if (!activePhase.showDonate) {
    notFound();
  }

  return (
    <div>
      <PageHero
        eyebrow="Donate"
        title="Invest in North Milwaukee"
        description="Grassroots donations power voter contact, community events, and the digital tools we need to compete. Thank you for your support."
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
