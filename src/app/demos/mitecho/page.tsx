"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { Reveal } from "@/components/proposal/Reveal";

const PHONE = "(801) 404-6896";
const PHONE_HREF = "tel:+18014046896";

type Size = "small" | "medium" | "large" | "xl";
type Material = "asphalt" | "architectural" | "metal" | "tile";
type Service = "replacement" | "major" | "minor" | "inspection";
type Condition = "good" | "fair" | "poor" | "emergency";

const SIZE_BASE: Record<Size, [number, number]> = {
  small: [8000, 12000],
  medium: [12000, 18000],
  large: [18000, 25000],
  xl: [25000, 35000],
};
const MATERIAL_MULT: Record<Material, number> = {
  asphalt: 1,
  architectural: 1.15,
  metal: 1.4,
  tile: 1.6,
};
const SERVICE_MULT: Record<Service, number> = {
  replacement: 1,
  major: 0.4,
  minor: 0.2,
  inspection: 0,
};
const CONDITION_MULT: Record<Condition, number> = {
  good: 1,
  fair: 1.05,
  poor: 1.15,
  emergency: 1.25,
};

function fmt(n: number) {
  return `$${Math.round(n / 100) * 100}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function MiTechoDemoPage() {
  return (
    <main className="min-h-screen w-full bg-ink text-white selection:bg-brand-red selection:text-white">
      <SarkBanner />
      <NavBar />
      <Hero />
      <BeforeAfter />
      <Calculator />
      <Reviews />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ----------------------------- SARK BANNER ----------------------------- */

function SarkBanner() {
  return (
    <div className="sticky top-0 z-50 w-full bg-brand-red px-4 py-2 text-center font-display text-[10px] tracking-[0.3em] text-white sm:text-xs">
      THIS IS A CONCEPT PREVIEW · BUILT BY{" "}
      <Link href="/proposals/mitecho" className="underline underline-offset-4">
        SARK AGENCY
      </Link>
    </div>
  );
}

/* -------------------------------- NAV --------------------------------- */

function NavBar() {
  return (
    <header className="sticky top-[28px] z-40 w-full border-b border-white/10 bg-ink/80 backdrop-blur-md sm:top-[32px]">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/images/mitecho-logo.png"
            alt="Mi Techo Roofing"
            width={140}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 font-display text-xs tracking-[0.25em] text-white/70 md:flex">
          <a href="#services" className="hover:text-white">SERVICES</a>
          <a href="#about" className="hover:text-white">ABOUT</a>
          <a href="#reviews" className="hover:text-white">REVIEWS</a>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={PHONE_HREF}
            className="hidden font-display text-sm tracking-[0.1em] text-white/85 hover:text-white sm:inline"
          >
            {PHONE}
          </a>
          <a
            href="#calculator"
            className="inline-flex items-center bg-brand-red px-4 py-2.5 font-display text-[11px] tracking-[0.2em] text-white transition-colors hover:bg-red-700 sm:px-5 sm:text-xs"
          >
            FREE INSPECTION →
          </a>
        </div>
      </div>
    </header>
  );
}

/* -------------------------------- HERO -------------------------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] w-full items-center overflow-hidden px-5 py-24 sm:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/contractor-portrait.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <Reveal>
          <div className="font-display text-xs tracking-[0.4em] text-brand-red sm:text-sm">
            OREM · PROVO · UTAH COUNTY
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.88] text-white">
            Your Roof.
            <br />
            <span className="text-brand-red">Our Reputation.</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Licensed roofers trusted by Utah County homeowners for repairs,
            replacements, and storm damage restoration.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center bg-brand-red px-8 py-5 font-display text-base tracking-[0.2em] text-white transition-colors hover:bg-red-700"
            >
              GET FREE INSPECTION →
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center border border-white/30 px-8 py-5 font-display text-base tracking-[0.15em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              {PHONE}
            </a>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-display text-[11px] tracking-[0.18em] text-white/60 sm:text-xs">
            <span className="flex items-center gap-2 text-white/85">
              <span className="text-brand-amber">★★★★★</span> 4.9 GOOGLE
            </span>
            <span>LICENSED &amp; INSURED</span>
            <span>24/7 EMERGENCY</span>
            <span>$0 DOWN OPTIONS</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- BEFORE / AFTER ---------------------------- */

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, next)));
  }, []);

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    dragging.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }
  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  }
  function onPointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    dragging.current = false;
    try {
      (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
    } catch {}
  }

  return (
    <section id="services" className="w-full px-5 py-[12vh] sm:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-brand-red" />
            <span className="font-display text-sm tracking-[0.3em] text-brand-red">
              OUR WORK
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mb-12 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            See the Difference.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div
            ref={ref}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="relative h-72 w-full cursor-ew-resize overflow-hidden border border-white/10 select-none sm:h-[480px] lg:h-[560px]"
          >
            <Image
              src="/images/team-photo.png"
              alt="After"
              fill
              sizes="(min-width: 1024px) 1280px, 100vw"
              className="object-cover"
              draggable={false}
            />
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <div className="relative h-full w-screen max-w-none">
                <Image
                  src="/images/team-photo.png"
                  alt="Before"
                  fill
                  sizes="(min-width: 1024px) 1280px, 100vw"
                  className="object-cover"
                  style={{
                    filter: "grayscale(0.85) brightness(0.55) contrast(1.1)",
                  }}
                  draggable={false}
                />
              </div>
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white shadow-[0_0_24px_rgba(220,38,38,0.6)]"
              style={{ left: `${pos}%` }}
            />
            <div
              className="pointer-events-none absolute top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-red bg-ink/90 text-white shadow-2xl"
              style={{ left: `${pos}%` }}
            >
              <span className="font-display text-sm tracking-wider">↔</span>
            </div>

            <div className="pointer-events-none absolute top-4 left-4 bg-ink/80 px-3 py-1.5 font-display text-[10px] tracking-[0.3em] text-white/90 sm:text-xs">
              BEFORE
            </div>
            <div className="pointer-events-none absolute top-4 right-4 bg-brand-red/90 px-3 py-1.5 font-display text-[10px] tracking-[0.3em] text-white sm:text-xs">
              AFTER
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-6 max-w-2xl text-sm text-white/50 sm:text-base">
            Drag the slider to compare. Every job documented, every shingle accounted for.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- CALCULATOR ----------------------------- */

function Calculator() {
  const [size, setSize] = useState<Size | "">("");
  const [material, setMaterial] = useState<Material | "">("");
  const [service, setService] = useState<Service | "">("");
  const [condition, setCondition] = useState<Condition | "">("");
  const [estimate, setEstimate] = useState<{ low: number; high: number } | "free" | null>(
    null
  );

  const ready = size && material && service && condition;

  function calculate() {
    if (!ready) return;
    if (service === "inspection") {
      setEstimate("free");
      return;
    }
    const [baseLow, baseHigh] = SIZE_BASE[size as Size];
    const m = MATERIAL_MULT[material as Material];
    const s = SERVICE_MULT[service as Service];
    const c = CONDITION_MULT[condition as Condition];
    setEstimate({
      low: Math.round(baseLow * m * s * c),
      high: Math.round(baseHigh * m * s * c),
    });
  }

  // Lead form
  const [lead, setLead] = useState({ name: "", phone: "", email: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  function onLeadSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="calculator" className="w-full px-5 py-[12vh] sm:px-8">
      <div className="mx-auto w-full max-w-[1080px]">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-brand-red" />
            <span className="font-display text-sm tracking-[0.3em] text-brand-red">
              ROOFING CALCULATOR
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mb-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            Estimate Your Roof Cost.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mb-12 max-w-2xl text-base text-white/65 sm:text-lg">
            Get a ballpark estimate in 60 seconds. We&apos;ll follow up with an exact quote.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Roof Size">
                <Select value={size} onChange={(v) => setSize(v as Size)}>
                  <option value="">Select size…</option>
                  <option value="small">Small · 1,000–1,500 sq ft</option>
                  <option value="medium">Medium · 1,500–2,500 sq ft</option>
                  <option value="large">Large · 2,500–3,500 sq ft</option>
                  <option value="xl">XL · 3,500+ sq ft</option>
                </Select>
              </Field>
              <Field label="Roof Type">
                <Select value={material} onChange={(v) => setMaterial(v as Material)}>
                  <option value="">Select material…</option>
                  <option value="asphalt">Asphalt Shingles</option>
                  <option value="architectural">Architectural Shingles</option>
                  <option value="metal">Metal Roofing</option>
                  <option value="tile">Tile</option>
                </Select>
              </Field>
              <Field label="Service Needed">
                <Select value={service} onChange={(v) => setService(v as Service)}>
                  <option value="">Select service…</option>
                  <option value="replacement">Full Replacement</option>
                  <option value="major">Major Repair</option>
                  <option value="minor">Minor Repair</option>
                  <option value="inspection">Inspection Only</option>
                </Select>
              </Field>
              <Field label="Roof Condition">
                <Select value={condition} onChange={(v) => setCondition(v as Condition)}>
                  <option value="">Select condition…</option>
                  <option value="good">Good · Maintenance</option>
                  <option value="fair">Fair · Some Damage</option>
                  <option value="poor">Poor · Significant Issues</option>
                  <option value="emergency">Emergency</option>
                </Select>
              </Field>
            </div>

            <button
              type="button"
              onClick={calculate}
              disabled={!ready}
              className="mt-8 inline-flex w-full items-center justify-center bg-brand-red px-8 py-5 font-display text-base tracking-[0.2em] text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              CALCULATE ESTIMATE →
            </button>

            {estimate && (
              <div className="mt-10 border border-brand-red/40 bg-brand-red/[0.06] p-8">
                <div className="font-display text-xs tracking-[0.3em] text-brand-red">
                  ESTIMATED RANGE
                </div>
                <div className="mt-3 font-display text-5xl text-white sm:text-6xl">
                  {estimate === "free" ? (
                    "FREE"
                  ) : (
                    <>
                      {fmt(estimate.low)} <span className="text-white/40">–</span>{" "}
                      {fmt(estimate.high)}
                    </>
                  )}
                </div>
                <p className="mt-4 text-sm text-white/60 sm:text-base">
                  {estimate === "free"
                    ? "Roof inspections are always on the house. Book one below."
                    : "Final pricing depends on inspection findings, accessibility, and materials chosen."}
                </p>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <h3 className="font-display text-2xl text-white sm:text-3xl">
                    Want an exact quote?
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Drop your info — a project manager will call you back within 30 minutes.
                  </p>

                  {submitted ? (
                    <div className="mt-6 border border-brand-amber/40 bg-brand-amber/[0.05] p-6">
                      <div className="font-display text-xl text-brand-amber sm:text-2xl">
                        Thanks, {lead.name.split(" ")[0] || "we got it"}!
                      </div>
                      <p className="mt-2 text-sm text-white/70">
                        We&apos;ll call you within 30 minutes to schedule your free inspection.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={onLeadSubmit}
                      className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                      <LeadInput
                        label="Full Name"
                        value={lead.name}
                        onChange={(v) => setLead({ ...lead, name: v })}
                        required
                      />
                      <LeadInput
                        label="Phone"
                        type="tel"
                        value={lead.phone}
                        onChange={(v) => setLead({ ...lead, phone: v })}
                        required
                      />
                      <LeadInput
                        label="Email"
                        type="email"
                        value={lead.email}
                        onChange={(v) => setLead({ ...lead, email: v })}
                        required
                      />
                      <LeadInput
                        label="Address"
                        value={lead.address}
                        onChange={(v) => setLead({ ...lead, address: v })}
                        required
                      />
                      <button
                        type="submit"
                        className="sm:col-span-2 mt-2 inline-flex items-center justify-center bg-brand-red px-8 py-5 font-display text-base tracking-[0.2em] text-white transition-colors hover:bg-red-700"
                      >
                        GET MY FREE QUOTE →
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="font-display text-[10px] tracking-[0.25em] text-white/50">
        {label.toUpperCase()}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Select({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full appearance-none border border-white/15 bg-ink px-4 py-3 text-white outline-none transition-colors hover:border-white/30 focus:border-brand-red"
    >
      {children}
    </select>
  );
}

function LeadInput({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-display text-[10px] tracking-[0.25em] text-white/50">
        {label.toUpperCase()}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border border-white/15 bg-ink px-4 py-3 text-white outline-none transition-colors hover:border-white/30 focus:border-brand-red"
      />
    </label>
  );
}

/* ------------------------------ REVIEWS ------------------------------- */

const REVIEWS = [
  {
    text: "Mi Techo made the entire process smooth and stress free. They gave me clear options based on my goals and budget.",
    name: "Aaron K.",
    city: "Orem, UT",
  },
  {
    text: "They handled the entire insurance claim process for me. Highly professional and excellent quality work.",
    name: "Carlos R.",
    city: "Orem, UT",
  },
  {
    text: "Quick to respond, figured out the issue right away, and got it fixed properly. Came back after a storm to check.",
    name: "Moroni L.",
    city: "Orem, UT",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="w-full px-5 py-[12vh] sm:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-brand-red" />
            <span className="font-display text-sm tracking-[0.3em] text-brand-red">
              REVIEWS
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mb-12 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-white">
            What Homeowners Say.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 120}>
              <div className="flex h-full flex-col border border-white/10 bg-white/[0.02] p-8">
                <div className="font-display text-lg tracking-wider text-brand-amber">
                  ★★★★★
                </div>
                <p className="mt-4 flex-1 text-base leading-relaxed text-white/80">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="font-display text-sm tracking-wider text-white">
                    {r.name}
                  </div>
                  <div className="text-xs text-white/50">{r.city}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA ----------------------------------- */

function FinalCTA() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden px-5 py-[15vh] sm:px-8"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/happy-homeowners.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-brand-red/10 to-ink" />
      </div>

      <div className="mx-auto w-full max-w-[1080px] text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white">
            Your Roof Isn&apos;t Going<br />
            <span className="text-brand-red">to Fix Itself.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-2xl text-base text-white/70 sm:text-lg">
            Book a free 21-point inspection. No pressure, no obligation.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center bg-brand-red px-10 py-5 font-display text-base tracking-[0.2em] text-white transition-colors hover:bg-red-700"
            >
              BOOK FREE INSPECTION →
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center border border-white/30 px-10 py-5 font-display text-base tracking-[0.15em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER -------------------------------- */

function Footer() {
  const cities = ["Orem", "Provo", "Lindon", "Pleasant Grove", "Spanish Fork"];
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Image
            src="/images/mitecho-logo.png"
            alt="Mi Techo Roofing"
            width={120}
            height={32}
            className="h-9 w-auto opacity-90"
          />
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-display text-[11px] tracking-[0.2em] text-white/50">
            {cities.map((c) => (
              <span key={c}>{c.toUpperCase()}</span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <div>© 2026 Mi Techo Roofing · Orem, UT</div>
          <Link
            href="/proposals/mitecho"
            className="font-display tracking-[0.25em] text-white/50 hover:text-white"
          >
            BUILT BY SARK AGENCY ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
