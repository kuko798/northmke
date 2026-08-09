import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import {
  PlatformBlock,
  PlatformChain,
  PlatformSection,
  PlatformToc,
  PlatformVision,
} from "@/components/PlatformLayout";
import {
  digitalFeatures,
  holisticPlatformModel,
  longTermVision,
  mission,
  pillarDetails,
  platformIdentity,
  platformToc,
  strategicArguments,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "NorthMKE platform — mission, strategic pillars, strategic arguments, digital features, and long-term vision for North Milwaukee.",
};

export default function PlatformPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Platform"
        title="NorthMKE Platform"
        description={platformIdentity.tagline}
        regionPhoto={false}
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:grid lg:grid-cols-[minmax(0,13rem)_1fr] lg:gap-12 lg:px-8 lg:py-14">
        <aside className="mb-8 lg:sticky lg:top-28 lg:self-start">
          <PlatformToc items={platformToc} />
        </aside>

        <div>
          {/* Identity & Mission */}
          <PlatformSection id="mission" title="Updated Platform Identity" subtitle={platformIdentity.name}>
            <PlatformBlock
              title="Tagline"
              intro={`"${platformIdentity.tagline}"`}
            />
            <PlatformBlock title="Mission" intro={mission.summary} body={[mission.closing]} />
          </PlatformSection>

          {/* Strategic Pillars */}
          <PlatformSection
            id="strategic-pillars"
            title="NorthMKE Strategic Pillars"
            variant="muted"
          >
            {pillarDetails.map((pillar) => (
              <div key={pillar.id} id={pillar.id} className="scroll-mt-28 border-t border-brand-navy/10 pt-10 first:border-t-0 first:pt-0">
                <h3 className="font-serif text-xl font-bold text-brand-navy sm:text-2xl">{pillar.title}</h3>
                <p className="mt-2 text-base font-medium text-brand-black/70">{pillar.tagline}</p>

                <div className="mt-6 space-y-6">
                  {pillar.blocks.map((block) => {
                    const isRoi = block.title === "ROI Framework";
                    if (!block.title && block.body) {
                      return (
                        <p key={block.body.slice(0, 40)} className="text-base leading-relaxed text-brand-black/85">
                          {block.body}
                        </p>
                      );
                    }
                    if (block.title === "Focus Areas" && !block.intro && !block.items) {
                      return null;
                    }
                    return (
                      <div key={block.title || block.body?.slice(0, 40) || "block"}>
                        <PlatformBlock
                          title={block.title || undefined}
                          intro={block.intro}
                          body={block.body && !isRoi ? [block.body] : undefined}
                          items={block.items}
                        />
                        {isRoi && block.body ? (
                          <PlatformChain items={block.body.split("→").map((s) => s.trim())} />
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                {pillar.vision ? <PlatformVision text={pillar.vision} /> : null}
                {pillar.longTermVision ? (
                  <div className="mt-6">
                    <PlatformBlock title="Long-Term Vision" intro={pillar.longTermVision} />
                  </div>
                ) : null}
              </div>
            ))}
          </PlatformSection>

          {/* Digital Platform Features */}
          <PlatformSection id="digital-features" title="Digital Platform Features">
            {digitalFeatures.map((feature) => (
              <PlatformBlock key={feature.title} title={feature.title} intro={feature.intro} items={feature.items} />
            ))}
          </PlatformSection>

          {/* Long-Term Vision Statement */}
          <PlatformSection
            id="long-term-vision"
            title="Long-Term Vision Statement"
            variant="muted"
          >
            <p className="text-base leading-relaxed text-brand-black/85">{longTermVision}</p>
          </PlatformSection>

          {/* Strategic Arguments */}
          <PlatformSection
            id="strategic-arguments"
            title="Strategic Argument: Why the 7th District is the Launchpad for Milwaukee's Future"
            subtitle={strategicArguments.districtTagline}
            variant="muted"
          >
            {strategicArguments.arguments.map((arg) => (
              <div key={arg.number} className="border-t border-brand-navy/10 pt-8 first:border-t-0 first:pt-0">
                <h3 className="font-serif text-lg font-bold text-brand-navy sm:text-xl">
                  {arg.number}. {arg.title}
                </h3>
                <div className="mt-4 space-y-4">
                  {arg.paragraphs.map((p) => (
                    <p key={p.slice(0, 50)} className="text-base leading-relaxed text-brand-black/85">
                      {p}
                    </p>
                  ))}
                  {arg.items ? <PlatformBlock items={arg.items} /> : null}
                  {arg.rippleEffect ? (
                    <PlatformBlock
                      intro="Strategically investing in this group creates a ripple effect:"
                      items={arg.rippleEffect}
                    />
                  ) : null}
                  {arg.subsections?.map((sub, si) => (
                    <PlatformBlock key={`${arg.number}-${si}`} title={sub.title || undefined} intro={sub.body} items={sub.items} />
                  ))}
                  {arg.closing ? (
                    <p className="border-l-4 border-brand-gold pl-4 text-base font-medium leading-relaxed text-brand-navy">
                      {arg.closing}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </PlatformSection>

          {/* Holistic Model */}
          <PlatformSection id="holistic-model" title="How It All Interlocks: A Holistic Model">
            <PlatformBlock items={holisticPlatformModel.connections} />
            <p className="text-base leading-relaxed text-brand-black/85">{holisticPlatformModel.together}</p>
          </PlatformSection>

          {/* Final Strategic Point */}
          <PlatformSection id="final-strategic-point" title="Final Strategic Point" variant="muted">
            <PlatformBlock body={[holisticPlatformModel.closing, holisticPlatformModel.finalPoint]} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/district-7" variant="primary">
                District 7 data
              </Button>
              <Button href="/approach" variant="ghost">
                Civic approach and phases
              </Button>
              <Button href="/volunteer" variant="ghost">
                Get involved
              </Button>
            </div>
          </PlatformSection>
        </div>
      </div>
    </div>
  );
}
