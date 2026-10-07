"use client";

import { ventures } from "@/content/site";
import { track } from "@/lib/analytics";
import Reveal from "./Reveal";
import { ChipIcon, GlobeIcon, IconChip, NetworkIcon, PropertyIcon } from "./Icons";

const ventureIcons = {
  chip: ChipIcon,
  property: PropertyIcon,
  globe: GlobeIcon,
  network: NetworkIcon,
} as const;

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
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ventures.featured.map((v, i) => {
              const Icon = ventureIcons[v.icon];
              return (
              <li key={v.name}>
                <a
                  href={v.href}
                  onClick={() => track(v.event)}
                  className="group flex h-full flex-col rounded-xl border border-slate-line bg-ink p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="flex items-center justify-between">
                    <IconChip size="lg">
                      <Icon className="h-6 w-6" />
                    </IconChip>
                    <span className="font-heading text-xs uppercase tracking-widest text-mist-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-mist">
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
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
