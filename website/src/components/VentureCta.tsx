"use client";

import Image from "next/image";
import { track } from "@/lib/analytics";
import { openBooking } from "./BookingModal";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import type { ventures } from "@/content/site";

export default function VentureCta({
  venture,
}: {
  venture: (typeof ventures)[number];
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src={venture.hero}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>
      <div className="relative mx-auto flex max-w-5xl flex-col gap-12 px-5 py-20 sm:py-28 lg:flex-row lg:items-center lg:justify-between">
        <Reveal className="max-w-xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
            LET&apos;S BUILD THE NEXT
            <span className="h-px w-10 bg-accent-bright" />
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-[1.02] text-white sm:text-5xl">
            Interested in <span className="text-accent-bright">{venture.name}?</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-line">
            {venture.ctaText}
          </p>
          <button
            onClick={() => {
              track(`venture_${venture.slug}_cta`);
              openBooking(`venture_${venture.slug}`);
            }}
            className="mt-8 rounded-md bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
          >
            Let&apos;s connect →
          </button>
        </Reveal>

        <Reveal className="flex flex-col gap-6 lg:w-80 lg:shrink-0">
          {venture.ctaItems.map((item) => (
            <div key={item.t} className="flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent-bright/50 bg-navy/70 text-accent-bright">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-white">
                  {item.t}
                </p>
                <p className="text-xs leading-relaxed text-slate-line">
                  {item.d}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
