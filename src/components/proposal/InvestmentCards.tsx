import { Reveal } from "./Reveal";

type Card = { label: string; price: string; detail: string };

type Props = {
  setup: Card;
  monthly: Card;
  bonus: Card;
  note: string;
};

export function InvestmentCards({ setup, monthly, bonus, note }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <Reveal>
          <div className="h-full border border-white/10 bg-white/[0.02] p-10">
            <div className="font-display text-xs tracking-[0.3em] text-white/50">
              {setup.label}
            </div>
            <div className="mt-4 font-display text-[5rem] leading-none text-brand-red sm:text-[6rem]">
              {setup.price}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/60 sm:text-base">
              {setup.detail}
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="h-full border border-white/10 bg-white/[0.02] p-10">
            <div className="font-display text-xs tracking-[0.3em] text-white/50">
              {monthly.label}
            </div>
            <div className="mt-4 font-display text-[5rem] leading-none text-brand-amber sm:text-[6rem]">
              {monthly.price}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/60 sm:text-base">
              {monthly.detail}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="mx-auto max-w-2xl border-2 border-brand-amber/40 bg-brand-amber/5 p-10 text-center">
          <div className="font-display text-xs tracking-[0.3em] text-brand-amber">
            {bonus.label}
          </div>
          <div className="mt-4 font-display text-[3.5rem] leading-none text-brand-amber sm:text-[4.5rem]">
            {bonus.price}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base">
            {bonus.detail}
          </p>
        </div>
      </Reveal>

      <Reveal delay={280}>
        <p className="text-center font-display text-sm tracking-[0.15em] text-white/80 sm:text-base">
          {note}
        </p>
      </Reveal>
    </div>
  );
}
