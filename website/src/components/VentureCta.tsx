"use client";

import { track } from "@/lib/analytics";
import { openBooking } from "./BookingModal";
import { Icon, IconChip } from "./Icons";
import Reveal from "./Reveal";
import type { ventures } from "@/content/site";

export default function VentureCta({
  venture,
}: {
  venture: (typeof ventures)[number];
}) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            {venture.ctaText}
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => {
                track(`venture_${venture.slug}_cta`);
                openBooking(`venture_${venture.slug}`);
              }}
              className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Book a call
            </button>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <ul
            className={`grid gap-5 sm:grid-cols-2 ${
              venture.ctaItems.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            }`}
          >
            {venture.ctaItems.map((item) => (
              <li
                key={item.t}
                className="rounded-xl border border-white/15 bg-white/5 p-5"
              >
                <IconChip>
                  <Icon name={item.icon} className="h-5 w-5" />
                </IconChip>
                <p className="mt-4 font-heading text-base font-semibold text-white">
                  {item.t}
                </p>
                <p className="mt-1 text-sm text-white/60">{item.d}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
