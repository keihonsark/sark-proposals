import { Reveal } from "./Reveal";

type Props = {
  stats: { value: string; label: string }[];
  findings: string[];
};

export function SeoBlock({ stats, findings }: Props) {
  return (
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="font-display text-5xl leading-none text-brand-red sm:text-6xl">
                {s.value}
              </div>
              <div className="mt-3 font-display text-[10px] tracking-[0.25em] text-white/60 sm:text-xs">
                {s.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ul className="flex flex-col gap-4">
        {findings.map((f, i) => (
          <Reveal key={f} delay={i * 60} as="li">
            <div className="flex items-start gap-4 text-base text-white/80 sm:text-lg">
              <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 bg-brand-red" />
              <span>{f}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
