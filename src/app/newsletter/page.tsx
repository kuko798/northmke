import type { Metadata } from "next";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: "Newsletter",
  description: `Subscribe to the ${brand.nameWithTm} newsletter for community updates, events, and platform news.`,
};

export default function NewsletterPage() {
  return (
    <div>
      <PageHero
        eyebrow="Newsletter"
        title="Stay connected to North Milwaukee"
        description="Get updates on community events, platform initiatives, volunteer opportunities, and local policy — delivered to your inbox."
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-xl border border-brand-navy/10 bg-white p-6 shadow-sm sm:p-8">
              <NewsletterForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
