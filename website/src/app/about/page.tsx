import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, contact, site } from "@/content/site";
import Reveal from "@/components/Reveal";
import Credibility from "@/components/Credibility";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: about.thesisBody,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-accent-dim/60">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
              {about.label}
              <span className="h-px w-10 bg-accent" />
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-[1.1] text-mist sm:text-4xl">
              {about.heading}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-mist-dim">
              {about.p1} {about.p2}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {about.industries.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-line bg-ink px-4 py-2 font-heading text-sm font-semibold text-mist"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-relaxed text-mist-dim">
              {about.p3} {about.p4a}
              <strong className="text-accent">{about.p4b}</strong>
              {about.p4c}
            </p>
          </Reveal>

          <Reveal className="relative min-h-[420px] overflow-hidden rounded-xl bg-navy">
            <Image
              src="/images/home-hero.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "58% center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/0 to-navy/0" />
            <div className="absolute inset-x-6 bottom-6 flex items-center gap-4 text-white">
              <Image
                src={about.photo}
                alt={about.photoAlt}
                width={64}
                height={64}
                className="h-16 w-16 shrink-0 rounded-full border-2 border-white object-cover"
              />
              <div>
                <p className="font-heading text-lg font-semibold tracking-[0.3em]">
                  {site.name.toUpperCase()}
                </p>
                <p className="text-sm font-semibold">{about.role}</p>
                <ul className="mt-1 space-y-1 text-xs text-slate-line">
                  {about.profile.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Thesis banner */}
      <section className="border-b border-slate-line">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-16 sm:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
              {about.thesisLabel}
              <span className="h-px w-10 bg-accent" />
            </p>
            <p className="mt-4 font-heading text-2xl font-bold text-mist sm:text-3xl">
              AI <span className="font-normal text-accent">→</span> SIMULATE{" "}
              <span className="font-normal text-accent">→</span> OPTIMIZE{" "}
              <span className="font-normal text-accent">→</span> OPERATE
            </p>
          </Reveal>
          <Reveal>
            <p className="text-base leading-relaxed text-mist-dim">
              {about.thesisBody}
            </p>
          </Reveal>
        </div>
      </section>

      <Credibility />

      {/* Building from Indonesia */}
      <section className="bg-navy">
        <div className="mx-auto max-w-3xl px-5 py-24 sm:py-32">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
              {about.indoLabel}
              <span className="h-px w-10 bg-accent-bright" />
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-bold text-white sm:text-4xl">
              {about.indoHeading}
            </h2>
            <div className="mt-6 max-w-xl space-y-3 text-base leading-relaxed text-slate-line">
              <p>{about.indoP1}</p>
              <p>{about.indoP2}</p>
              <p>{about.indoP3}</p>
            </div>
            <p className="mt-8 font-heading text-xl font-bold leading-snug sm:text-2xl">
              <span className="text-white">{about.indoT1}</span>
              <br />
              <span className="text-accent-bright">{about.indoT2}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Current Focus */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
              {about.focusLabel}
              <span className="h-px w-10 bg-accent" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-mist sm:text-4xl">
              {about.focusHeading}
            </h2>
            <p className="mt-2 text-sm text-mist-dim">{about.focusIntro}</p>
          </Reveal>

          <Reveal className="mt-8 flex flex-wrap items-center gap-3 font-heading text-sm font-bold tracking-wide text-mist sm:text-base">
            {about.focusParts.map((part, i) => (
              <span key={part} className="flex items-center gap-3">
                <span
                  className={
                    i === about.focusParts.length - 1
                      ? "rounded-md bg-accent px-5 py-4 text-white"
                      : "rounded-md border border-mist px-5 py-4"
                  }
                >
                  {part}
                </span>
                {i < about.focusParts.length - 1 && (
                  <span className="text-accent">+</span>
                )}
              </span>
            ))}
          </Reveal>

          <Reveal className="mt-10 grid gap-8 border-t border-slate-line pt-9 sm:grid-cols-2">
            <div>
              <p className="text-sm text-mist-dim">{about.focusGoalIntro}</p>
              <h3 className="mt-2 font-heading text-2xl font-bold leading-snug text-mist sm:text-3xl">
                {about.focusGoal}
              </h3>
            </div>
            <div className="space-y-2 text-lg leading-relaxed">
              <p className="text-mist-dim">{about.focusNot1}</p>
              <p className="text-mist-dim">{about.focusNot2}</p>
              <p className="mt-2 font-semibold text-accent">{about.focusValues}</p>
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
              {contact.label}
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
