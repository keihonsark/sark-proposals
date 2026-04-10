import Image from "next/image";
import { Reveal } from "./Reveal";

type Props = {
  description: string;
  images: string[];
};

export function MockupShowcase({ description, images }: Props) {
  const [hero, second, third] = images;

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-5 lg:gap-6">
        <Reveal className="lg:col-span-3">
          <div className="group relative h-72 overflow-hidden border border-white/10 sm:h-96 lg:h-[640px]">
            {hero && (
              <Image
                src={hero}
                alt="Site mockup hero"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-2">
          <Reveal delay={120}>
            <div className="group relative h-56 overflow-hidden border border-white/10 sm:h-64 lg:h-[308px]">
              {second && (
                <Image
                  src={second}
                  alt="Site mockup detail"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="group relative h-56 overflow-hidden border border-white/10 sm:h-64 lg:h-[308px]">
              {third && (
                <Image
                  src={third}
                  alt="Site mockup detail"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <p className="max-w-3xl text-base text-white/70 sm:text-lg">{description}</p>
      </Reveal>

      <Reveal delay={120}>
        <div className="overflow-hidden border border-white/10 bg-ink shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="h-3 w-3 rounded-full bg-white/15" />
            <span className="ml-3 truncate font-mono text-[11px] text-white/40">
              mitechoroofing.com
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
            <div className="font-display text-xl tracking-[0.18em] text-white sm:text-2xl">
              MI TECHO <span className="text-brand-red">ROOFING</span>
            </div>
            <nav className="hidden items-center gap-8 font-display text-xs tracking-[0.25em] text-white/70 md:flex">
              <span className="hover:text-white">SERVICES</span>
              <span className="hover:text-white">ABOUT</span>
              <span className="hover:text-white">REVIEWS</span>
            </nav>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="hidden font-display text-sm tracking-[0.15em] text-white/80 sm:inline">
                801-404-5896
              </span>
              <span className="inline-flex items-center bg-brand-red px-4 py-2.5 font-display text-[11px] tracking-[0.25em] text-white sm:px-5 sm:py-3 sm:text-xs">
                FREE INSPECTION →
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
