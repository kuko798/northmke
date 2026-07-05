/**
 * NorthMKE platform content — mission, vision, strategic pillars, digital features.
 */

export const mission = {
  summary:
    "NorthMKE is a community development and civic engagement platform dedicated to advancing economic prosperity, neighborhood revitalization, public safety, healthcare access, environmental sustainability, and measurable public accountability throughout North Milwaukee.",
  closing:
    "Our mission is to unite residents, businesses, faith institutions, educators, healthcare providers, and community organizations to create lasting investments that strengthen families and neighborhoods for generations.",
} as const;

export const longTermVision =
  "NorthMKE envisions North Milwaukee as America's leading example of community-centered development—where housing creates wealth, healthcare improves lives, public investments generate measurable returns, seniors are cared for, neighborhoods are safe, and residents have the opportunity to thrive regardless of ZIP code.";

export type Pillar = {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  priorities?: readonly string[];
  vision?: string;
  featured?: boolean;
};

export const pillars: readonly Pillar[] = [
  {
    id: "housing",
    emoji: "🏠",
    title: "Housing & Neighborhood Investment",
    tagline: "Building wealth through stable neighborhoods.",
    description:
      "Invest in homeownership expansion, vacant property rehabilitation, affordable workforce housing, neighborhood beautification, property tax base growth, and community land trust exploration.",
    priorities: [
      "Homeownership expansion",
      "Rehabilitation of vacant properties",
      "Affordable workforce housing",
      "Neighborhood beautification",
      "Property tax base growth",
      "Community land trust exploration",
    ],
    vision:
      "Every North Milwaukee neighborhood becomes a place where families can build equity, safety, and generational wealth.",
    featured: true,
  },
  {
    id: "womens-economic-mobility",
    emoji: "👩🏾‍🎓",
    title: "Women's Economic Mobility & Leadership Initiative",
    tagline: "Evidence-based investment in women's education and economic advancement.",
    description:
      "Research consistently shows that investments in women's education and economic advancement generate substantial long-term returns for families, communities, and local economies.",
    featured: true,
  },
  {
    id: "public-roi",
    emoji: "📈",
    title: "Public Return on Investment (ROI)",
    tagline: "Accountability through results.",
    description:
      "NorthMKE promotes transparent measurement of public and private investments through a community dashboard tracking housing outcomes, crime reduction, business growth, healthcare access, job creation, environmental improvements, and educational attainment.",
    vision: "Every dollar invested in North Milwaukee should produce measurable community benefit.",
    featured: true,
  },
  {
    id: "green",
    emoji: "🌱",
    title: "Green North Milwaukee",
    tagline: "Sustainable infrastructure and green jobs.",
    description:
      "Create environmentally responsible projects while generating employment opportunities for local residents through urban forestry, community solar, green alleys, rainwater management, energy-efficient housing upgrades, community gardens, and vacant lot transformation.",
    vision:
      "Develop a pipeline of North Milwaukee residents trained for careers in sustainable infrastructure and environmental services.",
  },
  {
    id: "safety",
    emoji: "🚔",
    title: "Community Safety & Neighborhood Protection",
    tagline: "Safe Communities Initiative.",
    description:
      "Public safety requires both effective law enforcement and strong community investment through enhanced neighborhood policing, strategic review of police service boundaries, violence prevention programs, youth mentorship, mental health crisis response, and community safety councils.",
    vision:
      "Safer neighborhoods achieved through prevention, accountability, and community partnership.",
  },
  {
    id: "health",
    emoji: "🏥",
    title: "Midtown Health & Wellness District",
    tagline: "A world-class health destination for North Milwaukee.",
    description:
      "Transform Midtown into a comprehensive health, nursing, and wellness hub serving families across the region — with focus areas in maternal health, children's health, senior care, and a Nursing Excellence Center for education, workforce training, and research partnerships.",
    vision:
      "Establish North Milwaukee as a national model for community-based healthcare delivery.",
  },
  {
    id: "elder-nutrition",
    emoji: "🚚",
    title: "Elder Nutrition & Independence Program",
    tagline: "No Elder Left Behind.",
    description:
      "Support seniors with reliable access to food and wellness resources through grocery delivery, prescription assistance, wellness visits, transportation support, and nutrition counseling in partnership with faith organizations, grocery retailers, healthcare providers, and volunteer networks.",
    vision:
      "Ensure every senior in North Milwaukee has access to healthy food and supportive services.",
  },
] as const;

export const womensEconomicMobility = {
  whyItMatters: {
    intro:
      "Research consistently shows that investments in women's education and economic advancement generate substantial long-term returns for families, communities, and local economies.",
    benefits: [
      "Participate in the workforce at higher rates.",
      "Start and grow businesses.",
      "Increase household earnings and purchasing power.",
      "Invest in children's education and health.",
      "Build homeownership and generational wealth.",
      "Serve in civic and community leadership roles.",
    ],
    closing:
      "For North Milwaukee, increasing opportunities for college-educated women can help expand the tax base, strengthen neighborhoods, and accelerate economic development.",
  },
  opportunityFund: {
    title: "NorthMKE Opportunity Fund",
    intro: "Focused on supporting:",
    focusAreas: [
      "Entrepreneurs and small-business owners",
      "STEM professionals",
      "Healthcare professionals",
      "Educators",
      "Public service leaders",
      "Graduate and professional students",
    ],
  },
  strategicGoals: [
    "Increase women-owned business formation.",
    "Expand access to startup and growth capital.",
    "Support homeownership and wealth-building.",
    "Develop civic and nonprofit leadership pipelines.",
    "Create mentorship networks connecting students to professionals.",
  ],
  roiFramework:
    "Investment → Career Growth → Higher Household Income → Homeownership → Stronger Neighborhoods → Expanded Tax Base → Greater Community Wealth",
  keyIndicators: [
    "Women-owned businesses launched",
    "Jobs created",
    "Median income growth",
    "Homeownership rates",
    "Graduate degree attainment",
    "Leadership positions held",
    "Tax revenue growth associated with business activity",
  ],
  vision:
    "NorthMKE seeks to make North Milwaukee the Midwest's leading hub for women's economic mobility, entrepreneurship, professional leadership, and generational wealth creation.",
} as const;

export const digitalFeatures = [
  {
    title: "Community Action Hub",
    description:
      "Residents can volunteer, donate, join initiatives, attend events, and advocate for policy solutions.",
  },
  {
    title: "NorthMKE Impact Dashboard",
    description:
      "Track progress in real time: homes renovated, businesses launched, jobs created, trees planted, healthcare services delivered, seniors served, and public investment returns.",
  },
  {
    title: "Community Issue Reporting",
    description:
      "Report blight, illegal dumping, infrastructure concerns, public safety issues, and vacant properties.",
  },
  {
    title: "NorthMKE Voices",
    description:
      "A storytelling platform featuring residents, entrepreneurs, students, seniors, healthcare workers, and community leaders.",
  },
] as const;

/** Pillars shown as home-page teasers. */
export const featuredPillars = pillars.filter((p) => p.featured);
