import type { Proposal } from "./types";

export const mitecho: Proposal = {
  slug: "mitecho",
  client: "Mi Techo Roofing",
  clientLogoText: "MI TECHO",
  preparedFor: "Prepared for Mi Techo Roofing",
  date: "April 2026",
  confidential: true,

  hero: {
    eyebrow: "Digital Growth Proposal",
    headline: "Digital Growth Proposal",
    subline: "Audit Findings, Strategy & Partnership Terms",
  },

  problem: {
    eyebrow: "What we found",
    stats: [
      {
        value: "7/100",
        label: "Mobile PageSpeed",
        detail: "All Core Web Vitals failing. 18.4s load. 3 insecure requests.",
      },
      {
        value: "DR 2",
        label: "Domain Authority",
        detail: "61 keywords. 7 clicks/mo. ~150 spam backlinks.",
      },
      {
        value: "$0",
        label: "Lifetime Ad Spend",
        detail: "Never advertised. Competitor spends $34,750/mo.",
      },
    ],
  },

  performance: {
    eyebrow: "Site performance",
    score: 7,
    bars: [
      { name: "LCP", multiplier: "7.4× over", widthPct: 74 },
      { name: "TBT", multiplier: "17.6× over", widthPct: 100 },
      { name: "CLS", multiplier: "8.3× over", widthPct: 83 },
      { name: "FCP", multiplier: "1.7× over", widthPct: 17 },
      { name: "SI", multiplier: "2.7× over", widthPct: 27 },
    ],
    footer: "Accessibility: 77/100  |  Best Practices: 54/100  |  3 Insecure HTTP Requests",
  },

  seo: {
    eyebrow: "SEO & domain authority",
    stats: [
      { value: "DR 2", label: "Domain Rating" },
      { value: "61", label: "Keywords" },
      { value: "7", label: "Clicks / Month" },
      { value: "$0", label: "Ad Spend" },
    ],
    findings: [
      "~150 backlinks — mostly spam / auto-generated",
      "Zero city-specific landing pages",
      "Missing from all major citation networks",
      "No blog content — competitors publish regularly",
      "Template images carry competitor branding (Campbell's Tire)",
      "No LocalBusiness schema markup",
    ],
  },

  competitive: {
    eyebrow: "Competitive landscape",
    headers: ["Metric", "Mi Techo", "A1 Roofing", "Olympus", "Liberty"],
    rows: [
      {
        metric: "Organic Keywords",
        values: [
          { text: "61", tone: "bad" },
          { text: "383", tone: "good" },
          { text: "343", tone: "good" },
          "Active",
        ],
      },
      {
        metric: "Monthly SEO Clicks",
        values: [
          { text: "7", tone: "bad" },
          { text: "262", tone: "good" },
          { text: "85", tone: "good" },
          "—",
        ],
      },
      {
        metric: "Paid Keywords",
        values: [
          { text: "0", tone: "bad" },
          "0",
          { text: "213", tone: "good" },
          "Active",
        ],
      },
      {
        metric: "Monthly Ad Budget",
        values: [
          { text: "$0", tone: "bad" },
          "$0",
          { text: "$34,750", tone: "good" },
          "Active",
        ],
      },
      {
        metric: "Google Reviews",
        values: [
          { text: "~15", tone: "bad" },
          { text: "~500", tone: "good" },
          { text: "187", tone: "good" },
          "—",
        ],
      },
      {
        metric: "Google Guaranteed",
        values: [
          { text: "NO", tone: "bad" },
          { text: "YES", tone: "good" },
          { text: "YES", tone: "good" },
          "—",
        ],
      },
      {
        metric: "Running Ads Now",
        values: [
          { text: "NO", tone: "bad" },
          "NO",
          { text: "YES", tone: "good" },
          { text: "YES", tone: "good" },
        ],
      },
    ],
    summary:
      "A1 dominates organic. Olympus proves paid ads work ($34K/mo). Mi Techo has done neither — the upside is enormous.",
  },

  criticalIssues: {
    eyebrow: "Critical issues",
    items: [
      "Image files named “Campbell's Tire & Service Layton UT” — competitor assets in your site",
      "Header Facebook icon links to CampbellsTireandService — not Mi Techo",
      "Two different phone numbers in CTAs (801-404-5896 vs 801-404-6896)",
      "Twitter/X, YouTube, Instagram links all point to mitechoroofing.com — no real profiles",
      "3 insecure HTTP image requests — mixed content flagged by Google",
      "No online scheduling, no chat widget, no SMS capability",
      "No Google Guaranteed / LSA badge — competitors display theirs prominently",
      "Cookie consent popup covers mobile content on a 7/100 performance page",
    ],
    closing:
      "Your current provider reskinned another client's site and left their branding inside yours.",
  },

  designIssues: {
    eyebrow: "Design & user experience",
    items: [
      {
        title: "No Brand Cohesion",
        detail: "Red, neon green, bright blue, and black compete on one page.",
      },
      {
        title: "Poor Text Readability",
        detail:
          "Neon green text on dark backgrounds. Cursive italic white text over busy photos.",
      },
      {
        title: "Generic Stock Elements",
        detail: "“5 Star Rating” medallions and badges are all clip-art.",
      },
      {
        title: "Lead Form Captures Only First Name",
        detail: "No phone, no email, no service type. Can't follow up.",
      },
      {
        title: "Template Design, Not Custom",
        detail: "Multiple font families, recycled layouts from other industries.",
      },
    ],
    closing:
      "Your site is the first thing a homeowner sees after a Google search. Right now, it's working against you.",
  },

  opportunity: {
    eyebrow: "The opportunity",
    items: [
      {
        title: "“Mi Techo” = Bilingual Goldmine",
        detail:
          "Utah's Hispanic population is ~15% and growing. Your brand already signals Spanish-speaking.",
      },
      {
        title: "4.9★ Rating — Quality is Proven",
        detail: "Automated review requests can 10× your count in 6 months.",
      },
      {
        title: "Insurance Restoration = $15K–40K Jobs",
        detail: "One closed insurance job pays for months of ad spend.",
      },
      {
        title: "$0 Ad History = Clean Slate",
        detail: "Olympus proves $34K/mo is viable ROI. You can start at $2.5K.",
      },
    ],
  },

  whatYouGet: {
    eyebrow: "What you get",
    title: "Everything You Need to Dominate Utah County",
    deliverables: [
      {
        title: "Website Redesign",
        detail:
          "Complete rebuild. Fast, mobile-first, conversion-optimized. Click-to-call, chat, proper forms. Built and handed off to you.",
      },
      {
        title: "Google LSA Management",
        detail:
          "Full optimization, lead quality review, bid strategy, dispute management. Maximize your $2–4K/week budget.",
      },
      {
        title: "Google Search Ads",
        detail:
          "Campaigns for “roof repair Orem,” “emergency roofer Provo,” “storm damage Utah County.” You cover ad spend.",
      },
      {
        title: "CRM + Automation",
        detail:
          "Lead → instant text + email in seconds. Pipeline tracking. Automated review requests post-job.",
      },
      {
        title: "Review Generation",
        detail:
          "SMS review requests after every job. Target: 100+ Google reviews in 6 months.",
      },
      {
        title: "Monthly Reporting",
        detail:
          "Transparent dashboard: leads, cost per lead, close rate, revenue. You see everything.",
      },
    ],
  },

  investment: {
    eyebrow: "Investment",
    setup: {
      label: "Setup Fee",
      price: "$1,500",
      detail:
        "One-time. Website redesign, ad campaign build, CRM setup, automation wiring. Everything goes live within 2–3 weeks.",
    },
    monthly: {
      label: "Monthly Retainer",
      price: "$1,500/mo",
      detail:
        "LSA management, search ads, optimization, reporting, ongoing support. Month-to-month. Cancel anytime.",
    },
    bonus: {
      label: "Performance Bonus",
      price: "5% Commission",
      detail:
        "On closed jobs from leads we generate, after hitting $50K/month in attributed revenue. We win when you win.",
    },
    note: "Ad spend is separate and goes directly to your Google account — you own it.",
  },

  results: {
    eyebrow: "First 90 days",
    rows: [
      { metric: "LSA leads / month", value: "40–80+ (at $30–80/lead)" },
      { metric: "Search ad leads / month", value: "15–30+" },
      { metric: "Avg close rate (industry)", value: "15–25%" },
      { metric: "Revenue per closed job", value: "$10,000–$25,000" },
      { metric: "Estimated monthly revenue", value: "$60K–$200K+" },
    ],
    disclaimer:
      "Estimates based on industry benchmarks and competitor data. We track everything transparently.",
  },

  timeline: {
    eyebrow: "How we get there",
    steps: [
      { when: "Week 1", what: "Fix critical site issues + launch LSA & Search Ads" },
      { when: "Week 2–3", what: "New website built and deployed" },
      { when: "Week 3–4", what: "City landing pages for SEO + automation live" },
      { when: "Month 2", what: "Optimize campaigns + launch review generation" },
      { when: "Month 3+", what: "Scale with Meta/TikTok ads + bilingual marketing" },
    ],
  },

  whyUs: {
    eyebrow: "Why us",
    items: [
      {
        title: "We Build the Tech AND Run the Ads",
        detail: "One team. Website, CRM, automations, ad campaigns.",
      },
      {
        title: "Home Services is Our Specialty",
        detail: "We partner with roofing, HVAC, and solar companies.",
      },
      {
        title: "Speed-to-Lead Systems",
        detail: "Our automation responds in seconds, not hours.",
      },
      {
        title: "No Long-Term Contracts",
        detail: "Month-to-month. Results keep you.",
      },
    ],
  },

  cta: {
    eyebrow: "Let's go",
    headline: "Ready to Build This Together?",
    subline: "From chaos to clarity.",
    sark: { name: "Keihon Sarkhosh", title: "Founder, SARK Agency" },
    client: { name: "Terry Bailey", title: "Co-Founder, Mi Techo Roofing" },
  },

  footer: {
    contact: "hello@sark.agency  |  sark.agency",
    confidentialityLine: "Confidential — Prepared exclusively for Mi Techo Roofing",
  },
};
