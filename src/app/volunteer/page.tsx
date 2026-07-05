import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VolunteerForm } from "@/components/VolunteerForm";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: "Volunteer",
  description: `Join ${brand.nameWithTm} — community events, outreach, and civic engagement.`,
};

export default function VolunteerPage() {
  return (
    <div>
      <PageHero
        eyebrow="Volunteer"
        title="Get involved with NorthMKE"
        description="Tell us how you would like to help. A member of our team will follow up with opportunities, events, and everything you need to make an impact."
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <VolunteerForm />
        </div>
      </section>
    </div>
  );
}
