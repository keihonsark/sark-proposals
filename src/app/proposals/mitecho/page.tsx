import Image from "next/image";
import type { Metadata } from "next";
import { mitecho } from "@/data/proposals/mitecho";
import { Hero } from "@/components/proposal/Hero";
import { Section } from "@/components/proposal/Section";
import { StatCards } from "@/components/proposal/StatCards";
import { PerformanceBlock } from "@/components/proposal/PerformanceBlock";
import { SeoBlock } from "@/components/proposal/SeoBlock";
import { ComparisonTable } from "@/components/proposal/ComparisonTable";
import { IssuesList } from "@/components/proposal/IssuesList";
import { AccentList } from "@/components/proposal/AccentList";
import { DeliverableGrid } from "@/components/proposal/DeliverableGrid";
import { InvestmentCards } from "@/components/proposal/InvestmentCards";
import { MockupShowcase } from "@/components/proposal/MockupShowcase";
import { ResultsTable } from "@/components/proposal/ResultsTable";
import { Timeline } from "@/components/proposal/Timeline";
import { SignatureBlock } from "@/components/proposal/SignatureBlock";
import { Reveal } from "@/components/proposal/Reveal";
import { Tracker } from "@/components/proposal/Tracker";

export const metadata: Metadata = {
  title: "Mi Techo Roofing — Digital Growth Proposal | SARK Agency",
  description:
    "Audit findings, strategy, and partnership terms prepared for Mi Techo Roofing.",
  robots: { index: false, follow: false },
};

export default function MiTechoProposalPage() {
  const p = mitecho;

  return (
    <main className="min-h-screen w-full bg-ink text-white selection:bg-brand-red selection:text-white">
      <Tracker client={p.client} />

      <Hero
        preparedFor={p.preparedFor}
        clientName={p.client}
        clientLogo={p.clientLogo}
        clientLogoText={p.clientLogoText}
        headline={p.hero.headline}
        subline={p.hero.subline}
        date={p.date}
        confidential={p.confidential}
      />

      <Section eyebrow={p.problem.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            Here&apos;s where things stand today.
          </h2>
        </Reveal>
        <StatCards stats={p.problem.stats} />
      </Section>

      <Section eyebrow={p.performance.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            Your site is working harder than it should.<br />
            <span className="text-white/50">Here&apos;s what Google sees.</span>
          </h2>
        </Reveal>
        <PerformanceBlock
          score={p.performance.score}
          bars={p.performance.bars}
          footer={p.performance.footer}
        />
      </Section>

      <Section eyebrow={p.seo.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            There&apos;s room to grow.<br />
            <span className="text-white/50">A lot of room.</span>
          </h2>
        </Reveal>
        <SeoBlock stats={p.seo.stats} findings={p.seo.findings} />
      </Section>

      <Section eyebrow={p.competitive.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            Here&apos;s how you stack up.
          </h2>
        </Reveal>
        <ComparisonTable
          headers={p.competitive.headers}
          rows={p.competitive.rows}
          summary={p.competitive.summary}
        />
      </Section>

      <Section eyebrow={p.criticalIssues.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            Quick wins<br />
            <span className="text-brand-red">we can fix immediately.</span>
          </h2>
        </Reveal>
        <IssuesList items={p.criticalIssues.items} closing={p.criticalIssues.closing} />
      </Section>

      <Section eyebrow={p.designIssues.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            Your site deserves better design.
          </h2>
        </Reveal>
        <AccentList items={p.designIssues.items} closing={p.designIssues.closing} />
      </Section>

      <Section
        eyebrow={p.opportunity.eyebrow}
        className="border-y border-brand-amber/20 bg-gradient-to-b from-brand-amber/[0.03] to-transparent"
      >
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            Here&apos;s what makes this exciting.
          </h2>
        </Reveal>
        <AccentList items={p.opportunity.items} accent="amber" />
      </Section>

      {p.mockup && (
        <Section eyebrow={p.mockup.eyebrow}>
          <Reveal>
            <h2 className="mb-16 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
              {p.mockup.headline}
            </h2>
          </Reveal>
          <MockupShowcase
            description={p.mockup.description}
            images={p.mockup.images}
          />
        </Section>
      )}

      <Section eyebrow={p.whatYouGet.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            {p.whatYouGet.title}
          </h2>
        </Reveal>
        <DeliverableGrid items={p.whatYouGet.deliverables} />
      </Section>

      <Section eyebrow={p.investment.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            Simple terms.<br />
            <span className="text-white/50">No surprises.</span>
          </h2>
        </Reveal>
        <InvestmentCards
          setup={p.investment.setup}
          monthly={p.investment.monthly}
          bonus={p.investment.bonus}
          note={p.investment.note}
        />
      </Section>

      <Section eyebrow={p.results.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            What we expect to see.
          </h2>
        </Reveal>
        <ResultsTable rows={p.results.rows} disclaimer={p.results.disclaimer} />
      </Section>

      <Section eyebrow={p.timeline.eyebrow}>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            From signed to scaling in 90 days.
          </h2>
        </Reveal>
        <Timeline steps={p.timeline.steps} />
      </Section>

      <Section eyebrow={p.whyUs.eyebrow}>
        <Reveal>
          <Image
            src="/images/sark-logo-dark.png"
            alt="SARK Agency"
            width={140}
            height={36}
            className="mb-12 h-9 w-auto"
          />
        </Reveal>
        <Reveal>
          <h2 className="mb-16 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            Built different on purpose.
          </h2>
        </Reveal>
        <AccentList items={p.whyUs.items} />
      </Section>

      <Section
        eyebrow={p.cta.eyebrow}
        className="border-t border-white/10 bg-gradient-to-b from-transparent to-brand-red/[0.05]"
      >
        <Reveal>
          <h2 className="mb-6 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white">
            {p.cta.headline}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-16 text-lg text-white/60 sm:text-xl">{p.cta.subline}</p>
        </Reveal>
        <SignatureBlock
          client={p.client}
          sark={p.cta.sark}
          clientContact={p.cta.client}
        />
      </Section>

      <footer className="border-t border-white/10 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Image
            src="/images/sark-logo-dark.png"
            alt="SARK Agency"
            width={120}
            height={32}
            className="h-7 w-auto opacity-80"
          />
          <div className="font-display text-xs tracking-[0.25em] text-white/50">
            {p.footer.contact}
          </div>
          <div className="text-xs italic text-white/40">{p.footer.confidentialityLine}</div>
        </div>
      </footer>
    </main>
  );
}
