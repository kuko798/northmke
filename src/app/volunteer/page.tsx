import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { VolunteerForm } from "@/components/VolunteerForm";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: "Volunteer",
  description: `Join ${brand.nameWithTm} — door knocks, phone banks, events, and more.`,
};

export default function VolunteerPage() {
  return (
    <div>
      <PageHero
        eyebrow="Volunteer"
        title="Join the campaign"
        description="Tell us how you would like to help. A member of our team will follow up with training, shifts, and everything you need to make an impact."
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <VolunteerForm />
        </div>
      </section>
    </div>
  );
}
