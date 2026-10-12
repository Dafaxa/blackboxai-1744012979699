import type { Metadata } from "next";
import Image from "next/image";
import { about, site } from "@/content/site";
import Reveal from "@/components/Reveal";
import Credibility from "@/components/Credibility";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: about.thesisBody,
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-5 py-24 pt-32 sm:py-32 sm:pt-40">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {about.label}
          </p>
          <h1 className="mt-3 max-w-2xl text-3xl font-bold text-mist sm:text-4xl">
            {about.heading}
          </h1>
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-start gap-8 sm:flex-row">
          <Image
            src={about.photo}
            alt={about.photoAlt}
            width={180}
            height={180}
            className="rounded-xl border border-slate-line object-cover"
          />
          <div>
            <p className="font-heading text-lg font-semibold text-mist">
              {about.role}
            </p>
            <ul className="mt-2 space-y-1">
              {about.profile.map((line) => (
                <li key={line} className="text-sm text-mist-dim">
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-heading text-xl font-semibold text-accent">
              {about.quote}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-14 space-y-5 text-base leading-relaxed text-mist-dim">
          <p>{about.p1}</p>
          <p>{about.p2}</p>
          <ul className="flex flex-wrap gap-2">
            {about.industries.map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate-line px-3 py-1 text-sm text-mist"
              >
                {item}
              </li>
            ))}
          </ul>
          <p>{about.p3}</p>
          <p>
            {about.p4a}
            <span className="font-semibold text-mist">{about.p4b}</span>
            {about.p4c}
          </p>
        </Reveal>

        <Reveal className="mt-10 rounded-r-lg border-l-2 border-accent bg-accent-dim/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {about.thesisLabel}
          </p>
          <p className="mt-2 text-base leading-relaxed text-mist">
            {about.thesisBody}
          </p>
        </Reveal>
      </section>

      <div className="border-t border-slate-line">
        <Credibility />
      </div>

      <section className="bg-navy">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:py-32">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-bright">
              {about.indoLabel}
            </p>
            <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold text-white sm:text-4xl">
              {about.indoHeading}
            </h2>
            <div className="mx-auto mt-6 max-w-xl space-y-4 text-white/70">
              <p>{about.indoP1}</p>
              <p>{about.indoP2}</p>
              <p>{about.indoP3}</p>
            </div>
            <p className="mt-8 font-heading text-lg font-semibold text-white">
              {about.indoT1}
              <br />
              <span className="text-accent-bright">{about.indoT2}</span>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
