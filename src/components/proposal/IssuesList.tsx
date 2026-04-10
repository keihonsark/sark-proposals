import { Reveal } from "./Reveal";

type Props = {
  items: string[];
  closing: string;
};

export function IssuesList({ items, closing }: Props) {
  return (
    <div className="flex flex-col gap-12">
      <ol className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 70} as="li">
            <div className="flex items-start gap-5 border border-white/10 bg-white/[0.02] p-6">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-brand-red font-display text-xl text-white">
                {i + 1}
              </div>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">{item}</p>
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal>
        <p className="max-w-3xl text-base italic text-white/60 sm:text-lg">{closing}</p>
      </Reveal>
    </div>
  );
}
