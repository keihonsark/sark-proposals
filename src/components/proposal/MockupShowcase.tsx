import Link from "next/link";
import { Reveal } from "./Reveal";

type Props = {
  description: string;
  // Kept for backwards compat with the proposal config; not rendered.
  images?: string[];
};

export function MockupShowcase({ description }: Props) {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <Reveal>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">{description}</p>
      </Reveal>

      <Reveal delay={120}>
        <Link
          href="/demos/mitecho"
          className="group inline-flex items-center justify-center bg-brand-red px-12 py-5 font-display text-lg tracking-[0.2em] text-white shadow-2xl shadow-brand-red/30 transition-all hover:bg-red-700 hover:shadow-brand-red/50 sm:text-xl"
        >
          PREVIEW YOUR NEW SITE
          <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-sm text-white/40">
          Live interactive preview — roofing calculator, lead forms, and more.
        </p>
      </Reveal>
    </div>
  );
}
