import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact, site, ventures, venturesPage } from "@/content/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `${venturesPage.heading} — ${site.name}`,
  description: venturesPage.sub,
};

export default function VenturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/asthaloka/hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-navy/10" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
              {venturesPage.label}
              <span className="h-px w-10 bg-accent-bright" />
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.02] text-white sm:text-5xl">
              {venturesPage.heading}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-line">
              {venturesPage.sub}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ventures list */}
      <section className="bg-ink-soft">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 py-20 sm:py-24">
          {ventures.map((v, i) => (
            <Reveal key={v.slug}>
              <article
                className={`flex flex-col overflow-hidden rounded-xl border border-slate-line bg-ink lg:flex-row ${
                  i % 2 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <Link
                  href={`/ventures/${v.slug}`}
                  className="relative block h-64 flex-1 lg:h-auto"
                >
                  <Image
                    src={v.hero}
                    alt={v.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col justify-center gap-4 p-7 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Venture {String(i + 1).padStart(2, "0")} / 04
                  </p>
                  <h2 className="font-heading text-3xl font-bold tracking-wide text-mist sm:text-4xl">
                    {v.name}
                  </h2>
                  <p className="font-heading text-lg font-semibold text-accent">
                    {v.sub}
                  </p>
                  <p className="text-sm leading-relaxed text-mist-dim">
                    {v.desc}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {v.focus.map((f) => (
                      <li
                        key={f.t}
                        className="rounded-full border border-slate-line px-3 py-1 text-xs text-mist"
                      >
                        {f.t}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/ventures/${v.slug}`}
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-md border border-accent px-5 py-3 text-xs font-semibold uppercase tracking-wide text-accent transition-colors hover:bg-accent-dim"
                  >
                    Explore {v.name} →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
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
