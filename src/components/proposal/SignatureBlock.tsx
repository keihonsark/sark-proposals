"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type Props = {
  client: string;
  sark: { name: string; title: string };
  clientContact: { name: string; title: string };
};

type State = "idle" | "submitting" | "success" | "error";

export function SignatureBlock({ client, sark, clientContact }: Props) {
  const [name, setName] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !agreed || state === "submitting") return;
    setState("submitting");
    setError(null);
    try {
      const res = await fetch("/api/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client,
          name: name.trim(),
          timestamp: new Date().toISOString(),
          userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (state === "success") {
    return (
      <Reveal>
        <div className="border border-brand-amber/40 bg-brand-amber/5 p-12 text-center">
          <div className="font-display text-3xl text-brand-amber sm:text-4xl">
            Proposal accepted.
          </div>
          <p className="mt-4 text-white/70">
            We&apos;ll be in touch within 24 hours to kick things off.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
      <Reveal>
        <div>
          <div className="font-display text-xs tracking-[0.3em] text-white/40">
            SARK AGENCY
          </div>
          <div className="mt-6 border-b border-white/30 pb-2 font-[cursive] text-3xl text-white italic">
            Keihon Sarkhosh
          </div>
          <div className="mt-3 font-display text-sm tracking-wide text-white/80">
            {sark.name}
          </div>
          <div className="text-sm text-white/50">{sark.title}</div>
          <div className="mt-2 text-xs text-white/40">
            Signed {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </div>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="font-display text-xs tracking-[0.3em] text-white/40">
            {client.toUpperCase()}
          </div>
          <div>
            <label className="block font-display text-[10px] tracking-[0.25em] text-white/50">
              FULL NAME
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={clientContact.name}
              className="mt-2 w-full border-b border-white/20 bg-transparent pb-2 text-xl text-white placeholder:text-white/20 focus:border-brand-red focus:outline-none"
            />
          </div>
          <div className="text-sm text-white/50">{clientContact.title}</div>

          <label className="mt-2 flex items-start gap-3 text-sm text-white/70">
            <input
              type="checkbox"
              required
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 accent-brand-red"
            />
            <span>I agree to the terms outlined above.</span>
          </label>

          <button
            type="submit"
            disabled={!name.trim() || !agreed || state === "submitting"}
            className="mt-4 inline-flex items-center justify-center bg-brand-red px-8 py-5 font-display text-base tracking-[0.2em] text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {state === "submitting" ? "SENDING…" : "ACCEPT & GET STARTED →"}
          </button>

          {state === "error" && (
            <p className="text-sm text-brand-red">
              {error ?? "Something went wrong. Try again."}
            </p>
          )}
        </form>
      </Reveal>
    </div>
  );
}
