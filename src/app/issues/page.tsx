import type { Metadata } from "next";
import { IssueCard } from "@/components/IssueCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { brand } from "@/lib/config";

export const metadata: Metadata = {
  title: "Issues",
  description: `Community safety, opportunity, education, housing, accountability, and small business — ${brand.nameWithTm}.`,
};

function IconShield() {
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

function IconBriefcase() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2M4 10h16v9a2 2 0 01-2 2H6a2 2 0 01-2-2v-9z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 4h10a2 2 0 012 2v14l-4-2-4 2-4-2-4 2V6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHome() {
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

function IconScale() {
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

function IconStore() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10h16l-1 10H5L4 10zM4 10V8l2-4h12l2 4v2M9 14v4M15 14v4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const issues = [
  {
    title: "Community Safety",
    description:
      "Invest in prevention, strengthen community partnerships, and support strategies that reduce violence while protecting civil rights and building trust.",
    icon: <IconShield />,
  },
  {
    title: "Economic Opportunity",
    description:
      "Expand pathways to quality jobs, apprenticeships, and workforce training so residents can earn family-supporting wages without leaving the neighborhood.",
    icon: <IconBriefcase />,
  },
  {
    title: "Youth & Education",
    description:
      "Champion modern classrooms, mental health supports, mentorship, and after-school programs that keep young people safe, engaged, and on track.",
    icon: <IconBook />,
  },
  {
    title: "Housing & Neighborhood Development",
    description:
      "Fight for affordable housing, responsible development, and infrastructure upgrades that respect longtime residents and improve daily life.",
    icon: <IconHome />,
  },
  {
    title: "Government Accountability",
    description:
      "Deliver transparent budgets, accessible services, and leadership that answers to residents — not insiders — with clear metrics and regular reporting.",
    icon: <IconScale />,
  },
  {
    title: "Small Business Support",
    description:
      "Cut red tape, improve access to capital, and promote local procurement so North Milwaukee entrepreneurs can start, grow, and hire here.",
    icon: <IconStore />,
  },
] as const;

export default function IssuesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Issues"
        title="An agenda for North Milwaukee"
        description="Practical priorities rooted in community conversations — focused on safety, opportunity, and accountability."
      />

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue, i) => (
              <Reveal key={issue.title} delayMs={i * 70}>
                <IssueCard title={issue.title} description={issue.description} icon={issue.icon} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
