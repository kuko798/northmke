/**
 * NorthMKE platform content — mission, vision, strategic pillars, digital features.
 * Source of truth for /platform copy.
 */

export const platformIdentity = {
  name: "NorthMKE",
  tagline: "Building Wealth, Health, Safety, and Opportunity Across North Milwaukee.",
} as const;

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

export type DetailBlock = {
  title: string;
  intro?: string;
  items?: readonly string[];
  body?: string;
};

export type PillarDetailContent = {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  vision?: string;
  blocks: readonly DetailBlock[];
};

export const pillars: readonly Pillar[] = [
  {
    id: "housing",
    emoji: "🏠",
    title: "Housing & Neighborhood Investment",
    tagline: "Building wealth through stable neighborhoods.",
    description:
      "Homeownership expansion, vacant property rehabilitation, affordable workforce housing, neighborhood beautification, property tax base growth, and community land trust exploration.",
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
    tagline: "Evidence-based economic development through women's advancement.",
    description:
      "Investments in women's education and economic advancement generate substantial long-term returns for families, communities, and local economies.",
    featured: true,
  },
  {
    id: "public-roi",
    emoji: "📈",
    title: "Public Return on Investment (ROI)",
    tagline: "Accountability through results.",
    description:
      "Transparent measurement of public and private investments through a community dashboard tracking housing, safety, business growth, healthcare, jobs, environment, and education.",
    vision: "Every dollar invested in North Milwaukee should produce measurable community benefit.",
    featured: true,
  },
  {
    id: "green",
    emoji: "🌱",
    title: "Green North Milwaukee",
    tagline: "Sustainable infrastructure and green jobs.",
    description:
      "Environmentally responsible projects that generate employment for local residents — urban forestry, community solar, green alleys, rainwater management, and more.",
    featured: true,
  },
  {
    id: "safety",
    emoji: "🚔",
    title: "Community Safety & Neighborhood Protection",
    tagline: "Safe Communities Initiative.",
    description:
      "Public safety requires both effective law enforcement and strong community investment — neighborhood policing, violence prevention, youth mentorship, and community safety councils.",
  },
  {
    id: "health",
    emoji: "🏥",
    title: "Midtown Health & Wellness District",
    tagline: "A world-class health destination for North Milwaukee.",
    description:
      "Transform Midtown into a comprehensive health, nursing, and wellness hub — maternal health, children's health, senior care, and a Nursing Excellence Center.",
  },
  {
    id: "elder-nutrition",
    emoji: "🚚",
    title: "Elder Nutrition & Independence Program",
    tagline: "No Elder Left Behind.",
    description:
      "Reliable food and wellness access for seniors through grocery delivery, prescription assistance, wellness visits, transportation, and nutrition counseling.",
  },
  {
    id: "mpd-district-reform",
    emoji: "🛡️",
    title: "Smarter, Safer & More Accountable Public Safety Infrastructure",
    tagline: "Split the 6th and 7th MPD districts for community-responsive policing.",
    description:
      "Create a dedicated MPD district aligned with the 7th Aldermanic District to improve community policing, officer career mobility, response times, and public trust.",
  },
] as const;

