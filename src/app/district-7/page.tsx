import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { MetricTable } from "@/components/MetricTable";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { district7Overview } from "@/lib/content";

export const metadata: Metadata = {
  title: "District 7",
  description:
    "Demographic and civic engagement data for Milwaukee's 7th Aldermanic District — informing NorthMKE outreach, messaging, and platform priorities.",
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

export default function District7Page() {
  return (
    <div>
      <PageHero
        eyebrow="District 7"
        title={district7Overview.title}
        description={district7Overview.intro}
        regionPhoto={false}
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Data pack</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-brand-navy">{district7Overview.subtitle}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-brand-black/75">
              Sources include U.S. Census Bureau data, Milwaukee Independent reporting, Urban Milwaukee voter turnout
              analysis, and city open data. Figures are approximate and should be refreshed as new data becomes
              available.
            </p>
          </Reveal>
          <div className="mt-10">
            <MetricTable rows={district7Overview.metrics} />
          </div>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <article className="rounded-xl border border-brand-navy/10 bg-surface p-6">
                <h2 className="font-serif text-xl font-bold text-brand-navy">Motivational levers</h2>
                <BulletList items={district7Overview.motivationalLevers} />
              </article>
            </Reveal>
            <Reveal delayMs={80}>
              <article className="rounded-xl border border-brand-navy/10 bg-surface p-6">
                <h2 className="font-serif text-xl font-bold text-brand-navy">Engagement tactics</h2>
                <BulletList items={district7Overview.engagementTactics} />
              </article>
            </Reveal>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/platform" variant="primary">
              View platform pillars
            </Button>
            <Button href="/map" variant="ghost">
              Voting map
            </Button>
            <Button href="/approach" variant="ghost">
              Civic approach
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
