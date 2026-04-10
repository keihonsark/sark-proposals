import { Reveal } from "./Reveal";

type Props = {
  steps: { when: string; what: string }[];
};

export function Timeline({ steps }: Props) {
  return (
    <ol className="relative">
      <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10 sm:left-4" />
      {steps.map((s, i) => (
        <Reveal key={s.when} delay={i * 100} as="li">
          <div className="relative flex items-start gap-6 pb-12 pl-0 sm:gap-10">
            <div className="relative z-10 mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-red bg-ink sm:h-8 sm:w-8">
              <div className="h-2 w-2 rounded-full bg-brand-red sm:h-3 sm:w-3" />
            </div>
            <div>
              <div className="font-display text-xs tracking-[0.3em] text-brand-red">
                {s.when}
              </div>
              <div className="mt-2 font-display text-2xl text-white sm:text-3xl">
                {s.what}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
