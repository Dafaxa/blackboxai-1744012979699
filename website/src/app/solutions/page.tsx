import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  areas,
  contact,
  industriesSection,
  site,
  solutionsPage,
} from "@/content/site";
import Reveal from "@/components/Reveal";
import FrameworkPicker from "@/components/FrameworkPicker";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Solutions — ${site.name}`,
  description: solutionsPage.sub,
};

function AreaCard({ item, index }: { item: (typeof areas.items)[number]; index: number }) {
  return (
    <Link
      href={`/ventures/${item.relatedSlug}`}
      className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-lg border border-slate-line bg-ink transition-colors hover:border-accent"
    >
      <div className="absolute inset-y-0 right-0 w-1/2">
        <Image
          src={item.img}
          alt=""
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 35vw, 60vw"
          className="object-cover [mask-image:linear-gradient(90deg,transparent_0%,#000_55%)]"
        />
      </div>
      <div className="relative flex h-full max-w-[62%] flex-col gap-3 p-6">
        <span className="text-xs font-semibold text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-heading text-xl font-bold leading-tight text-mist">
          {item.title}
        </h3>
        <ul className="flex flex-1 flex-col gap-1">
          {item.list.map((tag) => (
            <li key={tag} className="text-xs leading-relaxed text-mist-dim">
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-2 flex h-9 w-9 items-center justify-center rounded-full border border-slate-line text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function SolutionsPage() {
  const topAreas = areas.items.slice(0, 4);
  const bottomAreas = areas.items.slice(4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/areas-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/20" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
              {solutionsPage.label}
              <span className="h-px w-10 bg-accent-bright" />
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl">
              {solutionsPage.heading}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-line">
              {solutionsPage.sub}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-ink-soft">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
              {areas.label}
              <span className="h-px w-10 bg-accent" />
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-mist sm:text-4xl">
              {areas.headingA}
              <span className="text-accent">{areas.headingB}</span>
            </h2>
            <p className="mt-4 max-w-xl text-mist-dim">{areas.sub}</p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topAreas.map((item, i) => (
              <Reveal key={item.title}>
                <AreaCard item={item} index={i} />
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {bottomAreas.map((item, i) => (
              <Reveal key={item.title}>
                <AreaCard item={item} index={i + 4} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
              OUR APPROACH
              <span className="h-px w-10 bg-accent-bright" />
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold text-white sm:text-4xl">
              From intelligence to real economic value.
            </h2>
          </Reveal>
          <div className="mt-12">
            <FrameworkPicker />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-ink-soft">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-sm">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
                {industriesSection.label}
                <span className="h-px w-10 bg-accent" />
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-mist">
                {industriesSection.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                {industriesSection.sub}
              </p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4">
              {industriesSection.items.map((ind) => (
                <div
                  key={ind.title}
                  className="flex flex-col gap-2 border-l border-slate-line pl-5"
                >
                  <Icon name={ind.icon} className="h-8 w-8 text-accent" />
                  <p className="text-sm font-bold text-mist">{ind.title}</p>
                  <p className="text-xs text-mist-dim">{ind.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src={contact.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
              LET&apos;S BUILD THE NEXT
              <span className="h-px w-10 bg-accent-bright" />
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold text-white sm:text-4xl">
              {contact.collabHeading}
            </h2>
            <p className="mt-4 max-w-lg text-lg text-slate-line">{contact.sub}</p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-md bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              {contact.cta.label} →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
