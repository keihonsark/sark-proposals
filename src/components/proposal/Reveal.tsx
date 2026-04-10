"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";

type Tag = "div" | "section" | "li" | "tr" | "h1" | "h2" | "p";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
};

export function Reveal({ children, className = "", delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`,
    },
    children
  );
}
