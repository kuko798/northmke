import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { campaignPhase } from "@/lib/config";
import { campaignPhases, civicPlatformFramework } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How NorthMKE operates as a Phase 1 civic awareness platform — legal separation from an official campaign, and the path from awareness to persuasion to campaign.",
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-brand-black/80">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ApproachPage() {
  return (
    <div>
      <PageHero
        eyebrow="Strategy"
        title="Civic platform approach"
        description={civicPlatformFramework.intro}
        regionPhoto={false}
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Current phase</p>
            <h2 className="mt-2 font-serif text-2xl font-bold capitalize text-brand-navy">{campaignPhase} phase</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/80">{civicPlatformFramework.strategicBenefit}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <article className="rounded-xl border border-brand-navy/10 bg-surface p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Civic platform</p>
                <h2 className="mt-2 font-serif text-xl font-bold text-brand-navy">
                  {civicPlatformFramework.civicPlatform.title}
                </h2>
                <p className="mt-3 text-sm text-brand-black/75">{civicPlatformFramework.civicPlatform.intro}</p>
                <BulletList items={civicPlatformFramework.civicPlatform.activities} />
                <h3 className="mt-6 font-serif text-base font-bold text-brand-navy">Guardrails</h3>
                <BulletList items={civicPlatformFramework.civicPlatform.guardrails} />
              </article>
            </Reveal>
            <Reveal delayMs={80}>
              <article className="rounded-xl border border-brand-navy/10 bg-surface p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Future campaign</p>
                <h2 className="mt-2 font-serif text-xl font-bold text-brand-navy">
                  {civicPlatformFramework.officialCampaign.title}
                </h2>
                <p className="mt-3 text-sm text-brand-black/75">{civicPlatformFramework.officialCampaign.intro}</p>
                <BulletList items={civicPlatformFramework.officialCampaign.activities} />
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Three-phase sequence</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-brand-navy">From awareness to action</h2>
          </Reveal>
          <div className="mt-10 space-y-6">
            {campaignPhases.map((phase, i) => (
              <Reveal key={phase.phase} delayMs={i * 80}>
                <article className="rounded-xl border border-brand-navy/10 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-serif text-lg font-bold text-brand-navy">{phase.phase}</h3>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">{phase.timing}</p>
                  </div>
                  <p className="mt-3 text-sm font-medium text-brand-black/85">{phase.goal}</p>
                  <BulletList items={phase.activities} />
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/platform" variant="primary">
              Explore the platform
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
