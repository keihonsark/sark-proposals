import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, className = "", children }: Props) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 py-[15dvh] sm:px-10 lg:px-16 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1280px]">
        {eyebrow && (
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-10 bg-brand-red" />
            <span className="font-display text-sm tracking-[0.35em] text-brand-red uppercase">
              {eyebrow}
            </span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
