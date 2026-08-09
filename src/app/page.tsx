import Link from "next/link";
import { Button } from "@/components/Button";
import { DonateCard } from "@/components/DonateCard";
import { Hero } from "@/components/Hero";
import { IssueCard } from "@/components/IssueCard";
import { MerchCard } from "@/components/MerchCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";
import { VotingMap } from "@/components/VotingMap";
import { brand } from "@/lib/config";
import { featuredPillars, merchProducts, mission } from "@/lib/content";

function HomeIcon() {
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

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M7 16V10M12 16V5M17 16v-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v18M5 7l3 6h8l3-6M8 13h8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const teaserIcons = [<HomeIcon key="h" />, <ChartIcon key="c" />, <ScaleIcon key="s" />];

export default function HomePage() {
  return (
    <>
      <Hero
        showBrandLogo
        milwaukeePhoto
        eyebrow={brand.nameWithTm}
        title={brand.tagline}
        subtitle={mission.summary}
        actions={[
          { label: "Volunteer", href: "/volunteer", variant: "primary" },
          { label: "Explore the platform", href: "/platform", variant: "secondary" },
          { label: "Contact us", href: "/contact", variant: "outlineLight" },
        ]}
      />

      <Reveal>
        <section className="border-b border-brand-navy/10 bg-gradient-to-b from-white via-white to-surface py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
              <div className="rounded-3xl border border-white/80 bg-white/80 p-8 shadow-sm ring-1 ring-brand-navy/[0.06] backdrop-blur-xl sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Our mission</p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-brand-navy sm:text-4xl">
                  Uniting North Milwaukee to build lasting community investment.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-brand-black/80">{mission.closing}</p>
                <div className="mt-6">
                  <Button href="/about" variant="primary">
                    About NorthMKE
                  </Button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-navy p-8 text-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:p-10">
                <div
                  className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-brand-gold/20 blur-3xl"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl"
                  aria-hidden="true"
                />
                <div className="relative">
                  <p className="font-serif text-lg font-semibold text-brand-gold">Community-centered development</p>
                  <ul className="mt-4 space-y-3 text-sm text-white/85">
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      Grounded in neighborhood voices — not downtown talking points.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      Clear priorities with measurable outcomes you can hold us to.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                      A civic platform that meets people where they are — doors, phones, and digital.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={80}>
        <section className="bg-surface py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Strategic pillars</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">What we are building together</h2>
                <p className="mt-2 max-w-2xl text-sm text-brand-black/75">
                  A comprehensive platform for housing investment, economic mobility, public accountability, safety,
                  healthcare, sustainability, and senior support.
                </p>
              </div>
              <Button href="/platform" variant="ghost" className="self-start sm:self-auto">
                View full platform
              </Button>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {featuredPillars.map((item, i) => (
                <IssueCard
                  key={item.id}
                  title={item.title}
                  description={item.tagline}
                  icon={teaserIcons[i]}
                />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="border-y border-brand-navy/10 bg-brand-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
              <div className="lg:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Get involved</p>
                <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">We cannot do this without you.</h2>
                <p className="mt-4 max-w-2xl text-base text-white/85">
                  Whether you can volunteer, share our message online, attend a community forum, or help shape local
                  policy — this platform belongs to North Milwaukee.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button href="/volunteer" variant="primary" className="w-full justify-center">
                  Volunteer
                </Button>
                <Button href="/contact" variant="secondary" className="w-full justify-center border-white/40">
                  Contact the team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="border-t border-brand-navy/10 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Voting map</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">Find your polling place</h2>
                <p className="mt-2 max-w-2xl text-sm text-brand-black/75">
                  Interactive satellite map with colored overlays for MKE districts 1, 2, 5, 7, 9, and 10 — numbered
                  labels on each district — plus pins at every polling place. Tap a pin for location details.
                </p>
              </div>
              <Button href="/map" variant="ghost" className="self-start sm:self-auto">
                Open full map
              </Button>
            </div>
            <div className="mt-10">
              <VotingMap showDistricts heightClassName="h-[420px] sm:h-[480px]" />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="border-t border-brand-navy/10 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Shop</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">NorthMKE merch</h2>
                <p className="mt-2 max-w-2xl text-sm text-brand-black/75">
                  Official apparel and accessories — rep the movement and support community work across North Milwaukee.
                </p>
              </div>
              <Button href="/shop" variant="ghost" className="self-start sm:self-auto">
                View all merch
              </Button>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {merchProducts.map((product, i) => (
                <Reveal key={product.id} delayMs={i * 60}>
                  <MerchCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={110}>
        <section className="border-t border-brand-navy/10 bg-surface py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Newsletter</p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">Stay in the loop</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-black/75">
                  Subscribe for community updates, event announcements, volunteer opportunities, and platform news
                  from North Milwaukee.
                </p>
              </div>
              <div className="rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm sm:p-8">
                <NewsletterForm compact />
                <p className="mt-4 text-xs text-brand-black/55">
                  Prefer the full signup form?{" "}
                  <Link href="/newsletter" className="font-medium text-brand-navy underline-offset-2 hover:underline">
                    Go to newsletter page
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={120}>
        <section className="border-t border-brand-navy/10 bg-gradient-to-b from-white to-surface py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Donate</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">Invest in North Milwaukee</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/75">
                Your contribution helps fund community outreach, neighborhood events, and the digital tools that keep
                NorthMKE connected to residents across the district.
              </p>
            </div>
            <div className="mx-auto max-w-xl">
              <DonateCard />
            </div>
            <p className="mt-6 text-center text-sm text-brand-black/60">
              <Link href="/donate" className="font-medium text-brand-navy underline-offset-2 hover:underline">
                Open full donate page
              </Link>
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delayMs={100}>
        <section className="bg-gradient-to-b from-surface to-white py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-dark p-8 text-white shadow-[0_28px_70px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div
                className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-gold/25 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-64 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Explore the platform</p>
                <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">
                  See all eight strategic pillars and our long-term vision.
                </h2>
                <p className="mt-3 max-w-xl text-sm text-white/85">
                  From housing investment to healthcare access, learn how NorthMKE is building measurable community
                  returns across North Milwaukee.
                </p>
              </div>
              <div className="relative mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
                <Button href="/platform" variant="primary" className="justify-center px-8">
                  View the platform
                </Button>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-[transform,colors] duration-200 hover:scale-[1.02] hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold active:scale-[0.99]"
                >
                  About NorthMKE
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}
