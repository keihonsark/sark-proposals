import { Reveal } from "./Reveal";

type Stat = { value: string; label: string; detail: string };

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 120}>
          <div className="group relative h-full border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-brand-red/50 hover:bg-white/[0.04]">
            <div className="font-display text-[5.5rem] leading-none tracking-tight text-brand-red sm:text-[6rem]">
              {s.value}
            </div>
            <div className="mt-4 font-display text-sm tracking-[0.25em] text-white/80 uppercase">
              {s.label}
            </div>
            <div className="mt-4 text-sm leading-relaxed text-white/50">{s.detail}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
