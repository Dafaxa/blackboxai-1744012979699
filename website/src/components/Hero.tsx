"use client";

import Link from "next/link";
import { hero, stats } from "@/content/site";
import { track } from "@/lib/analytics";
import { openBooking } from "./BookingModal";
import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Abstract signal motif — pure CSS/SVG, no stock imagery */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="hero-glow absolute inset-0" />
        <svg
          className="absolute -right-24 top-10 h-[560px] w-[560px] opacity-[0.22]"
          viewBox="0 0 400 400"
          fill="none"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx="200"
              cy="200"
              r={40 + i * 22}
              stroke="#4da3ff"
              strokeWidth="1"
            />
          ))}
          <line x1="0" y1="200" x2="400" y2="200" stroke="#4da3ff" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="400" stroke="#4da3ff" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-5xl flex-col justify-center px-5 pt-16">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-accent-bright">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
          {hero.eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
          {hero.headlineA} {hero.headlineB}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          {hero.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={hero.primaryCta.href}
            onClick={() => track(hero.primaryCta.event)}
            className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            {hero.primaryCta.label}
          </Link>
          <button
            onClick={() => {
              track(hero.secondaryCta.event);
              openBooking("hero");
            }}
            className="rounded-md border border-white/20 px-6 py-3 text-base font-medium text-white transition-colors hover:border-accent-bright hover:text-accent-bright"
          >
            {hero.secondaryCta.label}
          </button>
        </div>

        {/* Stats band — quick visual proof points */}
        <dl className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.title} className="flex flex-col gap-2">
              <Icon name={s.icon} className="h-5 w-5 text-accent-bright" />
              <dd className="font-heading text-base font-semibold text-white">
                {s.value ? `${s.value} ` : ""}
                {s.title}
              </dd>
              <dt className="text-xs leading-relaxed text-white/55">{s.sub}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
