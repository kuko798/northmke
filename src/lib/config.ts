/**
 * Central platform configuration — domains, contact, donations, socials, campaign phase.
 * Set NEXT_PUBLIC_DONATION_URL to your ActBlue, Anedot, Stripe Checkout, or PayPal link when ready.
 * Set NEXT_PUBLIC_CAMPAIGN_PHASE to control awareness vs. campaign features.
 */
export const siteUrl = "https://northmke.com";

export type CampaignPhase = "awareness" | "persuasion" | "campaign";

export const campaignPhase: CampaignPhase =
  (typeof process !== "undefined" &&
    (process.env.NEXT_PUBLIC_CAMPAIGN_PHASE as CampaignPhase | undefined)) ||
  "awareness";

export const phaseConfig = {
  awareness: {
    showDonate: true,
    disclaimer: null as string | null,
    siteDescription:
      "Community development and civic engagement platform for North Milwaukee.",
  },
  persuasion: {
    showDonate: true,
    disclaimer: "Paid for by NorthMKE.",
    siteDescription:
      "Community development and civic engagement platform for North Milwaukee.",
  },
  campaign: {
    showDonate: true,
    disclaimer: "Paid for by NorthMKE.",
    siteDescription:
      "Community development and civic engagement platform for North Milwaukee.",
  },
} as const;

export const activePhase = phaseConfig[campaignPhase];

/** Official platform logo — transparent PNG (`public/images/campaign-logo.png`). */
export const logo = {
  src: "/images/campaign-logo.png",
  width: 560,
  height: 446,
} as const;

/**
 * Home hero photography — North Sherman Blvd & West North Avenue, Milwaukee.
 */
export const heroPhoto = {
  src: "/images/hero-north-sherman.jpg",
  alt: "Milwaukee street signs at North Sherman Boulevard and West North Avenue",
  caption: "North Sherman Boulevard & West North Avenue, Milwaukee",
} as const;

export const brand = {
  name: "NorthMKE",
  nameWithTm: "NorthMKE™",
  tagline: "Building Wealth, Health, Safety, and Opportunity Across North Milwaukee.",
  domain: "northmke.com",
  colors: {
    navy: "#0a1f3c",
    navyDark: "#061226",
    gold: "#c9a227",
    goldLight: "#e3cf7a",
    black: "#0a0a0a",
  },
} as const;

export const disclaimer = activePhase.disclaimer;

export const emails = {
  info: "info@northmke.com",
  press: "press@northmke.com",
  volunteer: "volunteer@northmke.com",
} as const;

/** Preset donation amounts in USD (whole dollars). */
export const donationPresets = [10, 25, 50, 100, 250] as const;

/**
 * When set (e.g. in Vercel env), "Donate Securely" will open this URL.
 * Many platforms accept amount via query string — adjust `buildDonationHref` in DonateCard if needed.
 */
export const donationCheckoutUrl =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_DONATION_URL
    ? process.env.NEXT_PUBLIC_DONATION_URL
    : "";

/** External merch storefront (Shopify, Printful, etc.). When set, product CTAs open this URL. */
export const shopCheckoutUrl =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_SHOP_URL
    ? process.env.NEXT_PUBLIC_SHOP_URL
    : "";

/** Google Maps JavaScript API key for the voting map. */
export const googleMapsApiKey =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    : "";

/** Optional Cloud-based map style ID for Advanced Markers. */
export const googleMapsMapId =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
    ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID
    : "";

/** Append ?amount= for processors that accept it; falls back to base URL. */
export function getDonationUrl(amountDollars: number): string | null {
  if (!donationCheckoutUrl || amountDollars <= 0) return null;
  try {
    const u = new URL(donationCheckoutUrl);
    u.searchParams.set("amount", String(amountDollars));
    return u.toString();
  } catch {
    return donationCheckoutUrl;
  }
}

export const socials = [
  { label: "Facebook", handle: "@NORTHMKE", href: "https://www.facebook.com/NORTHMKE" },
  { label: "Instagram", handle: "@NORTHMKE", href: "https://www.instagram.com/NORTHMKE" },
  { label: "X", handle: "@NORTHMKE", href: "https://x.com/NORTHMKE" },
  { label: "TikTok", handle: "@NORTHMKE", href: "https://www.tiktok.com/@NORTHMKE" },
  { label: "YouTube", handle: "NORTHMKE", href: "https://www.youtube.com/@NORTHMKE" },
  { label: "LinkedIn", handle: "NorthMKE", href: "https://www.linkedin.com/company/northmke" },
  { label: "Threads", handle: "@NORTHMKE", href: "https://www.threads.net/@NORTHMKE" },
] as const;

const baseNavigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/platform", label: "Platform" },
  { href: "/district-7", label: "District 7" },
  { href: "/map", label: "Map" },
  { href: "/shop", label: "Shop" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
] as const;

/** Navigation items filtered by current campaign phase. Donate is a separate button in the navbar. */
export function getNavigation() {
  return [...baseNavigation];
}

export const navigation = getNavigation();
