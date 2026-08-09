import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import {
  PlatformArgument,
  PlatformClosing,
  PlatformJumpNav,
  PlatformLead,
  PlatformPart,
  PlatformPillar,
  PlatformRoiLine,
  PlatformSubsection,
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
  description: platformIdentity.tagline,
};

function isDuplicateBlock(title: string | undefined, pillarTitle: string, pillarTagline?: string) {
  if (!title) return false;
  const t = title.trim().toLowerCase();
  return t === pillarTitle.trim().toLowerCase() || t === pillarTagline?.trim().toLowerCase();
}

export default function PlatformPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Platform"
        title="The NorthMKE Platform"
        description={platformIdentity.tagline}
        regionPhoto={false}
      />

      <PlatformJumpNav items={platformToc} />

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        {/* Mission */}
        <PlatformPart id="mission" title="Mission">
          <PlatformLead>{mission.summary}</PlatformLead>
          <PlatformLead>{mission.closing}</PlatformLead>
        </PlatformPart>

        {/* Pillars */}
        <PlatformPart id="strategic-pillars" title="Strategic Pillars">
          {pillarDetails.map((pillar, index) => (
            <PlatformPillar
              key={pillar.id}
              index={index}
              id={pillar.id}
              title={pillar.title}
              tagline={pillar.tagline}
            >
              {pillar.blocks.map((block) => {
                if (block.title === "Focus Areas" && !block.intro && !block.items) return null;
                if (isDuplicateBlock(block.title, pillar.title, pillar.tagline)) {
                  if (!block.intro && !block.body && !block.items?.length) return null;
                  return (
                    <PlatformSubsection
                      key={`dup-${block.title}`}
                      intro={block.intro}
                      body={block.body}
                      items={block.items}
                    />
                  );
                }
                if (!block.title && block.body) {
                  return <PlatformSubsection key={block.body.slice(0, 48)} body={block.body} />;
                }
                if (block.title === "ROI Framework") {
                  return (
                    <div key={block.title}>
                      <PlatformSubsection title={block.title} intro={block.intro} />
                      {block.body ? <PlatformRoiLine text={block.body} /> : null}
                    </div>
                  );
                }
                return (
                  <PlatformSubsection
                    key={block.title}
                    title={block.title || undefined}
                    intro={block.intro}
                    body={block.body}
                    items={block.items}
                  />
                );
              })}
              {pillar.vision ? <PlatformVision text={pillar.vision} /> : null}
              {pillar.longTermVision ? (
                <PlatformVision label="Long-Term Vision" text={pillar.longTermVision} />
              ) : null}
            </PlatformPillar>
          ))}
        </PlatformPart>

        {/* Strategic arguments */}
        <PlatformPart
          id="strategic-arguments"
          title="Strategic Case for District 7"
          subtitle={strategicArguments.districtTagline}
        >
          {strategicArguments.arguments.map((arg) => (
            <PlatformArgument key={arg.number} number={arg.number} title={arg.title}>
              {arg.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="text-[15px] leading-7 text-brand-black/85">
                  {p}
                </p>
              ))}
              {arg.items ? <PlatformSubsection items={arg.items} /> : null}
              {arg.rippleEffect ? (
                <PlatformSubsection
                  intro="Strategically investing in this group creates a ripple effect:"
                  items={arg.rippleEffect}
                />
              ) : null}
              {arg.subsections?.map((sub, si) => (
                <PlatformSubsection
                  key={`${arg.number}-${si}`}
                  title={sub.title || undefined}
                  intro={sub.body}
                  items={sub.items}
                />
              ))}
              {arg.closing ? <PlatformClosing text={arg.closing} /> : null}
            </PlatformArgument>
          ))}
        </PlatformPart>

        {/* Holistic model */}
        <PlatformPart id="holistic-model" title={holisticPlatformModel.title}>
          <PlatformSubsection items={holisticPlatformModel.connections} />
          <PlatformLead>{holisticPlatformModel.together}</PlatformLead>
        </PlatformPart>

        {/* Digital features */}
        <PlatformPart id="digital-features" title="Digital Platform Features">
          <div className="grid gap-8 sm:grid-cols-2">
            {digitalFeatures.map((feature) => (
              <PlatformSubsection
                key={feature.title}
                title={feature.title}
                intro={feature.intro}
                items={feature.items}
              />
            ))}
          </div>
        </PlatformPart>

        {/* Long-term vision */}
        <PlatformPart id="long-term-vision" title="Long-Term Vision">
          <PlatformLead>{longTermVision}</PlatformLead>
        </PlatformPart>

        {/* Final strategic point */}
        <PlatformPart id="final-strategic-point" title="Final Strategic Point">
          <PlatformLead>{holisticPlatformModel.closing}</PlatformLead>
          <PlatformLead>{holisticPlatformModel.finalPoint}</PlatformLead>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button href="/district-7" variant="primary">
              District 7 data
            </Button>
            <Button href="/approach" variant="ghost">
              Civic approach
            </Button>
            <Button href="/volunteer" variant="ghost">
              Get involved
            </Button>
          </div>
        </PlatformPart>
      </div>
    </div>
  );
}
