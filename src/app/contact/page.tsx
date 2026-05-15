import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { brand, emails } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${brand.nameWithTm} — general inquiries, press, and volunteer support.`,
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Reach the campaign"
        description="Send us a message or use the emails below for the fastest route to the right team member."
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <aside className="lg:col-span-2">
              <h2 className="font-serif text-xl font-bold text-brand-navy">Campaign emails</h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">General</p>
                  <a className="mt-1 block font-medium text-brand-navy hover:underline" href={`mailto:${emails.info}`}>
                    {emails.info}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">Press</p>
                  <a
                    className="mt-1 block font-medium text-brand-navy hover:underline"
                    href={`mailto:${emails.press}`}
                  >
                    {emails.press}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold">Volunteer</p>
                  <a
                    className="mt-1 block font-medium text-brand-navy hover:underline"
                    href={`mailto:${emails.volunteer}`}
                  >
                    {emails.volunteer}
                  </a>
                </li>
              </ul>
            </aside>
            <div className="rounded-xl border border-brand-navy/10 bg-white p-6 shadow-sm lg:col-span-3">
              <h2 className="font-serif text-xl font-bold text-brand-navy">Send a message</h2>
              <p className="mt-2 text-sm text-brand-black/70">
                For time-sensitive press requests, email <span className="font-medium">{emails.press}</span> directly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
