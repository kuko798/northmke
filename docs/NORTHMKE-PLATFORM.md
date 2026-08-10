# NorthMKE Platform Reference

This document preserves the full Phase 1 awareness platform strategy so it survives cloud agent session resets. **Source of truth for the live site is `src/lib/content.ts`.**

## Identity

- **Brand:** NorthMKE™
- **Tagline:** Building Wealth, Health, Safety, and Opportunity Across North Milwaukee.
- **Phase:** Awareness (default) — civic platform, not official campaign
- **Domain:** northmke.com

## Mission

NorthMKE is a community development and civic engagement platform dedicated to advancing economic prosperity, neighborhood revitalization, public safety, healthcare access, environmental sustainability, and measurable public accountability throughout North Milwaukee.

## Strategic Pillars (8)

1. Housing & Neighborhood Investment
2. Women's Economic Mobility & Leadership Initiative (evidence-based; no demographic exclusion framing)
3. Public Return on Investment (ROI)
4. Green North Milwaukee
5. Community Safety & Neighborhood Protection
6. Midtown Health & Wellness District
7. Elder Nutrition & Independence Program
8. Smarter, Safer & More Accountable Public Safety Infrastructure (MPD 6th/7th split)

## Site routes

| Route | Purpose |
|-------|---------|
| `/` | Home — mission, pillars teaser, map, shop, newsletter |
| `/about` | About NorthMKE — mission, vision, phase badge |
| `/platform` | Full pillar deep-dives + digital features |
| `/approach` | Civic vs. campaign legal separation + 3 phases |
| `/district-7` | Demographic & civic engagement data pack |
| `/map` | Voting map — MKE districts 1, 2, 5, 7, 9, 10 |
| `/shop` | Merch |
| `/volunteer` | Volunteer signup |
| `/donate` | Donations |
| `/newsletter` | Newsletter signup |

## Phase framework

- **Phase 1 — Awareness:** Issue leadership, civic engagement, no candidacy solicitations
- **Phase 2 — Persuasion:** Soft contrast, list building, grassroots expansion
- **Phase 3 — Campaign:** Formal filing, fundraising, paid media

## Removed content (do not restore)

- Nathan Coe / candidate bio pages
- VOTENATECOE campaign branding
- Campaign solicitations in awareness phase

## Environment variables

- `NEXT_PUBLIC_CAMPAIGN_PHASE=awareness|persuasion|campaign`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — required for `/map`
- `NEXT_PUBLIC_DONATION_URL` — external donate checkout
- `NEXT_PUBLIC_SHOP_URL` — external merch storefront

## Git workflow reminder

Always **commit and push** feature work to `cursor/northmke-awareness-pivot-d87e` (or main) so cloud session resets do not lose progress.
