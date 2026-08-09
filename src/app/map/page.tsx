import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { MapToolsNav } from "@/components/MapToolsNav";
import { VotingMap } from "@/components/VotingMap";

export const metadata: Metadata = {
  title: "Voting Map",
  description:
    "Find polling places across Milwaukee with an interactive satellite map, colored district overlays for districts 1, 2, 5, 7, 9, and 10, and location details.",
};

export default function MapPage() {
  return (
    <>
      <PageHero
        eyebrow="Civic tools"
        title="Milwaukee voting map"
        description="Satellite view with colored overlays for MKE aldermanic districts 1, 2, 5, 7, 9, and 10 — each labeled by district number — plus pins at every polling place within those districts."
        regionPhoto={false}
      />

      <Reveal>
        <section className="border-b border-brand-navy/10 bg-white py-4">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <MapToolsNav active="map" />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={40}>
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <VotingMap showDistricts />
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={80}>
        <section className="border-t border-brand-navy/10 bg-surface py-10 sm:py-12">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm leading-relaxed text-brand-black/70">
              Polling place data is sourced from the City of Milwaukee&apos;s open GIS services and updated on their
              nightly refresh schedule. Always confirm your assigned polling location with{" "}
              <a
                href="https://myvote.wi.gov"
                className="font-medium text-brand-navy underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MyVote Wisconsin
              </a>{" "}
              before election day.
            </p>
          </div>
        </section>
      </Reveal>
    </>
  );
}
