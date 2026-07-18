"use client";

import { ventures } from "@/content/site";
import { track } from "@/lib/analytics";
import Reveal from "./Reveal";

export default function Ventures() {
  return (
    <section id="ventures" className="border-y border-slate-line bg-ink-soft">
      <div className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
        <Reveal>
          <h2 className="text-3xl font-bold text-mist sm:text-4xl">
            {ventures.heading}
          </h2>
          <p className="mt-4 max-w-xl text-mist-dim">{ventures.sub}</p>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid gap-5 sm:grid-cols-3">
            {ventures.featured.map((v, i) => (
              <li key={v.name}>
                <a
                  href={v.href}
                  onClick={() => track(v.event)}
                  className="group flex h-full flex-col rounded-lg border border-slate-line bg-ink p-6 transition-colors hover:border-accent"
                >
                  <span className="font-heading text-xs uppercase tracking-widest text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-semibold text-mist">
                    {v.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-dim">
                    {v.line}
                  </p>
                  <span className="mt-5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-line pt-6">
            <p className="text-xs uppercase tracking-widest text-mist-dim">
              {ventures.tier2.label}
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {ventures.tier2.items.map((name) => (
                <li key={name} className="text-sm text-mist">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
