import Image from "next/image";
import { Reveal } from "./Reveal";

type Props = {
  preparedFor: string;
  clientName: string;
  clientLogo?: string;
  clientLogoText?: string;
  headline: string;
  subline: string;
  date: string;
  confidential: boolean;
};

export function Hero({
  preparedFor,
  clientName,
  clientLogo,
  clientLogoText,
  headline,
  subline,
  date,
  confidential,
}: Props) {
  return (
    <section className="relative flex min-h-screen w-full flex-col px-6 pt-10 pb-16 sm:px-10 lg:px-16">
      <div className="flex w-full items-start justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/sark-logo-dark.png"
            alt="SARK Agency"
            width={120}
            height={32}
            priority
            className="h-7 w-auto opacity-90"
          />
        </div>
        <div className="text-right font-display text-[10px] tracking-[0.3em] text-white/60 sm:text-xs">
          {preparedFor}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-10 text-center">
        <Reveal>
          {clientLogo ? (
            <Image
              src={clientLogo}
              alt={clientName}
              width={320}
              height={120}
              priority
              className="h-20 w-auto sm:h-24"
            />
          ) : (
            <div className="inline-flex flex-col items-center gap-2">
              <div className="font-display text-5xl tracking-[0.12em] text-white sm:text-6xl">
                {clientLogoText ?? clientName.toUpperCase()}
              </div>
              <div className="h-[2px] w-24 bg-brand-red" />
              <div className="font-display text-[10px] tracking-[0.4em] text-white/50">
                ROOFING
              </div>
            </div>
          )}
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] text-white">
            {headline.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-brand-red">
                  {w}
                </span>
              ) : (
                <span key={i}>{w} </span>
              )
            )}
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="max-w-2xl text-base text-white/70 sm:text-lg">{subline}</p>
        </Reveal>

        <Reveal delay={360}>
          <div className="font-display text-xs tracking-[0.35em] text-white/50">
            {date}
            {confidential && <span className="mx-3 text-brand-red">|</span>}
            {confidential && "CONFIDENTIAL"}
          </div>
        </Reveal>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="font-display text-[10px] tracking-[0.35em]">SCROLL</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
