import type { Proposal } from "./types";

export const mitecho: Proposal = {
  slug: "mitecho",
  client: "Mi Techo Roofing",
  clientLogo: "/images/mitecho-logo.png",
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
      "Keyword cannibalization: 'roof repair Provo' ranks at two positions — two pages competing against each other, splitting ranking power. Quick fix with a 301 redirect.",
      "98 referring domains — mostly DR 2–8 range with no high-authority industry or local links",
      "Zero city-specific landing pages",
      "Missing from all major citation networks",
      "No blog content — competitors publish regularly",
      "Template images carry competitor branding (Campbell's Tire)",
      "No LocalBusiness schema markup",
    ],
  },

  competitive: {
    eyebrow: "Competitive landscape",
    headers: ["Metric", "Mi Techo", "A1 Roofing", "Olympus", "Liberty", "Allstar"],
    rows: [
      {
        metric: "Organic Keywords",
        values: [
          { text: "61", tone: "bad" },
          { text: "383", tone: "good" },
          { text: "343", tone: "good" },
          "Active",
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
          "—",
        ],
      },
      {
        metric: "Monthly Ad Budget",
        values: [
          { text: "$0", tone: "bad" },
          "$0",
          { text: "$34,750", tone: "good" },
          "Active",
          "—",
        ],
      },
      {
        metric: "Google Reviews",
        values: [
          { text: "~15", tone: "bad" },
          { text: "~500", tone: "good" },
          { text: "187", tone: "good" },
          "—",
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
          "NO",
        ],
      },
    ],
    summary:
      "A1 dominates organic. Olympus proves paid ads work ($34K/mo). Liberty and Allstar are gaining ground with stronger local content. Mi Techo has done neither — the upside is enormous.",
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
      "These are easy fixes that will immediately improve credibility and trust.",
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
      "Small design upgrades make a big difference in how homeowners perceive your business.",
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

  mockup: {
    eyebrow: "What this could look like",
    headline: "A site that matches the quality of your work.",
    description:
      "Clean design. Fast load times. Forms that actually capture leads. Built for mobile. Built for Utah County homeowners.",
    images: [
      "/images/contractor-portrait.png",
      "/images/happy-homeowners.png",
      "/images/team-photo.png",
    ],
  },

  whatYouGet: {
    eyebrow: "What you get",
    title: "Everything You Need to Own Utah County",
    deliverables: [
      {
        title: "Website Redesign",
        detail:
          "Complete rebuild. Fast, mobile-first, conversion-optimized. Click-to-call, chat, proper lead capture forms including roofing calculator. Built and handed off to you.",
      },
      {
        title: "Google LSA + Search Ads",
        detail:
          "Full campaign build, optimization, bid strategy, lead quality review, and dispute management. A/B testing on ad copy, landing pages, and CTAs. You cover ad spend — we maximize every dollar.",
      },
      {
        title: "Ad Creative + Copy",
        detail:
          "We create all ad copy, graphics, and landing pages. Continuous A/B testing across headlines, images, and offers to find what converts best in your market.",
      },
      {
        title: "JobNimbus Integration + Automation",
        detail:
          "We plug directly into your existing JobNimbus CRM. Website leads, LSA leads, and ad leads auto-create contacts with source tracking. Job completion triggers review requests. No new software to learn — we supercharge what you already use.",
      },
      {
        title: "Call Tracking + Transcripts",
        detail:
          "Dedicated tracking numbers on every campaign. Call recordings and AI transcripts so we can coach on close rates and track which ads generate real appointments — not just clicks.",
      },
      {
        title: "Review Generation",
        detail:
          "Automated SMS review requests after every completed job. Target: 100+ Google reviews in 6 months to compete with legacy companies.",
      },
      {
        title: "Monthly Reporting + Strategy",
        detail:
          "Transparent dashboard: leads, cost per lead, appointments set, close rate, revenue attributed. Monthly strategy call to review performance and plan next moves.",
      },
      {
        title: "Outsourced CMO",
        detail:
          "We're not a set-it-and-forget-it agency. We embed alongside your sales and management team — available for marketing questions, strategy discussions, and business decisions. Fully invested in your growth.",
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
    eyebrow: "What we're aiming for",
    rows: [
      { metric: "Monthly lead volume (LSA + Search + Organic)", value: "50–100+" },
      { metric: "Booked appointments / month", value: "15–30" },
      { metric: "Avg. job value (repair + replacement mix)", value: "$8,000–$20,000" },
      { metric: "Target close rate on set appointments", value: "30–50%" },
      { metric: "Monthly revenue potential", value: "$40K–$150K+" },
    ],
    disclaimer:
      "These are targets, not guarantees. Every market is different. What we guarantee is full transparency — you'll see every lead, every call transcript, every dollar spent, and every appointment set. We adjust strategy monthly based on real data.",
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
    client: { name: "Terry Bailey", title: "Founder, Mi Techo Roofing" },
  },

  footer: {
    contact: "hello@sark.agency  |  sark.agency",
    confidentialityLine: "Confidential — Prepared exclusively for Mi Techo Roofing",
  },
};
