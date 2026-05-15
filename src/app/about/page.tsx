import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: "Meet Nathan Coe",
  description: `Learn about ${brand.candidate}, community roots, and vision for North Milwaukee.`,
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="Meet Nathan Coe"
        description="A civic leader focused on safer neighborhoods, stronger opportunities, and accountable leadership for North Milwaukee."
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-brand-black/85">
            <strong>{brand.candidate}</strong> is a son of North Milwaukee — raised on the same blocks where families are
            working hard to build stability today. After years of service in community organizations and civic
            initiatives, Nathan is stepping forward to run a campaign that puts neighborhood voices first.
          </p>
          <p className="mt-5 text-base leading-relaxed text-brand-black/80">
            This biography is placeholder text you can replace with verified details: education, professional
            background, public service roles, and the personal story that anchors Nathan&apos;s commitment to North
            Milwaukee. Keep it specific, honest, and grounded in real outcomes residents can recognize.
          </p>
        </div>
      </section>

      <section className="border-t border-brand-navy/10 bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <article className="rounded-lg border border-brand-navy/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-brand-navy">Leadership</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/80">
                Nathan believes leadership is measured by follow-through — showing up when it is hard, keeping
                promises, and being transparent about tradeoffs. Placeholder: add boards, committees, and elected or
                appointed experience here.
              </p>
            </article>
            <article className="rounded-lg border border-brand-navy/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-brand-navy">Service</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/80">
                From food drives to youth mentorship, Nathan has invested time where it matters. Placeholder: highlight
                volunteer work, nonprofit partnerships, and neighborhood projects with names people know.
              </p>
            </article>
            <article className="rounded-lg border border-brand-navy/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-brand-navy">Community roots</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/80">
                North Milwaukee is not a talking point — it is home. Placeholder: name schools, congregations, small
                businesses, and community anchors that shaped Nathan&apos;s path.
              </p>
            </article>
            <article className="rounded-lg border border-brand-navy/10 bg-white p-6 shadow-sm">
              <h2 className="font-serif text-xl font-bold text-brand-navy">Vision for North Milwaukee</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/80">
                Safer streets, stronger schools, dignified housing, and an economy where local entrepreneurs can thrive.
                Placeholder: add 3–5 concrete priorities voters will remember at the door.
              </p>
            </article>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/issues" variant="primary">
              Read the issues
            </Button>
            <Button href="/volunteer" variant="ghost">
              Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
