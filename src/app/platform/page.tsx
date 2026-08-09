import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { PillarDetail } from "@/components/PillarDetail";
import { PlatformPillarCard } from "@/components/PlatformPillarCard";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/config";
import {
  digitalFeatures,
  holisticPlatformModel,
  longTermVision,
  mission,
  pillarDetails,
  pillars,
  platformIdentity,
  strategicArguments,
} from "@/lib/content";
import { StrategicArgumentsSection } from "@/components/StrategicArgumentsSection";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "NorthMKE strategic pillars — housing, women's economic mobility, public ROI, green infrastructure, safety, healthcare, senior support, and public safety reform.",
};

export default function PlatformPage() {
  return (
    <div>
      <PageHero
        eyebrow="Platform"
        title="NorthMKE Strategic Pillars"
        description={platformIdentity.tagline}
        regionPhoto={false}
      />

      {/* Mission */}
      <section className="border-b border-brand-navy/10 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Mission</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-brand-navy sm:text-3xl">
              {platformIdentity.name}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-black/85 sm:text-lg">{mission.summary}</p>
            <p className="mt-5 text-base leading-relaxed text-brand-black/75">{mission.closing}</p>
          </Reveal>
        </div>
      </section>

      {/* Pillar overview */}
      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Eight pillars</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">A comprehensive platform for North Milwaukee</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/75">
                Housing investment, economic mobility, public accountability, safety, healthcare, senior support, green
                infrastructure, and police district reform — each pillar reinforces the others.
              </p>
            </div>
          </Reveal>

          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Jump to pillar">
            <Link
              href="#strategic-arguments"
              className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1.5 text-xs font-medium text-brand-navy transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              Strategic arguments
            </Link>
            {pillars.map((pillar) => (
              <Link
                key={pillar.id}
                href={`#${pillar.id}`}
                className="rounded-full border border-brand-navy/15 bg-white px-3 py-1.5 text-xs font-medium text-brand-navy transition-colors hover:border-brand-gold/50 hover:text-brand-gold"
              >
                {pillar.emoji} {pillar.title.split("&")[0]?.trim() ?? pillar.title}
              </Link>
            ))}
          </nav>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.id} delayMs={i * 50}>
                <PlatformPillarCard pillar={pillar} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full pillar deep-dives */}
      {pillarDetails.map((pillar, i) => (
        <PillarDetail key={pillar.id} {...pillar} index={i} />
      ))}

      <StrategicArgumentsSection
        title={strategicArguments.title}
        subtitle={strategicArguments.subtitle}
        districtTagline={strategicArguments.districtTagline}
        arguments={strategicArguments.arguments}
      />

      {/* Holistic model */}
      <section className="border-t border-brand-navy/10 bg-brand-navy py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Holistic model</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white capitalize">{holisticPlatformModel.title}</h2>
            <ul className="mt-8 space-y-4">
              {holisticPlatformModel.connections.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base font-semibold leading-relaxed text-white sm:text-lg">
              {holisticPlatformModel.closing}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{holisticPlatformModel.finalPoint}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/district-7" variant="primary">
                District 7 data
              </Button>
              <Button href="/approach" variant="outlineLight">
                Civic approach & phases
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Digital platform features */}
      <section className="border-t border-brand-navy/10 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Digital platform</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">Digital platform features</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-black/75">
              {brand.nameWithTm} is building digital tools to connect residents, track impact, and amplify community
              voices.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {digitalFeatures.map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 60}>
                <article className="h-full rounded-xl border border-brand-navy/10 bg-surface p-6 shadow-sm">
                  <h3 className="font-serif text-xl font-bold text-brand-navy">{feature.title}</h3>
                  <p className="mt-2 text-sm font-medium text-brand-black/70">{feature.intro}</p>
                  <ul className="mt-4 space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-brand-black/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term vision */}
      <section className="border-t border-brand-navy/10 bg-surface py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Long-term vision</p>
            <blockquote className="mt-6 font-serif text-xl leading-relaxed text-brand-navy sm:text-2xl">
              &ldquo;{longTermVision}&rdquo;
            </blockquote>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/volunteer" variant="primary">
                Get involved
              </Button>
              <Button href="/contact" variant="ghost">
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
