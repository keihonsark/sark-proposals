import { Reveal } from "./Reveal";

type Bar = { name: string; multiplier: string; widthPct: number };

type Props = {
  score: number;
  bars: Bar[];
  footer: string;
};

export function PerformanceBlock({ score, bars, footer }: Props) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
      <Reveal>
        <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
          <div className="absolute inset-0 rounded-full border border-brand-red/30" />
          <div className="absolute inset-3 rounded-full border border-brand-red/50" />
          <div className="absolute inset-6 rounded-full border-2 border-brand-red" />
          <div className="text-center">
            <div className="font-display text-[10rem] leading-none text-brand-red sm:text-[11rem]">
              {score}
            </div>
            <div className="mt-2 font-display text-sm tracking-[0.3em] text-white/60">
              /100
            </div>
          </div>
        </div>
      </Reveal>

      <div className="w-full">
        <ul className="flex flex-col gap-5">
          {bars.map((b, i) => (
            <Reveal key={b.name} delay={i * 80} as="li">
              <div className="flex items-center justify-between gap-4 font-display text-sm tracking-[0.2em] text-white/80">
                <span>{b.name}</span>
                <span className="text-brand-red">{b.multiplier}</span>
              </div>
              <div className="mt-2 h-2 w-full bg-white/10">
                <div
                  className="h-full bg-brand-red"
                  style={{ width: `${b.widthPct}%` }}
                />
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={400}>
          <div className="mt-10 border-t border-white/10 pt-6 font-display text-xs tracking-[0.2em] text-white/60 sm:text-sm">
            {footer}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
