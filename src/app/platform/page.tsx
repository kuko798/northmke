import type { ReactNode } from "react";
import type { Metadata } from "next";
import { IssueCard } from "@/components/IssueCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/config";
import { digitalFeatures, pillars, womensEconomicMobility } from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform",
  description: `NorthMKE strategic pillars — housing, economic mobility, public ROI, green infrastructure, safety, healthcare, and senior support.`,
};

function IconHome() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-7H10v7H5a1 1 0 01-1-1v-9.5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M4 10h16v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M7 16V10M12 16V5M17 16v-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21c-4-3-7-7-7-12 0 0 4 2 7 2s7-2 7-2c0 5-3 9-7 12z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 3v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHealth() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 6v12M6 12h12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 8h11v8H3V8zM14 10h4l3 3v3h-7v-6zM7 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const pillarIcons: Record<string, ReactNode> = {
  housing: <IconHome />,
  "womens-economic-mobility": <IconBriefcase />,
  "public-roi": <IconChart />,
  green: <IconLeaf />,
  safety: <IconShield />,
  health: <IconHealth />,
  "elder-nutrition": <IconTruck />,
};

export default function PlatformPage() {
  return (
    <div>
      <PageHero
        eyebrow="Platform"
        title="NorthMKE Strategic Pillars"
        description="Practical priorities rooted in community conversations — focused on wealth, health, safety, and opportunity across North Milwaukee."
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delayMs={i * 70}>
                <IssueCard
                  title={pillar.title}
                  description={pillar.description}
                  icon={pillarIcons[pillar.id]}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Featured initiative</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">
              Women&apos;s Economic Mobility & Leadership Initiative
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-black/80">
              {womensEconomicMobility.whyItMatters.intro}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Reveal delayMs={80}>
              <article className="rounded-xl border border-brand-navy/10 bg-surface p-6">
                <h3 className="font-serif text-lg font-bold text-brand-navy">Why this investment matters</h3>
                <p className="mt-3 text-sm text-brand-black/75">
                  College-educated women are more likely to:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-brand-black/80">
                  {womensEconomicMobility.whyItMatters.benefits.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-brand-black/75">{womensEconomicMobility.whyItMatters.closing}</p>
              </article>
            </Reveal>

            <Reveal delayMs={120}>
              <article className="rounded-xl border border-brand-navy/10 bg-surface p-6">
                <h3 className="font-serif text-lg font-bold text-brand-navy">
                  {womensEconomicMobility.opportunityFund.title}
                </h3>
                <p className="mt-3 text-sm text-brand-black/75">{womensEconomicMobility.opportunityFund.intro}</p>
                <ul className="mt-3 space-y-2 text-sm text-brand-black/80">
                  {womensEconomicMobility.opportunityFund.focusAreas.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delayMs={160}>
              <article className="rounded-xl border border-brand-navy/10 bg-surface p-6">
                <h3 className="font-serif text-lg font-bold text-brand-navy">Strategic goals</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-black/80">
                  {womensEconomicMobility.strategicGoals.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delayMs={200}>
              <article className="rounded-xl border border-brand-navy/10 bg-surface p-6">
                <h3 className="font-serif text-lg font-bold text-brand-navy">Key community indicators</h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-black/80">
                  {womensEconomicMobility.keyIndicators.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          <Reveal delayMs={240}>
            <div className="mt-10 rounded-xl border border-brand-navy/10 bg-brand-navy p-6 text-white sm:p-8">
              <h3 className="font-serif text-lg font-bold text-brand-gold">ROI framework</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">{womensEconomicMobility.roiFramework}</p>
              <p className="mt-6 text-sm leading-relaxed text-white/85">{womensEconomicMobility.vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Coming soon</p>
            <h2 className="mt-2 font-serif text-2xl font-bold text-brand-navy">Digital platform features</h2>
            <p className="mt-2 max-w-2xl text-sm text-brand-black/75">
              {brand.nameWithTm} is building digital tools to connect residents, track impact, and amplify community
              voices.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {digitalFeatures.map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 70}>
                <article className="rounded-lg border border-brand-navy/10 bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-brand-navy">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-black/80">{feature.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
