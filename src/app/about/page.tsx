import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { campaignPhase } from "@/lib/config";
import { brand } from "@/lib/config";
import { longTermVision, mission } from "@/lib/content";

export const metadata: Metadata = {
  title: "About NorthMKE",
  description: `${brand.nameWithTm} — ${mission.summary}`,
};

export default function AboutPage() {
  return (
    <div>
      <PageHero eyebrow="About" title="About NorthMKE" description={brand.tagline} />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-brand-navy">Our mission</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-black/85">{mission.summary}</p>
          <p className="mt-5 text-base leading-relaxed text-brand-black/80">{mission.closing}</p>
          <p className="mt-6 inline-flex rounded-full border border-brand-navy/15 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-gold">
            Current phase: {campaignPhase}
          </p>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <article className="rounded-lg border border-brand-navy/10 bg-surface p-6 shadow-sm md:col-span-2">
              <h2 className="font-serif text-xl font-bold text-brand-navy">Long-term vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/80">{longTermVision}</p>
            </article>
            <article className="rounded-lg border border-brand-navy/10 bg-surface p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-brand-navy">Civic engagement</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/80">
                NorthMKE educates residents about local issues, promotes civic participation, and mobilizes community
                members to meetings, forums, and public processes — building awareness and credibility across North
                Milwaukee.
              </p>
            </article>
            <article className="rounded-lg border border-brand-navy/10 bg-surface p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-brand-navy">Measurable accountability</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/80">
                Every dollar invested in North Milwaukee should produce measurable community benefit. NorthMKE tracks
                housing outcomes, business growth, healthcare access, job creation, and more through transparent
                reporting.
              </p>
            </article>
          </div>
          <Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/platform" variant="primary">
                Explore the platform
              </Button>
              <Button href="/approach" variant="secondary">
                Civic approach
              </Button>
              <Button href="/district-7" variant="ghost">
                District 7 data
              </Button>
              <Button href="/volunteer" variant="ghost">
                Volunteer
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
