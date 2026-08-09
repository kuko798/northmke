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
  title: string;
  tagline: string;
  vision?: string;
  longTermVision?: string;
  blocks: readonly DetailBlock[];
};

export const platformToc = [
  { id: "mission", label: "Platform identity and mission" },
  { id: "strategic-pillars", label: "Strategic pillars" },
  { id: "digital-features", label: "Digital platform features" },
  { id: "long-term-vision", label: "Long-term vision statement" },
  { id: "strategic-arguments", label: "Strategic arguments" },
  { id: "holistic-model", label: "Holistic model" },
  { id: "final-strategic-point", label: "Final strategic point" },
] as const;

export const pillars: readonly Pillar[] = [
  {
    id: "housing",
    title: "Housing & Neighborhood Investment",
    tagline: "Building wealth through stable neighborhoods.",
    description:
      "Homeownership expansion, rehabilitation of vacant properties, affordable workforce housing, neighborhood beautification, property tax base growth, and community land trust exploration.",
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
    title: "Women's Economic Mobility & Leadership Initiative",
    tagline: "Why This Investment Matters",
    description:
      "Research consistently shows that investments in women's education and economic advancement generate substantial long-term returns for families, communities, and local economies.",
    featured: true,
  },
  {
    id: "public-roi",
    title: "Public Return on Investment (ROI)",
    tagline: "Accountability Through Results",
    description:
      "NorthMKE promotes transparent measurement of public and private investments.",
    vision: "Every dollar invested in North Milwaukee should produce measurable community benefit.",
    featured: true,
  },
  {
    id: "green",
    title: "Green North Milwaukee",
    tagline: "Sustainable Infrastructure & Green Jobs",
    description:
      "Create environmentally responsible projects while generating employment opportunities for local residents.",
    featured: true,
  },
  {
    id: "safety",
    title: "Community Safety & Neighborhood Protection",
    tagline: "Safe Communities Initiative",
    description:
      "Public safety requires both effective law enforcement and strong community investment.",
  },
  {
    id: "health",
    title: "Midtown Health & Wellness District",
    tagline: "A World-Class Health Destination for North Milwaukee",
    description:
      "Transform Midtown into a comprehensive health, nursing, and wellness hub serving families across the region.",
  },
  {
    id: "elder-nutrition",
    title: "Elder Nutrition & Independence Program",
    tagline: "No Elder Left Behind",
    description:
      "Support seniors with reliable access to food and wellness resources.",
  },
  {
    id: "mpd-district-reform",
    title: "A Smarter, Safer, and More Accountable Public Safety Infrastructure",
    tagline:
      "Proposal: Split the 7th and 6th MPD Districts to Improve Community Policing, Officer Advancement, and Public Trust",
    description:
      "Create a new, independent MPD District dedicated exclusively to the 7th Aldermanic District.",
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
  roiFrameworkIntro:
    "NorthMKE views investments in educated women as a community-development strategy because success in this population often produces broader benefits:",
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
    title: "Women's Economic Mobility & Leadership Initiative",
    tagline: "Why This Investment Matters",
    vision: womensEconomicMobility.vision,
    blocks: [
      {
        title: "Why This Investment Matters",
        intro: womensEconomicMobility.whyItMatters.intro,
      },
      {
        title: "College-educated women are more likely to:",
        items: womensEconomicMobility.whyItMatters.benefits,
      },
      {
        title: "",
        body: womensEconomicMobility.whyItMatters.closing,
      },
      {
        title: womensEconomicMobility.opportunityFund.title,
        intro: womensEconomicMobility.opportunityFund.intro,
        items: womensEconomicMobility.opportunityFund.focusAreas,
      },
      {
        title: "Strategic Goals",
        items: womensEconomicMobility.strategicGoals,
      },
      {
        title: "ROI Framework",
        intro: womensEconomicMobility.roiFrameworkIntro,
        body: womensEconomicMobility.roiFramework,
      },
      {
        title: "Key Community Indicators",
        intro: "Track:",
        items: womensEconomicMobility.keyIndicators,
      },
    ],
  },
  {
    id: "public-roi",
    title: "Public Return on Investment (ROI)",
    tagline: "Accountability Through Results",
    blocks: [
      {
        title: "Accountability Through Results",
        intro: "NorthMKE promotes transparent measurement of public and private investments.",
      },
      {
        title: "Community Dashboard",
        intro: "Tracks:",
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
        title: "Guiding Principle",
        body: "Every dollar invested in North Milwaukee should produce measurable community benefit.",
      },
    ],
  },
  {
    id: "green",
    title: "Green North Milwaukee",
    tagline: "Sustainable Infrastructure & Green Jobs",
    blocks: [
      {
        title: "Sustainable Infrastructure & Green Jobs",
        intro:
          "Create environmentally responsible projects while generating employment opportunities for local residents.",
      },
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
        title: "Workforce Goal",
        body:
          "Develop a pipeline of North Milwaukee residents trained for careers in sustainable infrastructure and environmental services.",
      },
    ],
  },
  {
    id: "safety",
    title: "Community Safety & Neighborhood Protection",
    tagline: "Safe Communities Initiative",
    blocks: [
      {
        title: "Safe Communities Initiative",
        intro: "Public safety requires both effective law enforcement and strong community investment.",
      },
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
        title: "Community Goal",
        body:
          "Safer neighborhoods achieved through prevention, accountability, and community partnership.",
      },
    ],
  },
  {
    id: "health",
    title: "Midtown Health & Wellness District",
    tagline: "A World-Class Health Destination for North Milwaukee",
    longTermVision:
      "Establish North Milwaukee as a national model for community-based healthcare delivery.",
    blocks: [
      {
        title: "A World-Class Health Destination for North Milwaukee",
        intro:
          "Transform Midtown into a comprehensive health, nursing, and wellness hub serving families across the region.",
      },
      {
        title: "Focus Areas",
      },
      {
        title: "Maternal Health",
        items: ["Prenatal care", "Postpartum care", "Family support services", "Maternal health education"],
      },
      {
        title: "Children's Health",
        items: ["Pediatric services", "Preventive care", "School-based health partnerships"],
      },
      {
        title: "Senior Care",
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
    title: "Elder Nutrition & Independence Program",
    tagline: "No Elder Left Behind",
    blocks: [
      {
        title: "No Elder Left Behind",
        intro: "Support seniors with reliable access to food and wellness resources.",
      },
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
        title: "Community Partners",
        items: [
          "Faith organizations",
          "Grocery retailers",
          "Healthcare providers",
          "Volunteer networks",
        ],
      },
      {
        title: "Impact Goal",
        body:
          "Ensure every senior in North Milwaukee has access to healthy food and supportive services.",
      },
    ],
  },
  {
    id: "mpd-district-reform",
    title: "A Smarter, Safer, and More Accountable Public Safety Infrastructure",
    tagline:
      "Proposal: Split the 7th and 6th MPD Districts to Improve Community Policing, Officer Advancement, and Public Trust",
    blocks: [
      {
        title: "The Problem",
        intro:
          "The current configuration of Milwaukee's 6th and 7th Police Districts does not reflect the realities of population density, residential makeup, or modern public safety needs:",
        items: [
          "The 7th District includes large residential corridors with significant homeownership and family density — a drastically different policing landscape from the more industrial and transitional zones nearby.",
          "The shared burden across 6th and 7th creates an overextension of patrol resources, delayed response times, and fragmented community engagement.",
          "Officers are overworked, under-supported, and face limited opportunities for career advancement in command positions due to administrative bottlenecks within merged or overly large precinct zones.",
        ],
      },
      {
        title: "The Strategic Solution",
        intro:
          "Create a new, independent MPD District dedicated exclusively to the 7th Aldermanic District.",
        body:
          "This would be a data-driven realignment based on population density, housing stability, and officer retention strategies — not a reactive or punitive move.",
      },
      {
        title: "Why It Matters",
      },
      {
        title: "1. Neighborhood-Specific Policing",
        body:
          "Community safety depends on officers knowing the neighborhoods they serve. A standalone district would allow for deeper relationships with residents, customized patrol routes, and more accountability. The new district would also be better aligned with local housing and educational initiatives, making it easier to pair law enforcement with social services.",
      },
      {
        title: "2. Vertical Career Mobility for Officers",
        body:
          "A new district creates additional command positions (captain, lieutenant, community liaison roles), opening paths for career officers to rise through the ranks without leaving the neighborhoods they serve. This especially matters for Black and Brown officers, who are often underrepresented in higher MPD leadership.",
      },
      {
        title: "3. Improved Officer and Public Safety",
        body:
          "Right now, precincts that cover too many square miles stretch officer resources too thin. Overworked officers make more mistakes, face higher stress, and have less time to de-escalate or engage proactively. A right-sized district allows for better training rotations, adequate backup, and more timely response times.",
      },
      {
        title: "4. Tighter Integration With Housing and Education Policy",
        intro: "A new MPD district can be intentionally designed to collaborate with neighborhood development, including:",
        items: [
          "Homeownership programs",
          "School safety initiatives",
          "Violence interruption teams",
          "Reentry and restorative justice programs",
        ],
      },
      {
        title: "5. Better Data, Better Decisions",
        intro: "A new district means new metrics:",
        items: [
          "Response times",
          "Officer wellness and retention",
          "Youth intervention rates",
          "Resident satisfaction surveys",
        ],
        body:
          "These data points give both residents and policymakers greater transparency and control over how public safety is delivered.",
      },
      {
        title: "How This Fits Into the Broader Platform",
        intro: "This public safety restructure is not an isolated reform — it is interconnected with every other pillar of the platform:",
        items: [
          "Housing Stability: Safer neighborhoods increase property values and retention of foundational citizens like teachers and nurses.",
          "College-Educated Women: Safer streets and trusted police presence allow women entrepreneurs and professionals to work, invest, and raise families without fear.",
          "Green Infrastructure: A localized force makes it easier to secure and protect public works projects and green investments.",
          "Education Reform: Schools thrive in safe zones, and dedicated community officers can work in partnership with local educators.",
          "Voter Power: Empowered residents can hold a localized police district more accountable, increasing civic trust and turnout.",
        ],
      },
      {
        title: "Conclusion",
        intro: "The 7th District is not just growing — it is evolving. To match that evolution, we must modernize our public safety infrastructure to be:",
        items: [
          "Right-sized",
          "Locally responsive",
          "Equitable in leadership opportunities",
          "Integrated with housing, education, and sustainability policy",
        ],
        body:
          "By splitting the 6th and 7th MPD Districts, we're not just adding a building(s). We're rebuilding trust, enhancing safety, and investing in both the people who live here and the officers who serve them.",
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
  title: "How It All Interlocks: A Holistic Model",
  connections: [
    "College-educated women are supported and rooted through ownership, child care, and entrepreneurship.",
    "Foundational workers are incentivized to live where they work and stabilize their neighborhoods.",
    "Education reform raises property values and strengthens the long-term tax base.",
    "Green infrastructure projects create jobs, improve health, and position the district as a climate leader.",
  ],
  together:
    "Together, these pillars reinforce one another — creating a self-sustaining engine of economic justice, environmental resilience, and generational wealth.",
  closing:
    "The 7th District has the numbers. It has the land. It has the people. What it needs is the policy.",
  finalPoint:
    "By making this district the flagship for inclusive growth, we don't just transform one part of Milwaukee — we show the whole state what's possible when you invest in the people who've always invested in you.",
} as const;

export type StrategicArgumentSubsection = {
  title: string;
  body?: string;
  items?: readonly string[];
};

export type StrategicArgument = {
  number: number;
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
  subsections?: readonly StrategicArgumentSubsection[];
  rippleEffect?: readonly string[];
  outcomes?: readonly string[];
  closing?: string;
};

/** Strategic case for why District 7 is Milwaukee's launchpad — rendered on /platform. */
export const strategicArguments = {
  districtTagline: "Rooted in the 7th — Home. Growth. Power. Safety.",
  arguments: [
    {
      number: 1,
      title: "Why We Must Invest in College-Educated Women — Especially Women of Color",
      paragraphs: [
        "The 7th Aldermanic District is uniquely positioned to become a national model for inclusive economic development by intentionally focusing on the empowerment of college-educated women, with particular emphasis on Black and Brown women.",
        "College-educated women of color are among the most under-leveraged economic contributors in Milwaukee. Despite having degrees, entrepreneurial energy, and deep community ties, they remain underserved in business financing, housing, and workforce pipelines.",
        "These women represent both social stability and economic mobility. They're more likely to be caregivers, small business owners, public sector employees, and civic participants — meaning that when they thrive, entire blocks and neighborhoods follow.",
      ],
      rippleEffect: [
        "More stable households",
        "Increased disposable income",
        "Higher consumer spending",
        "A stronger tax base",
        "Greater civic participation",
        "More local hiring and mentorship",
      ],
      closing:
        "By marketing the 7th as a college-educated women–friendly district, we attract a high-performing, civically engaged population that builds wealth locally rather than extracting it.",
    },
    {
      number: 2,
      title: "Why Incentivizing Homeownership for Foundational Citizens Is a Smart Economic Play",
      paragraphs: [
        "If we want long-term growth, we must stabilize the backbone of our neighborhoods: educators, nurses, first responders, and city workers. These are our \"foundational citizens.\"",
        "Homeownership among foundational citizens increases community investment, improves public trust, and enhances neighborhood safety.",
        "Policies that incentivize their homeownership — through down-payment assistance, mortgage guarantees, or tax relief — anchor skilled workers in the district and reduce turnover in essential services.",
        "On the flip side, we must de-incentivize absentee and corporate landlords, especially those based out of state. Right now, corporate housing firms are:",
      ],
      items: [
        "Extracting rents",
        "Neglecting maintenance",
        "Driving up property prices without reinvesting in the community",
      ],
      subsections: [
        {
          title: "Solution",
          body: "Prioritize owner-occupied buyers through policy:",
          items: [
            "\"First Look\" programs for public employees",
            "Vacancy-to-ownership tax credits",
            "Increased property taxes for corporate residential holding companies",
          ],
        },
      ],
      closing:
        "This isn't just housing policy — it's economic policy, crime prevention, and community building all in one.",
    },
    {
      number: 3,
      title: "Why Taking Over & Reforming the Local K-8 School System Is Critical to Home Values and Growth",
      paragraphs: [
        "Every parent — regardless of race, income, or background — wants access to safe, high-quality public education.",
        "In many parts of Milwaukee, perceptions of failing or underperforming schools are directly tied to low home values, outmigration, and disinvestment.",
        "In the 7th District, we don't have the luxury of waiting on top-down reform. We must:",
      ],
      items: [
        "Create community-led educational oversight boards",
        "Tie school renovation directly to local workforce development",
        "Modernize curriculum to align with 21st-century jobs",
        "Incentivize teachers to live in the district they serve",
      ],
      subsections: [
        {
          title: "Outcome",
          body: "When families believe in the local school system, they buy in. Literally.",
          items: [
            "Property values go up.",
            "Families stay longer.",
            "Local businesses have a larger customer base.",
            "Education becomes an economic multiplier.",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "How These Factors Create a Launchpad for Local, State, and Regional Green Infrastructure Projects",
      paragraphs: [
        "When you combine:",
      ],
      items: [
        "Stable, civically engaged residents",
        "Homeownership among essential workers",
        "Empowered women-led businesses",
        "Stronger schools and higher property values",
      ],
      subsections: [
        {
          title: "",
          body:
            "You don't just get a healthier neighborhood — you get a district ready to lead on big, systemic change. This is where green infrastructure comes in.",
        },
        {
          title: "",
          body:
            "Green infrastructure projects — like stormwater systems, solar panels, urban agriculture, and EV charging stations — require community buy-in, skilled labor, and long-term stewardship.",
        },
        {
          title: "",
          body: "The 7th District can become the ideal urban testbed for these projects because:",
          items: [
            "It has underutilized land and vacant properties",
            "A growing population of educated, environmentally conscious residents",
            "Local institutions willing to partner (schools, churches, community groups)",
          ],
        },
        {
          title: "",
          body: "And crucially:",
          items: [
            "The 7th has a concentrated voter base that can be mobilized to push for state and regional partnerships.",
          ],
        },
        {
          title: "",
          body:
            "We can leverage our demographic and electoral power to demand Milwaukee's share of federal and state green investment dollars.",
        },
      ],
      closing:
        "In short: If Milwaukee wants to lead the Midwest in climate resilience and urban sustainability, it starts in the 7th.",
    },
  ] satisfies readonly StrategicArgument[],
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
