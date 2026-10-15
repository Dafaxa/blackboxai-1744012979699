"use client";

import Image from "next/image";
import Link from "next/link";
import { hero, stats } from "@/content/site";
import { track } from "@/lib/analytics";
import { openBooking } from "./BookingModal";
import { Icon } from "./Icons";

export default function Hero() {
  return (
    <section className="bg-ink-soft">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-line bg-ink px-3 py-1 text-xs uppercase tracking-widest text-mist-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] text-mist sm:text-5xl">
            {hero.headlineA}{" "}
            <span className="text-accent">{hero.headlineB}</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist-dim">
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
              className="rounded-md border border-slate-line px-6 py-3 text-base font-medium text-mist transition-colors hover:border-accent hover:text-accent"
            >
              {hero.secondaryCta.label}
            </button>
          </div>
        </div>

        <div className="relative h-72 overflow-hidden rounded-xl sm:h-96">
          <Image
            src="/images/home-hero.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Stats band — quick visual proof points */}
      <div className="border-t border-slate-line">
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.title} className="flex flex-col gap-2">
              <Icon name={s.icon} className="h-5 w-5 text-accent" />
              <dd className="font-heading text-base font-semibold text-mist">
                {s.value ? `${s.value} ` : ""}
                {s.title}
              </dd>
              <dt className="text-xs leading-relaxed text-mist-dim">{s.sub}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
