import { Reveal } from "./Reveal";

type Item = { title: string; detail: string };

type Props = {
  items: Item[];
  closing?: string;
  accent?: "red" | "amber";
};

export function AccentList({ items, closing, accent = "red" }: Props) {
  const barColor = accent === "amber" ? "bg-brand-amber" : "bg-brand-red";
  const titleColor = accent === "amber" ? "text-brand-amber" : "text-white";

  return (
    <div className="flex flex-col gap-12">
      <ul className="flex flex-col gap-6">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} as="li">
            <div className="flex items-stretch gap-6">
              <div className={`w-1 flex-shrink-0 ${barColor}`} />
              <div className="flex-1 py-1">
                <h3 className={`font-display text-2xl tracking-wide sm:text-3xl ${titleColor}`}>
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-white/70 sm:text-lg">{item.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
      {closing && (
        <Reveal>
          <p className="max-w-3xl text-base italic text-white/60 sm:text-lg">{closing}</p>
        </Reveal>
      )}
    </div>
  );
}
