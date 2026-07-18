"use client";

import { hero } from "@/content/site";
import { track } from "@/lib/analytics";
import { openBooking } from "./BookingModal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Abstract signal motif — pure CSS/SVG, no stock imagery */}
      <div aria-hidden="true" className="absolute inset-0">
        <svg
          className="absolute -right-24 top-10 h-[560px] w-[560px] opacity-[0.07]"
          viewBox="0 0 400 400"
          fill="none"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx="200"
              cy="200"
              r={40 + i * 22}
              stroke="#2fbf71"
              strokeWidth="1"
            />
          ))}
          <line x1="0" y1="200" x2="400" y2="200" stroke="#2fbf71" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#2fbf71" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-5xl flex-col justify-center px-5 pt-16">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-line px-3 py-1 text-xs uppercase tracking-widest text-mist-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Verification infrastructure for sustainable trade
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-mist sm:text-5xl md:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-dim">
          {hero.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => {
              track(hero.primaryCta.event);
              openBooking("hero");
            }}
            className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {hero.primaryCta.label}
          </button>
          <a
            href={hero.secondaryCta.href}
            onClick={() => track(hero.secondaryCta.event)}
            className="rounded-md border border-slate-line px-6 py-3 text-base font-medium text-mist transition-colors hover:border-accent hover:text-accent"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
