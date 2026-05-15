import Link from "next/link";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { IssueCard } from "@/components/IssueCard";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/config";

const priorityTeasers = [
  {
    title: "Community Safety",
    description:
      "Safer blocks, stronger partnerships with neighbors and law enforcement, and prevention that works.",
  },
  {
    title: "Economic Opportunity",
    description:
      "Good jobs, skills training, and pathways so North Milwaukee families can build wealth here.",
  },
  {
    title: "Youth & Education",
    description:
      "Every young person deserves mentors, modern classrooms, and after-school options that inspire.",
  },
] as const;

function ShieldIcon() {
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

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M7 16V10M12 16V5M17 16v-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function GradIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 10l9-5 9 5-9 5-9-5z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M6 12v4.5L12 19l6-2.5V12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

const teaserIcons = [<ShieldIcon key="s" />, <ChartIcon key="c" />, <GradIcon key="g" />];

export default function HomePage() {
  return (
    <>
      <Hero
        showBrandLogo
        milwaukeePhoto
        eyebrow={`${brand.candidate} · ${brand.nameWithTm}`}
        title="Building a Stronger North Milwaukee."
        subtitle={`${brand.candidate} and ${brand.nameWithTm} are focused on safer neighborhoods, stronger opportunities, and accountable leadership.`}
        actions={[
          { label: "Volunteer", href: "/volunteer", variant: "primary" },
          { label: "Donate", href: "/donate", variant: "secondary" },
          { label: "Learn the issues", href: "/issues", variant: "outlineLight" },
        ]}
      />

      <Reveal>
        <section className="border-b border-brand-navy/10 bg-gradient-to-b from-white via-white to-surface py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
            <div className="rounded-3xl border border-white/80 bg-white/80 p-8 shadow-sm ring-1 ring-brand-navy/[0.06] backdrop-blur-xl sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Meet the candidate</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-navy sm:text-4xl">
                Nathan Coe is running to deliver for North Milwaukee.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-black/80">
                North Milwaukee deserves leadership rooted in the community — someone who shows up, listens, and
                follows through. {brand.candidate} is building a coalition focused on safety, opportunity, and
                accountability.
              </p>
              <div className="mt-6">
                <Button href="/about" variant="primary">
                  Meet Nathan Coe
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-navy p-8 text-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-brand-gold/20 blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden="true" />
              <div className="relative">
              <p className="font-serif text-lg font-semibold text-brand-gold">Community-centered leadership</p>
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
                  A modern campaign that meets people where they are — doors, phones, and digital.
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Our priorities</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-brand-navy">What we are fighting for</h2>
              <p className="mt-2 max-w-2xl text-sm text-brand-black/75">
                A comprehensive agenda for safer streets, stronger schools, stable housing, and an economy that works
                for residents and small businesses.
              </p>
            </div>
            <Button href="/issues" variant="ghost" className="self-start sm:self-auto">
              View all issues
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {priorityTeasers.map((item, i) => (
              <IssueCard
                key={item.title}
                title={item.title}
                description={item.description}
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Join the movement</p>
              <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">We cannot do this without you.</h2>
              <p className="mt-4 max-w-2xl text-base text-white/85">
                Whether you can knock doors, host a coffee, share our message online, or chip in what you can — this
                campaign belongs to North Milwaukee.
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
        <section className="bg-gradient-to-b from-surface to-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-dark p-8 text-white shadow-[0_28px_70px_-28px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-gold/25 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-64 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">Donate</p>
              <h2 className="mt-3 font-serif text-2xl font-bold sm:text-3xl">Fuel the campaign for North Milwaukee.</h2>
              <p className="mt-3 max-w-xl text-sm text-white/85">
                Contributions power field organizing, voter outreach, and the infrastructure it takes to win. Thank you
                for investing in this community.
              </p>
            </div>
            <div className="relative mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
              <Button href="/donate" variant="primary" className="justify-center px-8">
                Donate now
              </Button>
              <Link
                href="/issues"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-[transform,colors] duration-200 hover:scale-[1.02] hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold active:scale-[0.99]"
              >
                Read our issues
              </Link>
            </div>
          </div>
        </div>
      </section>
      </Reveal>
    </>
  );
}