export const womensEconomicMobility = {
  whyItMatters: {
    intro:
      "Research consistently shows that investments in women's education and economic advancement generate substantial long-term returns for families, communities, and local economies.",
    likelihoodIntro: "College-educated women are more likely to:",
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

export type DigitalFeature = {
  title: string;
  intro: string;
  items: readonly string[];
};

export const digitalFeatures: readonly DigitalFeature[] = [
  {
    title: "Community Action Hub",
    intro: "Residents can:",
    items: [
      "Volunteer",
      "Donate",
      "Join initiatives",
      "Attend events",
      "Advocate for policy solutions",
    ],
  },
  {
    title: "NorthMKE Impact Dashboard",
    intro: "Track progress in real time:",
    items: [
      "Homes renovated",
      "Businesses launched",
      "Jobs created",
      "Trees planted",
      "Healthcare services delivered",
      "Seniors served",
      "Public investment returns",
    ],
  },
  {
    title: "Community Issue Reporting",
    intro: "Report:",
    items: [
      "Blight",
      "Illegal dumping",
      "Infrastructure concerns",
      "Public safety issues",
      "Vacant properties",
    ],
  },
  {
    title: "NorthMKE Voices",
    intro: "A storytelling platform featuring:",
    items: [
      "Residents",
      "Entrepreneurs",
      "Students",
      "Seniors",
      "Healthcare workers",
      "Community leaders",
    ],
  },
] as const;

/** Deep-dive content for each platform pillar — rendered on /platform. */
export const pillarDetails: readonly PillarDetailContent[] = [
  {
    id: "housing",
    emoji: "🏠",
    title: "Housing & Neighborhood Investment",
    tagline: "Building wealth through stable neighborhoods.",
    vision:
      "Every North Milwaukee neighborhood becomes a place where families can build equity, safety, and generational wealth.",
    blocks: [
      {
        title: "Priorities",
        items: [
          "Homeownership expansion",
          "Rehabilitation of vacant properties",
          "Affordable workforce housing",
          "Neighborhood beautification",
          "Property tax base growth",
          "Community land trust exploration",
        ],
      },
    ],
  },
  {
    id: "womens-economic-mobility",
    emoji: "👩🏾‍🎓",
    title: "Women's Economic Mobility & Leadership Initiative",
    tagline: "Evidence-based economic development through women's advancement.",
    vision: womensEconomicMobility.vision,
    blocks: [
      {
        title: "Why this investment matters",
        intro: womensEconomicMobility.whyItMatters.intro,
      },
      {
        title: womensEconomicMobility.whyItMatters.likelihoodIntro,
        items: womensEconomicMobility.whyItMatters.benefits,
      },
      {
        title: "North Milwaukee impact",
        body: womensEconomicMobility.whyItMatters.closing,
      },
      {
        title: womensEconomicMobility.opportunityFund.title,
        intro: womensEconomicMobility.opportunityFund.intro,
        items: womensEconomicMobility.opportunityFund.focusAreas,
      },
      {
        title: "Strategic goals",
        items: womensEconomicMobility.strategicGoals,
      },
      {
        title: "ROI framework",
        body: womensEconomicMobility.roiFramework,
      },
      {
        title: "Key community indicators",
        intro: "Track:",
        items: womensEconomicMobility.keyIndicators,
      },
    ],
  },
  {
    id: "public-roi",
    emoji: "📈",
    title: "Public Return on Investment (ROI)",
    tagline: "Accountability through results.",
    vision: "Every dollar invested in North Milwaukee should produce measurable community benefit.",
    blocks: [
      {
        title: "Community dashboard",
        intro: "NorthMKE promotes transparent measurement of public and private investments. Tracks:",
        items: [
          "Housing outcomes",
          "Crime reduction",
          "Business growth",
          "Healthcare access",
          "Job creation",
          "Environmental improvements",
          "Educational attainment",
        ],
      },
      {
        title: "Guiding principle",
        body: "Every dollar invested in North Milwaukee should produce measurable community benefit.",
      },
    ],
  },
  {
    id: "green",
    emoji: "🌱",
    title: "Green North Milwaukee",
    tagline: "Sustainable infrastructure and green jobs.",
    blocks: [
      {
        title: "Projects",
        items: [
          "Urban forestry",
          "Community solar initiatives",
          "Green alleys",
          "Rainwater management systems",
          "Energy-efficient housing upgrades",
          "Community gardens",
          "Vacant lot transformation",
        ],
      },
      {
        title: "Workforce goal",
        body:
          "Develop a pipeline of North Milwaukee residents trained for careers in sustainable infrastructure and environmental services.",
      },
    ],
  },
  {
    id: "safety",
    emoji: "🚔",
    title: "Community Safety & Neighborhood Protection",
    tagline: "Safe Communities Initiative.",
    vision:
      "Safer neighborhoods achieved through prevention, accountability, and community partnership.",
    blocks: [
      {
        title: "Strategies",
        items: [
          "Enhanced neighborhood policing",
          "Strategic review of police service boundaries and resource deployment",
          "Violence prevention programs",
          "Youth mentorship",
          "Mental health crisis response",
          "Community safety councils",
        ],
      },
      {
        title: "Community goal",
        body:
          "Safer neighborhoods achieved through prevention, accountability, and community partnership.",
      },
    ],
  },
  {
    id: "health",
    emoji: "🏥",
    title: "Midtown Health & Wellness District",
    tagline: "A world-class health destination for North Milwaukee.",
    vision:
      "Establish North Milwaukee as a national model for community-based healthcare delivery.",
    blocks: [
      {
        title: "Maternal health",
        items: ["Prenatal care", "Postpartum care", "Family support services", "Maternal health education"],
      },
      {
        title: "Children's health",
        items: ["Pediatric services", "Preventive care", "School-based health partnerships"],
      },
      {
        title: "Senior care",
        items: ["Wellness services", "Chronic disease management", "Home health support"],
      },
      {
        title: "Nursing Excellence Center",
        items: ["Nursing education", "Workforce training", "Research partnerships", "Clinical development"],
      },
    ],
  },
  {
    id: "elder-nutrition",
    emoji: "🚚",
    title: "Elder Nutrition & Independence Program",
    tagline: "No Elder Left Behind.",
    vision:
      "Ensure every senior in North Milwaukee has access to healthy food and supportive services.",
    blocks: [
      {
        title: "Services",
        items: [
          "Grocery delivery",
          "Prescription assistance",
          "Wellness visits",
          "Transportation support",
          "Nutrition counseling",
        ],
      },
      {
        title: "Community partners",
        items: [
          "Faith organizations",
          "Grocery retailers",
          "Healthcare providers",
          "Volunteer networks",
        ],
      },
      {
        title: "Impact goal",
        body:
          "Ensure every senior in North Milwaukee has access to healthy food and supportive services.",
      },
    ],
  },
  {
    id: "mpd-district-reform",
    emoji: "🛡️",
    title: "Smarter, Safer & More Accountable Public Safety Infrastructure",
    tagline: "Split the 6th and 7th MPD districts to improve community policing, officer advancement, and public trust.",
    vision:
      "Rebuild trust, enhance safety, and invest in both the people who live here and the officers who serve them.",
    blocks: [
      {
        title: "The problem",
        body:
          "The current configuration of Milwaukee's 6th and 7th Police Districts does not reflect the realities of population density, residential makeup, or modern public safety needs. The 7th District includes large residential corridors with significant homeownership and family density — a drastically different policing landscape from the more industrial and transitional zones nearby. The shared burden across 6th and 7th creates an overextension of patrol resources, delayed response times, and fragmented community engagement. Officers are overworked, under-supported, and face limited opportunities for career advancement in command positions due to administrative bottlenecks within merged or overly large precinct zones.",
      },
      {
        title: "The strategic solution",
        body:
          "Create a new, independent MPD District dedicated exclusively to the 7th Aldermanic District. This would be a data-driven realignment based on population density, housing stability, and officer retention strategies — not a reactive or punitive move.",
      },
      {
        title: "Why it matters",
        items: [
          "Neighborhood-specific policing: officers who know the neighborhoods they serve, with customized patrol routes and deeper resident relationships",
          "Vertical career mobility for officers through new command positions — especially for Black and Brown officers underrepresented in MPD leadership",
          "Improved officer and public safety via right-sized coverage, better training rotations, adequate backup, and more timely response times",
          "Tighter integration with housing, education, school safety, violence interruption, and reentry programs",
          "Better data and decisions: response times, officer wellness and retention, youth intervention rates, and resident satisfaction surveys",
        ],
      },
      {
        title: "How this fits into the broader platform",
        items: [
          "Housing stability: safer neighborhoods increase property values and retention of foundational citizens like teachers and nurses",
          "Women's economic mobility: trusted police presence allows professionals and entrepreneurs to work, invest, and raise families",
          "Green infrastructure: a localized force makes it easier to secure and protect public works and green investments",
          "Education reform: schools thrive in safe zones; dedicated community officers can partner with local educators",
          "Voter power: empowered residents can hold a localized police district more accountable, increasing civic trust and turnout",
        ],
      },
      {
        title: "Conclusion",
        body:
          "The 7th District is not just growing — it is evolving. To match that evolution, we must modernize our public safety infrastructure to be right-sized, locally responsive, equitable in leadership opportunities, and integrated with housing, education, and sustainability policy. By splitting the 6th and 7th MPD Districts, we're not just adding buildings — we're rebuilding trust, enhancing safety, and investing in both the people who live here and the officers who serve them.",
      },
    ],
  },
] as const;

/** Civic platform vs. official campaign — legal and strategic separation. */
export const civicPlatformFramework = {
  intro:
    "NorthMKE operates as a civic awareness and community development platform during Phase 1 — educating residents, promoting engagement, and building credibility without premature campaign compliance complexity.",
  civicPlatform: {
    title: "NorthMKE civic platform (Phase 1 — safe pre-campaign)",
    intro: "During the awareness phase, NorthMKE can lawfully:",
    activities: [
      "Educate voters about issues: housing, education, climate, safety, healthcare",
      "Promote civic engagement and community news",
      "Mobilize residents to meetings, forums, and public processes",
      "Use video, data, and commentary on community issues",
    ],
    guardrails: [
      "Avoid solicitations for any individual's election",
      "Do not accept or dedicate funds for a candidacy",
      "Frame content as issue advocacy and public affairs — not official campaign communication",
    ],
  },
  officialCampaign: {
    title: "Official campaign (future phase)",
    intro: "Once a candidacy is formally declared or election funds are raised or spent, standard campaign rules apply:",
    activities: [
      "File nomination and campaign registration",
      "Fundraise openly for the election",
      "Paid advertising and targeted voter outreach",
      "Campaign disclaimers on paid communications",
    ],
  },
  strategicBenefit:
    "Keeping NorthMKE informational through the awareness phase builds long-term visibility and trust without early campaign filing complexity — while preserving a clear path to persuasion and official campaign phases when the time is right.",
} as const;

export const campaignPhases = [
  {
    phase: "Phase 1 — Awareness & credibility",
    timing: "18–24+ months before election",
    goal: "Become a familiar, trusted voice on community issues before entering the race.",
    activities: [
      "Issue leadership through media, blogs, and community forums",
      "Thought leadership and policy proposals",
      "Civic engagement content and explainer resources",
      "Build NorthMKE as a community platform centered on issues, not candidacy",
    ],
  },
  {
    phase: "Phase 2 — Persuasion & soft campaign",
    timing: "12–15 months before election",
    goal: "Position credible alternatives through issue-based contrast without formal declaration.",
    activities: [
      "Subtle, issue-based contrast with incumbent records",
      "Expand grassroots networks and volunteer base",
      "Build email and SMS lists; test messaging",
      "Early community outreach and relationship building",
    ],
  },
  {
    phase: "Phase 3 — Official campaign",
    timing: "6–9 months before election",
    goal: "Convert support into votes through formal campaign operations.",
    activities: [
      "File nomination and campaign registration",
      "Open fundraising; paid media and targeted outreach",
      "Debates, direct voter contact, visible campaign operations",
    ],
  },
] as const;

export type DistrictMetric = {
  metric: string;
  value: string;
  implication: string;
};

/** Public demographic and civic data for Milwaukee's 7th Aldermanic District. */
export const district7Overview = {
  title: "Milwaukee 7th Aldermanic District",
  subtitle: "Demographic and civic engagement data for strategic outreach",
  intro:
    "The 7th Aldermanic District is a majority-Black district with significant housing pressure, renter populations, and upside for civic mobilization. These publicly available metrics inform NorthMKE messaging, outreach, and platform priorities.",
  metrics: [
    {
      metric: "Racial composition",
      value: "~84% Black voting-age population (district); ~39% citywide",
      implication:
        "Messaging must reflect the lived experiences of Black residents — housing pressure, infrastructure gaps, and investment disparities — with authentic community voice.",
    },
    {
      metric: "Educational attainment",
      value: "~19% bachelor's degree or higher (Census Tract 7); ~27% citywide",
      implication:
        "Women's economic mobility messaging works for a meaningful college-educated segment while also reaching residents without degrees through jobs, housing, and safety.",
    },
    {
      metric: "Homeownership",
      value: "Owner occupancy declined from ~74% (2005) to ~54%; ~58% citywide are renters",
      implication:
        "Large renter population needs affordability and stability messaging alongside homeownership pathways.",
    },
    {
      metric: "Housing value & investment",
      value: "Assessments up ~32% in recent period; ~1,100 out-of-state investor-owned homes",
      implication:
        "Gentrification, displacement, and corporate landlord concerns resonate strongly. Tax accountability and owner-occupancy incentives are high-leverage.",
    },
    {
      metric: "Income",
      value: "Median household income ~$43,000 (Tract 7); per-capita ~$22,165",
      implication:
        "Economic uplift, return-on-tax-dollars framing, and tangible local benefits must lead over abstract policy language.",
    },
    {
      metric: "Voter turnout",
      value: "Citywide aldermanic turnout declining; 2022 gubernatorial turnout down ~11 pts from 2018",
      implication:
        "Significant upside in mobilizing under-engaged voters — especially younger residents and renters who feel local elections don't affect them.",
    },
    {
      metric: "Median age",
      value: "~43 years (Tract 7) vs. ~32 citywide",
      implication:
        "District skews older than the city average, but targeted youth digital outreach remains essential for long-term engagement.",
    },
    {
      metric: "Digital access",
      value: "~93% of Milwaukee households have a computer; ~86% broadband",
      implication:
        "Strong digital and social media strategy is viable — but access alone does not guarantee engagement; content must be relevant and peer-driven.",
    },
  ] satisfies readonly DistrictMetric[],
  motivationalLevers: [
    "Personal relevance: tie elections to housing stability, jobs, and neighborhood infrastructure",
    "Return on tax dollars: show how public investment produces visible local benefit",
    "Green infrastructure as local improvement: jobs, parks, lower bills — not abstract climate talk",
    "Digital and peer networks: social media, influencers, and community ambassadors",
    "Trust and transparency: local data, accessible storytelling, and community organization partnerships",
  ],
  engagementTactics: [
    "Short-form social content on platforms popular with younger voters",
    "Town halls and listening sessions in churches, community centers, and parks",
    "Pop-up voting information at festivals, farmers markets, and neighborhood events",
    "Voting pledge mechanisms with shareable community tools",
    "Clear how-to-vote guides: registration, early voting, polling locations",
    "Post-election accountability dashboards showing neighborhood investment outcomes",
  ],
} as const;

export const holisticPlatformModel = {
  title: "How the pillars interlock",
  intro: "NorthMKE's platform is designed as a self-reinforcing model for inclusive growth:",
  connections: [
    "College-educated women are supported and rooted through ownership, child care, and entrepreneurship.",
    "Foundational workers are incentivized to live where they work and stabilize their neighborhoods.",
    "Education reform raises property values and strengthens the long-term tax base.",
    "Green infrastructure projects create jobs, improve health, and position the district as a climate leader.",
    "MPD realignment integrates safety with housing, schools, and community trust.",
  ],
  closing:
    "The 7th District has the numbers. It has the land. It has the people. What it needs is the policy. By making this district the flagship for inclusive growth, we don't just transform one part of Milwaukee — we show the whole state what's possible when you invest in the people who've always invested in you.",
} as const;

/** Pillars shown as home-page teasers. */
export const featuredPillars = pillars.filter((p) => p.featured);

export type MerchProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
};

export const merchProducts: readonly MerchProduct[] = [
  {
    id: "logo-tee",
    name: "NorthMKE Logo Tee",
    description: "Soft cotton tee with the NorthMKE mark — navy and gold.",
    price: 28,
    category: "Apparel",
  },
  {
    id: "hoodie",
    name: "NorthMKE Hoodie",
    description: "Midweight fleece hoodie for Milwaukee winters.",
    price: 55,
    category: "Apparel",
  },
  {
    id: "cap",
    name: "NorthMKE Cap",
    description: "Structured cap with embroidered logo.",
    price: 25,
    category: "Accessories",
  },
  {
    id: "tote",
    name: "NorthMKE Tote Bag",
    description: "Canvas tote — perfect for farmers markets and community events.",
    price: 18,
    category: "Accessories",
  },
] as const;
