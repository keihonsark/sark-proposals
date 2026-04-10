import { Reveal } from "./Reveal";

type Cell = string | { text: string; tone?: "bad" | "good" };
type Row = { metric: string; values: Cell[] };

type Props = {
  headers: string[];
  rows: Row[];
  summary: string;
};

function toneClass(c: Cell): string {
  if (typeof c === "string") return "text-white/70";
  if (c.tone === "bad") return "text-brand-red font-semibold";
  if (c.tone === "good") return "text-emerald-400 font-semibold";
  return "text-white/70";
}

function cellText(c: Cell): string {
  return typeof c === "string" ? c : c.text;
}

export function ComparisonTable({ headers, rows, summary }: Props) {
  return (
    <div className="flex flex-col gap-10">
      <Reveal>
        <div className="overflow-x-auto border border-white/10">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04]">
                {headers.map((h, i) => (
                  <th
                    key={h}
                    className={`px-4 py-6 font-display text-sm tracking-[0.25em] sm:px-6 ${
                      i === 0 ? "text-left" : "text-center"
                    } ${
                      i === 1
                        ? "bg-white/[0.03] text-brand-red"
                        : "text-white"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr
                  key={r.metric}
                  className={`border-b border-white/5 ${
                    ri % 2 === 1 ? "bg-white/[0.015]" : ""
                  }`}
                >
                  <td className="px-4 py-5 text-base text-white/85 sm:px-6">
                    {r.metric}
                  </td>
                  {r.values.map((v, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-5 text-center text-base sm:px-6 ${
                        ci === 0 ? "bg-white/[0.03]" : ""
                      } ${toneClass(v)}`}
                    >
                      {cellText(v)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">{summary}</p>
      </Reveal>
    </div>
  );
}
