"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Reveal } from "@/components/proposal/Reveal";

/* eslint-disable @typescript-eslint/no-explicit-any */

const PHONE = "(801) 404-6896";
const PHONE_HREF = "tel:+18014046896";
const GMAPS_KEY = "AIzaSyCE6KM3DxgCo3eEEQm7JPgBqa1bvdmjLq8";

declare global {
  interface Window {
    google?: any;
    __mtInitGoogle?: () => void;
  }
}

const NAVY = "#0f1729";

export default function MiTechoDemoPage() {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <SarkBanner />
      <NavBar />
      <Hero />
      <TrustStrip />
      <Services />
      <BeforeAfterSection />
      <WhyUs />
      <Financing />
      <RoofEstimator />
      <LeadFormSection />
      <Reviews />
      <FinalCTA />
      <FooterSection />
      <MobileStickyBar />
      <BackToProposal />
    </main>
  );
}

function BackToProposal() {
  return (
    <Link
      href="/proposals/mitecho"
      className="fixed right-4 bottom-20 z-[55] inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6 sm:bottom-6"
    >
      ← Back to Proposal
    </Link>
  );
}

/* ============================== SARK BANNER ============================ */

function SarkBanner() {
  return (
    <div className="sticky top-0 z-[60] w-full bg-red-600 px-4 py-2 text-center text-[10px] font-bold tracking-[0.3em] text-white sm:text-[11px]">
      CONCEPT PREVIEW · BUILT BY{" "}
      <Link href="/proposals/mitecho" className="underline underline-offset-4 hover:text-white/80">
        SARK AGENCY
      </Link>
    </div>
  );
}

/* ================================ NAV ================================== */

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-[28px] z-50 w-full transition-all duration-300 sm:top-[30px] ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          <Link href="#top" className="flex items-center gap-2">
            <Image
              src="/images/mitecho-logo.png"
              alt="Mi Techo Roofing"
              width={160}
              height={48}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-[15px] font-semibold text-slate-700 transition-colors hover:text-red-600">
              Roofing
            </a>
            <a href="#services" className="text-[15px] font-semibold text-slate-700 transition-colors hover:text-red-600">
              Gutters &amp; Siding
            </a>
            <a href="#services" className="text-[15px] font-semibold text-slate-700 transition-colors hover:text-red-600">
              Storm Damage
            </a>
            <a href="#why" className="text-[15px] font-semibold text-slate-700 transition-colors hover:text-red-600">
              About
            </a>
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href="#estimator"
              className="text-[15px] font-bold text-red-600 transition-colors hover:text-red-700"
            >
              Free Roof Estimate
            </a>
            <a
              href={PHONE_HREF}
              className="cta-press inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-red-700"
            >
              <PhoneIcon className="h-4 w-4" />
              {PHONE}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-900 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[106px] z-40 overflow-y-auto bg-white transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 p-6">
          {[
            ["Roofing", "#services"],
            ["Gutters & Siding", "#services"],
            ["Storm Damage", "#services"],
            ["About", "#why"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-slate-100 py-4 text-lg font-semibold text-slate-900"
            >
              {label}
            </a>
          ))}
          <a
            href="#estimator"
            onClick={() => setMobileOpen(false)}
            className="border-b border-slate-100 py-4 text-lg font-bold text-red-600"
          >
            Free Roof Estimate
          </a>
          <a
            href={PHONE_HREF}
            onClick={() => setMobileOpen(false)}
            className="cta-press mt-6 flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-4 text-lg font-bold text-white"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ================================ HERO ================================= */

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(15,23,41,0.96) 0%, rgba(15,23,41,0.86) 45%, rgba(15,23,41,0.45) 100%)",
          }}
        />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-red-600/10 blur-[110px]" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <GoogleG className="h-4 w-4" />
              <span className="text-sm font-bold text-white">4.9</span>
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5 text-red-500" />
                ))}
              </span>
              <span className="text-sm font-medium text-white/80">15+ Reviews</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display text-[clamp(3rem,9vw,5rem)] font-extrabold leading-[0.95] tracking-tight text-white">
              Utah County&apos;s
              <br />
              Trusted{" "}
              <span className="text-red-500">Roofing</span>
              <br />
              Experts.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Roof repair. Replacement. Storm damage restoration. All with{" "}
              <span className="font-semibold text-white">$0 down financing</span>.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#estimator"
                className="cta-press inline-flex items-center justify-center rounded-lg bg-red-600 px-7 py-4 text-base font-bold tracking-wide text-white shadow-xl shadow-red-600/30 transition-colors hover:bg-red-700"
              >
                Get Free Estimate →
              </a>
              <a
                href={PHONE_HREF}
                className="cta-press inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-7 py-4 text-base font-bold tracking-wide text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {PHONE}
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-[13px] font-semibold text-white/70 sm:text-sm">
              <TrustItem>Licensed &amp; Insured</TrustItem>
              <Dot />
              <TrustItem>24/7 Emergency</TrustItem>
              <Dot />
              <TrustItem>$0 Down Financing</TrustItem>
              <Dot />
              <TrustItem>
                <span className="text-red-500">★</span> 4.9 Google
              </TrustItem>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ children }: { children: ReactNode }) {
  return <span className="whitespace-nowrap">{children}</span>;
}
function Dot() {
  return <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />;
}

