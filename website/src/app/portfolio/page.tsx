import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contact, portfolioPage, site, work } from "@/content/site";
import Reveal from "@/components/Reveal";

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
                <article className="relative overflow-hidden rounded-xl bg-navy text-white">
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="100vw"
                      className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-navy/10" />
                  </div>
                  <div className="relative flex max-w-3xl flex-col gap-5 p-6 sm:p-10">
                    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
                      Featured · {String(i + 1).padStart(2, "0")}
                      <span className="h-px w-10 bg-accent-bright" />
                    </p>
                    <h3 className="font-heading text-2xl font-bold leading-tight sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="max-w-lg text-sm leading-relaxed text-slate-line">
                      {item.intro}
                    </p>
                    <div className="flex flex-wrap items-stretch gap-2.5">
                      {item.flow.map((node, j) => {
                        const join =
                          "join" in node ? node.join : j === 0 ? "" : "→";
                        return (
                          <span key={node.label} className="flex items-stretch gap-2.5">
                            {join && (
                              <span className="flex items-center text-lg font-semibold text-accent-bright">
                                {join}
                              </span>
                            )}
                            <span className="flex max-w-[190px] flex-1 flex-col gap-1.5 rounded-md border border-accent-bright/40 bg-navy/80 px-3.5 py-3">
                              <span className="font-heading text-xs font-bold leading-tight text-white">
                                {String(j + 1).padStart(2, "0")} {node.label}
                              </span>
                              {"desc" in node && node.desc && (
                                <span className="text-[11px] leading-snug text-slate-line">
                                  {node.desc}
                                </span>
                              )}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                    <div className="flex items-start gap-3 border-t border-white/10 pt-5 text-sm leading-relaxed">
                      {item.footLabel && (
                        <strong className="shrink-0 text-accent-bright">
                          {item.footLabel}
                        </strong>
                      )}
                      <span>{item.foot}</span>
                    </div>
                  </div>
                </article>
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
