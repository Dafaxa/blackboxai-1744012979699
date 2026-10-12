import type { Metadata } from "next";
import Image from "next/image";
import { contact, site } from "@/content/site";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ContactActions from "@/components/ContactActions";
import { Icon, IconChip } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: contact.sub,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src={contact.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 py-24 pt-32 text-center sm:py-32 sm:pt-40">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-bright">
              {contact.label}
            </p>
            <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              {contact.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-white/70">{contact.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20">
        <Reveal>
          <ol className="grid gap-5 sm:grid-cols-3" aria-label="How it works">
            {contact.steps.map((step, i) => (
              <li
                key={step.t}
                className="rounded-xl border border-slate-line bg-ink p-5 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center gap-3">
                  <IconChip>
                    <Icon name={step.icon} className="h-5 w-5" />
                  </IconChip>
                  <span className="font-heading text-xs uppercase tracking-widest text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 font-heading text-base font-semibold text-mist">
                  {step.t}
                </p>
                <p className="mt-1 text-sm text-mist-dim">{step.d}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="border-y border-slate-line bg-ink-soft">
        <div className="mx-auto max-w-5xl px-5 py-20">
          <Reveal>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {contact.values.map((v) => (
                <li key={v.t}>
                  <IconChip>
                    <Icon name={v.icon} className="h-5 w-5" />
                  </IconChip>
                  <p className="mt-3 font-heading text-base font-semibold text-mist">
                    {v.t}
                  </p>
                  <p className="mt-1 text-sm text-mist-dim">{v.d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-20 sm:py-28">
        <Reveal>
          <h2 className="text-2xl font-bold text-mist sm:text-3xl">
            {contact.talk}
          </h2>
          <div className="mt-6">
            <ContactActions />
          </div>
        </Reveal>
        <Reveal className="relative mt-10">
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
