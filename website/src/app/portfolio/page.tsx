import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact, portfolioPage, site, work } from "@/content/site";
import Reveal from "@/components/Reveal";
import WorkItemCard from "@/components/WorkItemCard";

export const metadata: Metadata = {
  title: `Portfolio — ${site.name}`,
  description: portfolioPage.sub,
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/ananta/f-5.jpg"
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
              {portfolioPage.label}
              <span className="h-px w-10 bg-accent-bright" />
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl">
              {portfolioPage.heading}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-line">
              {portfolioPage.sub}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Selected Work */}
      <section className="bg-ink-soft">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
                  {work.label}
                  <span className="h-px w-10 bg-accent" />
                </p>
                <h2 className="mt-4 text-3xl font-bold text-mist sm:text-4xl">
                  {work.heading}
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-mist-dim">
                {work.sub}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 flex flex-col gap-5">
            {work.items.map((item, i) => (
              <Reveal key={item.title}>
                <WorkItemCard item={item} index={i} />
              </Reveal>
            ))}
          </div>
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
