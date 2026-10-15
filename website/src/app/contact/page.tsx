import type { Metadata } from "next";
import Image from "next/image";
import { contact, site, ventures } from "@/content/site";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ContactActions from "@/components/ContactActions";
import VentureCard from "@/components/VentureCard";
import { Icon, IconChip } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: contact.sub,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero with inline steps */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src={contact.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-navy/10" />
        </div>
        <div className="relative mx-auto grid max-w-5xl gap-10 px-5 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
              {contact.label}
              <span className="h-px w-10 bg-accent-bright" />
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.02] text-white sm:text-5xl">
              {contact.heading}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-line">
              {contact.sub}
            </p>
            <a
              href="#form"
              className="mt-8 inline-block rounded-md bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              {contact.talk}
            </a>
          </Reveal>

          <Reveal className="grid gap-y-4 sm:grid-cols-3 sm:gap-x-2">
            {contact.steps.map((step) => (
              <div
                key={step.t}
                className="flex flex-col gap-2 border-l border-white/15 px-5 py-1"
              >
                <Icon name={step.icon} className="h-7 w-7 text-accent-bright" />
                <p className="text-base font-semibold leading-snug text-white">
                  {step.t}
                </p>
                <p className="text-xs leading-relaxed text-slate-line">
                  {step.d}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="bg-ink-soft">
        <div className="mx-auto grid max-w-5xl items-start gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
              {contact.collabLabel}
              <span className="h-px w-10 bg-accent" />
            </p>
            <h2 className="mt-4 text-3xl font-bold text-mist sm:text-4xl">
              {contact.collabHeading}
            </h2>
            <p className="mt-2 text-sm text-mist-dim">{contact.collabIntro}</p>

            <ul className="mt-5 flex flex-col border-t border-slate-line">
              {contact.collabItems.map((item, i) => (
                <li
                  key={item.t}
                  className="flex items-center gap-4 border-b border-slate-line py-4"
                >
                  <span className="w-7 shrink-0 text-xs font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-heading text-lg font-bold text-mist">
                      {item.t}
                    </p>
                    <p className="text-sm text-mist-dim">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-mist-dim">
                Or reach me directly
              </p>
              <div className="mt-3">
                <ContactActions />
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-xl border border-slate-line bg-ink p-6 shadow-[var(--shadow-card)] sm:p-9">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Explore ventures */}
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
                EXPLORE OUR VENTURES
                <span className="h-px w-10 bg-accent-bright" />
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-8">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ventures.map((v, i) => (
                <li key={v.slug}>
                  <VentureCard venture={v} index={i} />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {contact.values.map((v) => (
              <div key={v.t} className="flex items-center gap-4">
                <IconChip>
                  <Icon name={v.icon} className="h-5 w-5" />
                </IconChip>
                <div>
                  <p className="font-heading text-sm font-semibold text-white">
                    {v.t}
                  </p>
                  <p className="text-xs text-slate-line">{v.d}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
