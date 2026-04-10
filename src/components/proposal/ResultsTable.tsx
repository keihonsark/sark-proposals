import { Reveal } from "./Reveal";

type Props = {
  rows: { metric: string; value: string }[];
  disclaimer: string;
};

export function ResultsTable({ rows, disclaimer }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <div className="border border-white/10">
        {rows.map((r, i) => (
          <Reveal key={r.metric} delay={i * 70}>
            <div
              className={`flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-10 ${
                i !== rows.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="font-display text-sm tracking-[0.2em] text-white/70 uppercase">
                {r.metric}
              </div>
              <div className="font-display text-2xl text-brand-amber sm:text-3xl">
                {r.value}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="max-w-3xl text-sm italic text-white/50 sm:text-base">{disclaimer}</p>
      </Reveal>
    </div>
  );
}
