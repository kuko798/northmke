import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { MapToolsNav } from "@/components/MapToolsNav";
import { VotingLookup } from "@/components/VotingLookup";

export const metadata: Metadata = {
  title: "Where to Vote",
  description:
    "Enter your Milwaukee address to find your polling place, ward, and sample ballot using the City of Milwaukee voting lookup.",
};

export default function MapLookupPage() {
  return (
    <>
      <PageHero
        eyebrow="Civic tools"
        title="Where do I vote?"
        description="Enter your City of Milwaukee address to find your polling place, ward number, entrance details, and sample ballot — without leaving NorthMKE."
        regionPhoto={false}
      />

      <Reveal>
        <section className="border-b border-brand-navy/10 bg-white py-4">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <MapToolsNav active="lookup" />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={60}>
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <VotingLookup />
          </div>
        </section>
      </Reveal>
    </>
  );
}
