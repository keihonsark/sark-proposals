export type Proposal = {
  slug: string;
  client: string;
  clientLogo?: string;
  clientLogoText?: string;
  preparedFor: string;
  date: string;
  confidential: boolean;
  hero: {
    headline: string;
    subline: string;
    eyebrow: string;
  };
  problem: {
    eyebrow: string;
    stats: { value: string; label: string; detail: string }[];
  };
  performance: {
    eyebrow: string;
    score: number;
    bars: { name: string; multiplier: string; widthPct: number }[];
    footer: string;
  };
  seo: {
    eyebrow: string;
    stats: { value: string; label: string }[];
    findings: string[];
  };
  competitive: {
    eyebrow: string;
    headers: string[];
    rows: { metric: string; values: (string | { text: string; tone?: "bad" | "good" })[] }[];
    summary: string;
  };
  criticalIssues: {
    eyebrow: string;
    items: string[];
    closing: string;
  };
  designIssues: {
    eyebrow: string;
    items: { title: string; detail: string }[];
    closing: string;
  };
  opportunity: {
    eyebrow: string;
    items: { title: string; detail: string }[];
  };
  mockup?: {
    eyebrow: string;
    headline: string;
    description: string;
    images: string[];
  };
  whatYouGet: {
    eyebrow: string;
    title: string;
    deliverables: { title: string; detail: string }[];
  };
  investment: {
    eyebrow: string;
    setup: { label: string; price: string; detail: string };
    monthly: { label: string; price: string; detail: string };
    bonus: { label: string; price: string; detail: string };
    note: string;
  };
  results: {
    eyebrow: string;
    rows: { metric: string; value: string }[];
    disclaimer: string;
  };
  timeline: {
    eyebrow: string;
    steps: { when: string; what: string }[];
  };
  whyUs: {
    eyebrow: string;
    items: { title: string; detail: string }[];
  };
  cta: {
    eyebrow: string;
    headline: string;
    subline: string;
    sark: { name: string; title: string };
    client: { name: string; title: string };
  };
  footer: {
    contact: string;
    confidentialityLine: string;
  };
};