/* ============================ TRUST STRIP ============================== */

function TrustStrip() {
  return (
    <section className="border-y border-slate-200/70 bg-white py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          <Badge icon={<ShieldIcon className="h-7 w-7 text-red-600" />} title="Licensed" subtitle="Utah License #11892" />
          <Divider />
          <Badge icon={<ClockIcon className="h-7 w-7 text-red-600" />} title="24/7 Emergency" subtitle="Storm Response" />
          <Divider />
          <Badge icon={<DollarIcon className="h-7 w-7 text-red-600" />} title="$0 Down" subtitle="Flexible Financing" />
          <Divider />
          <div className="flex items-center gap-2">
            <GoogleG className="h-7 w-7" />
            <span className="text-base font-bold text-slate-900">4.9</span>
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5 text-red-600" />
              ))}
            </span>
            <span className="text-sm text-slate-500">15+ Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, title, subtitle }: { icon: ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-2.5">
      {icon}
      <div className="leading-tight">
        <div className="text-sm font-bold text-slate-900">{title}</div>
        <div className="text-xs text-slate-500">{subtitle}</div>
      </div>
    </div>
  );
}
function Divider() {
  return <div className="hidden h-10 w-px bg-slate-200 sm:block" />;
}

/* ============================== SERVICES =============================== */

