import { Reveal } from "./Reveal";

type Item = { title: string; detail: string };

export function DeliverableGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 80}>
          <div className="group relative h-full border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-brand-red/50 hover:bg-white/[0.04]">
            <div className="font-display text-xs tracking-[0.3em] text-brand-red">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-4 font-display text-2xl tracking-wide text-white sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
              {item.detail}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