const services = [
  {
    title: "Roof Repair",
    desc: "Leaks, missing shingles, flashing failures. Quick diagnosis, honest pricing, lasting fixes.",
    image: "/images/roofing/roofing-crew.png",
    icon: <WrenchIcon className="h-7 w-7" />,
  },
  {
    title: "Roof Replacement",
    desc: "Complete tear-off and rebuild. Premium shingles, manufacturer warranties, $0 down financing.",
    image: "/images/hero/hero-home.png",
    icon: <HouseIcon className="h-7 w-7" />,
  },
  {
    title: "Storm Damage & Insurance",
    desc: "We work directly with your insurance carrier. Free inspection, full claim support, zero hassle.",
    image: "/images/before-after/before-roof-1.png",
    icon: <BoltIcon className="h-7 w-7" />,
  },
  {
    title: "Gutters & Siding",
    desc: "Seamless gutters, fascia, soffit, and siding. The complete envelope your roof depends on.",
    image: "/images/about/paint-exterior.png",
    icon: <PaintIcon className="h-7 w-7" />,
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>What We Do</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Complete Roofing Services.
              <br />
              <span className="text-red-600">One Trusted Team.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              From a single missing shingle to a complete tear-off, our crews handle every job
              with the same craftsmanship.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <a
                href="#estimator"
                className="card-lift group block overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.desc}</p>
                  <span className="mt-5 inline-block text-sm font-bold text-red-600 transition-transform group-hover:translate-x-1">
                    Learn More →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================== BEFORE / AFTER ============================ */

function BeforeAfterSection() {
  return (
    <section
      className="relative overflow-hidden noise-overlay py-24 md:py-32"
      style={{ backgroundColor: NAVY }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>Real Results</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              See the Difference.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Drag the slider to see what a Mi Techo restoration looks like up close.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Reveal>
            <BeforeAfter
              before="/images/before-after/before-roof-1.png"
              after="/images/before-after/after-roof-1.png"
              caption="Complete roof replacement — Orem, UT"
            />
          </Reveal>
          <Reveal delay={140}>
            <BeforeAfter
              before="/images/before-after/before-roof-2.png"
              after="/images/before-after/after-roof-2.png"
              caption="Full storm restoration — Provo, UT"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({
  before,
  after,
  caption,
}: {
  before: string;
  after: string;
  caption: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [drag, setDrag] = useState(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(5, Math.min(95, pct)));
  }, []);

  useEffect(() => {
    if (!drag) return;
    const onMove = (e: MouseEvent) => update(e.clientX);
    const onTouch = (e: TouchEvent) => update(e.touches[0].clientX);
    const onUp = () => setDrag(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onUp);
    };
  }, [drag, update]);

  return (
    <div>
      <div
        ref={ref}
        className="relative h-64 select-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-80"
        onMouseDown={(e) => {
          setDrag(true);
          update(e.clientX);
        }}
        onTouchStart={(e) => {
          setDrag(true);
          update(e.touches[0].clientX);
        }}
        style={{ cursor: "ew-resize" }}
      >
        {/* BEFORE — full background */}
        <Image
          src={before}
          alt={`Before — ${caption}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none"
          draggable={false}
        />
        <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          Before
        </span>

        {/* AFTER — clipped overlay */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Image
            src={after}
            alt={`After — ${caption}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover pointer-events-none"
            draggable={false}
          />
          <span className="absolute right-3 top-3 z-10 rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            After
          </span>
        </div>

        {/* Drag handle */}
        <div
          className="absolute inset-y-0 z-20 flex items-center justify-center"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute inset-y-0 w-[3px] bg-white/95" />
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-red-600 bg-white shadow-xl">
            <svg className="h-5 w-5 text-red-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7M9 19l7-7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-white/50">{caption}</p>
    </div>
  );
}

/* ================================ WHY US ================================ */

function WhyUs() {
  const props = [
    {
      title: "Premium Materials",
      desc: "Quality shingles, metal roofing, and manufacturer-backed warranties on every job.",
    },
    {
      title: "Built for Utah Weather",
      desc: "Solutions engineered for heavy snow, hail, summer heat, and high mountain wind.",
    },
    {
      title: "$0 Down Financing",
      desc: "Multiple financing plans for every budget — from quick repairs to full replacements.",
    },
  ];

  return (
    <section
      id="why"
      className="relative overflow-hidden noise-overlay py-24 md:py-32"
      style={{ backgroundColor: NAVY }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>Why Mi Techo</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                10+ Years of Protecting{" "}
                <span className="text-red-500">Utah County</span> Homes.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                We&apos;re local. We&apos;re family-owned. We&apos;re not a national franchise running
                door-to-door sales. Every Mi Techo crew lives in the same neighborhoods we work in
                — and that&apos;s why our reputation matters more to us than the next sale.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                Bilingual. Veteran-friendly. Insurance-fluent. And committed to leaving every roof
                better than we found it.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/75 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Integrates with{" "}
                <span className="font-bold text-white">JobNimbus</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-2xl ring-2 ring-red-500/30 md:h-96">
              <Image
                src="/images/roofing/roofing-crew.png"
                alt="Mi Techo crew"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-red-600/25 blur-[60px]" />
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-red-600/15 blur-[50px]" />
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {props.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="flex h-full items-start gap-4 rounded-xl border-l-4 border-red-600 bg-white/[0.04] p-6 backdrop-blur-sm">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== FINANCING ============================== */

function Financing() {
  const plans = [
    {
      title: "$0 Down",
      desc: "Get started with nothing out of pocket today.",
      badge: "Most Popular",
    },
    {
      title: "Deferred Payments",
      desc: "Enjoy your new roof now and pay later — up to 18 months.",
    },
    {
      title: "Low Monthly",
      desc: "Approved-credit plans starting around $189/mo.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionLabel>Flexible Financing</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
                A New Roof Shouldn&apos;t{" "}
                <span className="text-red-600">Break the Bank.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Every Utah County family deserves a safe, weatherproof home. That&apos;s why we
                partner with multiple lenders to find a plan that fits your budget — credit
                check is soft and doesn&apos;t impact your score.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative h-72 overflow-hidden rounded-2xl shadow-2xl md:h-96">
              <Image
                src="/images/about/happy-homeowners.png"
                alt="Happy homeowners"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-red-600/30 blur-[50px]" />
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="card-lift relative h-full rounded-2xl border-l-[3px] border-red-600 bg-white p-8 shadow-lg">
                {p.badge && (
                  <span className="absolute -top-3 left-6 rounded-full bg-red-600 px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {p.badge}
                  </span>
                )}
                <div className="mb-3 font-display text-xs font-bold uppercase tracking-[0.15em] text-red-600">
                  Plan {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-3xl font-extrabold text-slate-900">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#estimator"
            className="cta-press inline-flex items-center justify-center rounded-lg bg-red-600 px-7 py-4 text-base font-bold tracking-wide text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-red-700"
          >
            See If You Qualify →
          </a>
          <p className="mt-3 text-sm text-slate-500">
            Checking rates won&apos;t affect your credit score.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================== ROOF ESTIMATOR ============================ */

type EstState = "input" | "loading" | "results";
type Estimate = {
  address: string;
  sqft: number;
  asphaltLow: number;
  asphaltHigh: number;
  metalLow: number;
  metalHigh: number;
};

function useGoogleMaps() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.google?.maps?.places) {
      setReady(true);
      return;
    }
    if (document.querySelector("script[data-mt-google]")) {
      const t = setInterval(() => {
        if (window.google?.maps?.places) {
          setReady(true);
          clearInterval(t);
        }
      }, 100);
      return () => clearInterval(t);
    }
    window.__mtInitGoogle = () => setReady(true);
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_KEY}&libraries=places&callback=__mtInitGoogle`;
    s.async = true;
    s.defer = true;
    s.dataset.mtGoogle = "1";
    document.head.appendChild(s);
    return () => {
      delete window.__mtInitGoogle;
    };
  }, []);
  return ready;
}

function RoofEstimator() {
  const [state, setState] = useState<EstState>("input");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [pickedAddress, setPickedAddress] = useState("");
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const mapHolder = useRef<HTMLDivElement>(null);
  const loadingMapHolder = useRef<HTMLDivElement>(null);
  const acRef = useRef<any>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const ready = useGoogleMaps();

  // Wire autocomplete
  useEffect(() => {
    if (!ready || !inputRef.current || acRef.current) return;
    const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "us" },
      types: ["address"],
      fields: ["geometry", "formatted_address"],
    });
    ac.addListener("place_changed", () => {
      const place = ac.getPlace();
      if (place.geometry?.location && place.formatted_address) {
        setCoords({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
        setPickedAddress(place.formatted_address);
      }
    });
    acRef.current = ac;
  }, [ready]);

  // Mount loading-state map
  useEffect(() => {
    if (state !== "loading" || !coords || !ready) return;
    if (!loadingMapHolder.current) return;
    new window.google.maps.Map(loadingMapHolder.current, {
      center: coords,
      zoom: 19,
      mapTypeId: "satellite",
      disableDefaultUI: true,
      gestureHandling: "none",
    });
  }, [state, coords, ready]);

  // Mount results-state map
  useEffect(() => {
    if (state !== "results" || !coords || !ready) return;
    if (!mapHolder.current) return;
    if (mapRef.current) {
      mapRef.current.setCenter(coords);
      markerRef.current?.setPosition(coords);
      return;
    }
    const map = new window.google.maps.Map(mapHolder.current, {
      center: coords,
      zoom: 20,
      mapTypeId: "satellite",
      tilt: 0,
      disableDefaultUI: true,
      zoomControl: true,
      gestureHandling: "cooperative",
    });
    mapRef.current = map;
    markerRef.current = new window.google.maps.Marker({
      map,
      position: coords,
      title: "Your home",
    });
  }, [state, coords, ready]);

  const start = useCallback(() => {
    if (!coords) return;
    setState("loading");
    // Generate a deterministic-looking estimate from coords
    const seed = Math.abs(Math.floor((coords.lat * 1000 + coords.lng * 1000) % 1700));
    const sqft = 1200 + seed; // 1200 - 2899
    const asphaltLow = Math.round((sqft * 4.5) / 100) * 100;
    const asphaltHigh = Math.round((sqft * 7.2) / 100) * 100;
    const metalLow = Math.round((sqft * 9) / 100) * 100;
    const metalHigh = Math.round((sqft * 13) / 100) * 100;
    const e: Estimate = {
      address: pickedAddress,
      sqft,
      asphaltLow,
      asphaltHigh,
      metalLow,
      metalHigh,
    };
    setEstimate(e);
    setTimeout(() => setState("results"), 4200);
  }, [coords, pickedAddress]);

  const reset = () => {
    setState("input");
    setEstimate(null);
    setCoords(null);
    setPickedAddress("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <section
      id="estimator"
      className="relative overflow-hidden noise-overlay py-24"
      style={{ backgroundColor: NAVY }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <SectionLabel>Free Roof Estimate</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              How Much Will Your{" "}
              <span className="text-red-500">New Roof</span> Cost?
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Enter your address. We&apos;ll pull a satellite view of your property and give you
              an instant cost estimate. No phone call required.
            </p>
          </Reveal>
        </div>

        {state === "input" && (
          <div className="mt-8">
            <Reveal>
              <div className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter your home address…"
                    className="h-14 w-full rounded-xl border-2 border-white/15 bg-white px-5 pr-11 text-base text-slate-900 placeholder:text-slate-400 shadow-xl focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/40"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        start();
                      }
                    }}
                  />
                  <PinIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                </div>
                <button
                  onClick={start}
                  disabled={!coords}
                  className="cta-press h-14 whitespace-nowrap rounded-xl bg-red-600 px-7 text-base font-bold text-white shadow-lg shadow-red-600/30 transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ANALYZE MY ROOF →
                </button>
              </div>
              <p className="mt-4 text-center text-xs text-white/40">
                Powered by Google Maps · Free · Instant · No contact info required
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] font-semibold text-white/55">
                <span className="inline-flex items-center gap-2">
                  <ShieldIcon className="h-4 w-4 text-red-500" /> Licensed &amp; Insured
                </span>
                <span className="inline-flex items-center gap-2">
                  <GoogleG className="h-4 w-4" /> 4.9 ★★★★★ 15+ Reviews
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-red-500" /> No spam, ever
                </span>
              </div>
            </Reveal>
          </div>
        )}

        {state === "loading" && (
          <div className="mt-8 wizard-step">
            <div className="mx-auto max-w-xl text-center">
              <div className="relative mx-auto mb-8 aspect-[3/2] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <div ref={loadingMapHolder} className="absolute inset-0" />
                <div
                  className="pointer-events-none absolute inset-0 scan-line"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, transparent 45%, rgba(220,38,38,0.45) 50%, transparent 55%, transparent 100%)",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 animate-pulse rounded-2xl border-2 border-red-600/40" />
              </div>
              <LoadingText />
              <p className="mt-3 text-sm text-white/40">{pickedAddress}</p>
            </div>
          </div>
        )}

        {state === "results" && estimate && (
          <div className="mt-8 wizard-step">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
              <div className="relative">
                <div
                  ref={mapHolder}
                  className="h-[360px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:h-[480px]"
                />
                <div className="mt-3 flex items-center gap-2 text-xs text-white/55">
                  <PinIcon className="h-4 w-4 text-red-500" />
                  <span className="truncate">{estimate.address}</span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-600/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-red-400">
                  <CheckIcon className="h-3.5 w-3.5" />
                  We Found Your Roof
                </div>
                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Estimated Roof Area
                  </div>
                  <div className="mt-1 font-display text-5xl font-extrabold text-white sm:text-6xl">
                    {estimate.sqft.toLocaleString()}
                    <span className="ml-2 text-2xl text-white/50 sm:text-3xl">sq ft</span>
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  <PriceRow
                    label="Asphalt Shingle Replacement"
                    low={estimate.asphaltLow}
                    high={estimate.asphaltHigh}
                    accent
                  />
                  <PriceRow
                    label="Metal Roofing Upgrade"
                    low={estimate.metalLow}
                    high={estimate.metalHigh}
                  />
                </div>

                <a
                  href="#lead"
                  className="cta-press mt-8 inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-red-600/30 transition-colors hover:bg-red-700"
                >
                  GET MY EXACT QUOTE →
                </a>
                <button
                  onClick={reset}
                  className="mt-3 w-full text-xs font-semibold text-white/50 hover:text-white"
                >
                  Try a different address
                </button>
                <p className="mt-5 border-t border-white/10 pt-4 text-center text-[11px] leading-relaxed text-white/40">
                  Estimate based on satellite imagery and local pricing data. Final number
                  depends on inspection findings.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PriceRow({
  label,
  low,
  high,
  accent,
}: {
  label: string;
  low: number;
  high: number;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        accent
          ? "border-red-500/40 bg-red-600/10"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="text-[11px] font-bold uppercase tracking-wider text-white/55">{label}</div>
      <div className="mt-1 font-display text-2xl font-extrabold text-white sm:text-3xl">
        {fmt(low)} <span className="text-white/50">–</span> {fmt(high)}
      </div>
    </div>
  );
}

function fmt(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

function LoadingText() {
  const messages = [
    "Locating your property…",
    "Scanning roof with satellite data…",
    "Measuring roof segments…",
    "Calculating your estimate…",
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setI((v) => Math.min(v + 1, messages.length - 1));
    }, 1000);
    return () => clearInterval(t);
  }, [messages.length]);
  return (
    <p key={i} className="animate-pulse text-lg font-semibold text-white">
      {messages[i]}
    </p>
  );
}

/* =========================== LEAD FORM SECTION ========================== */

function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    financing: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="lead" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/roofing/roofing-crew.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/92" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-600/20 px-5 py-2 text-sm font-semibold text-red-300">
              <BoltIcon className="h-4 w-4" />
              We respond within 1 hour
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
            <div className="mb-8 text-center">
              <SectionLabel>Free Estimate</SectionLabel>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Get Your Free Estimate
              </h2>
              <p className="mt-3 text-slate-600">
                Fill out the form and a project manager will call you within the hour.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
                <div className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
                  Thanks{data.name ? `, ${data.name.split(" ")[0]}` : ""}!
                </div>
                <p className="mt-3 text-slate-600">
                  We&apos;ll call you at{" "}
                  <span className="font-semibold text-slate-900">{data.phone || "the number you provided"}</span>{" "}
                  within the next hour.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <Input label="Full Name" value={data.name} onChange={(v) => setData({ ...data, name: v })} required />
                <Input label="Phone Number" type="tel" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} required />
                <Input label="Email" type="email" value={data.email} onChange={(v) => setData({ ...data, email: v })} required />
                <Input label="Street Address" value={data.address} onChange={(v) => setData({ ...data, address: v })} required />
                <SelectField
                  label="Service Needed"
                  value={data.service}
                  onChange={(v) => setData({ ...data, service: v })}
                  options={["Roof Repair", "Roof Replacement", "Storm Damage", "Gutters & Siding", "Inspection"]}
                />
                <SelectField
                  label="Interested in Financing?"
                  value={data.financing}
                  onChange={(v) => setData({ ...data, financing: v })}
                  options={["Yes", "No", "Not Sure"]}
                />

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="cta-press w-full rounded-xl bg-red-600 py-4 text-lg font-bold text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-red-700"
                  >
                    GET MY FREE ESTIMATE →
                  </button>
                  <p className="mt-3 text-center text-sm text-slate-500">
                    No obligation. No pressure. Just honest answers.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-900 placeholder:text-slate-400 transition focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500/30";

function Input({
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
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClass} appearance-none`}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

/* ============================== REVIEWS ================================= */

const REVIEWS = [
  {
    text: "Mi Techo made the entire process smooth and stress free. They gave me clear options based on my goals and budget — no upselling, no pressure.",
    name: "Aaron K.",
    city: "Orem, UT",
  },
  {
    text: "They handled the entire insurance claim process for me. Highly professional and excellent quality work. The new roof looks fantastic.",
    name: "Carlos R.",
    city: "Orem, UT",
  },
  {
    text: "Quick to respond, figured out the issue right away, and got it fixed properly. They came back after a storm to double-check everything held up.",
    name: "Moroni L.",
    city: "Orem, UT",
  },
  {
    text: "The crew was respectful, on time, and cleaned up perfectly. You couldn't tell anyone had been working on the house except for the brand-new roof.",
    name: "Jessica P.",
    city: "Provo, UT",
  },
  {
    text: "Got bids from three companies. Mi Techo wasn't the cheapest, but they were the most thorough and the only ones who actually inspected the attic.",
    name: "Brandon S.",
    city: "Lindon, UT",
  },
];

function Reviews() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal>
            <SectionLabel>Real Reviews</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              What Our Customers Say.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm">
              <GoogleG className="h-6 w-6" />
              <span className="text-lg font-bold text-slate-900">4.9</span>
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-red-600" />
                ))}
              </span>
              <span className="text-sm text-slate-500">15+ Reviews</span>
            </div>
          </Reveal>
        </div>

        <div className="overflow-hidden">
          <div className="reviews-carousel flex w-max gap-6 pl-4">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <ReviewCard key={`${r.name}-${i}`} {...r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ text, name, city }: { text: string; name: string; city: string }) {
  return (
    <div className="relative w-[340px] flex-shrink-0 overflow-hidden rounded-2xl border border-slate-100 border-l-4 border-l-red-600 bg-white p-7 shadow-sm">
      <span className="pointer-events-none absolute right-5 top-3 select-none font-serif text-[80px] leading-none text-red-600/[0.07]">
        &ldquo;
      </span>
      <div className="mb-3 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-red-600" />
        ))}
      </div>
      <p className="relative mb-5 text-[15px] italic leading-relaxed text-slate-600">
        &ldquo;{text}&rdquo;
      </p>
      <p className="text-sm font-bold text-slate-900">
        — {name}, {city}
      </p>
    </div>
  );
}

/* ============================== FINAL CTA =============================== */

function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden noise-overlay py-24 md:py-28"
      style={{ backgroundColor: NAVY }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(220,38,38,0.4) 40px, rgba(220,38,38,0.4) 41px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Upgrade Your Home?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60 sm:text-xl">
            Get your free roof estimate today. No obligation, no pressure.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#estimator"
              className="cta-press inline-flex items-center justify-center rounded-lg bg-red-600 px-7 py-4 text-base font-bold tracking-wide text-white shadow-lg shadow-red-600/30 transition-colors hover:bg-red-700"
            >
              Get Free Estimate →
            </a>
            <a
              href={PHONE_HREF}
              className="cta-press inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-7 py-4 text-base font-bold tracking-wide text-white transition-colors hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================ FOOTER =============================== */

function FooterSection() {
  const services = [
    "Roof Repair",
    "Roof Replacement",
    "Storm Damage",
    "Gutters & Siding",
    "Free Inspection",
  ];
  const cities = [
    "Orem",
    "Provo",
    "Lindon",
    "Pleasant Grove",
    "Spanish Fork",
    "Lehi",
    "Vineyard",
  ];

  return (
    <footer
      className="relative noise-overlay text-white"
      style={{ backgroundColor: "#0a1020" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/images/mitecho-logo.png"
              alt="Mi Techo Roofing"
              width={150}
              height={45}
              className="mb-5 h-11 w-auto"
            />
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Utah County&apos;s trusted roofing contractor. Family-owned, bilingual, and
              committed to honest work that lasts. Specializing in roofing, storm restoration,
              gutters, and insurance claims.
            </p>
            <p className="mt-4 text-sm text-white/50">Orem, UT · Serving all of Utah County</p>
          </div>

          <div>
            <h4 className="mb-5 text-base font-bold text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/60 transition-colors hover:text-red-500">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-base font-bold text-white">Service Areas</h4>
            <ul className="space-y-3">
              {cities.map((c) => (
                <li key={c} className="text-sm text-white/60">
                  {c}, UT
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-base font-bold text-white hover:text-red-500"
            >
              <PhoneIcon className="h-5 w-5" />
              {PHONE}
            </a>
            <span className="hidden h-6 w-px bg-white/10 sm:block" />
            <a
              href="mailto:info@mitechoroofing.com"
              className="text-sm text-white/60 hover:text-red-500"
            >
              info@mitechoroofing.com
            </a>
            <span className="hidden h-6 w-px bg-white/10 sm:block" />
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2">
              <GoogleG className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                4.9 Stars
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
            <span>© 2026 Mi Techo Roofing · All rights reserved.</span>
            <Link
              href="/proposals/mitecho"
              className="font-semibold text-white/55 transition-colors hover:text-red-500"
            >
              Built by SARK Agency ↗
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================== MOBILE STICKY BAR ========================= */

function MobileStickyBar() {
  return (
    <>
      <div className="h-1" />
      <div className="mobile-cta-bar fixed inset-x-0 bottom-0 z-50 flex gap-3 border-t border-slate-200 bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] md:hidden">
        <a
          href={PHONE_HREF}
          className="cta-press flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-sm font-bold text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          Call Now
        </a>
        <a
          href="#estimator"
          className="cta-press flex flex-1 items-center justify-center rounded-xl border-2 border-slate-900 bg-white py-3 text-sm font-bold text-slate-900"
        >
          Free Estimate
        </a>
      </div>
    </>
  );
}

/* ============================== UI BITS ================================ */

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.18em] text-red-600">
      {children}
    </span>
  );
}

/* =============================== ICONS ================================= */

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function ShieldIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.96 11.96 0 013.6 6 11.99 11.99 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z" />
    </svg>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function DollarIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m4-9.5C16 6.57 14.21 5 12 5s-4 1.57-4 3.5S9.79 12 12 12s4 1.57 4 3.5S14.21 19 12 19s-4-1.57-4-3.5" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function WrenchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m-3.75 3.75l-3.59-3.59m3.59 3.59L8.84 18.34a3.182 3.182 0 11-4.5-4.5l3.16-3.16M11.42 15.17L8.5 12.25l3.16-3.16a4.5 4.5 0 016.36 0l1.13 1.13" />
    </svg>
  );
}

function HouseIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12L12 3l9.75 9M4.5 9.75V21h15V9.75M9 21v-6h6v6" />
    </svg>
  );
}

function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function PaintIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zM15.75 4.5l-9 9m9-9V2.25M15.75 4.5h2.25m-2.25 0L18 6.75m0-2.25h2.25v2.25M18 6.75l-9 9" />
    </svg>
  );
}
