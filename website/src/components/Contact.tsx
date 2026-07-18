"use client";

import { contact, site } from "@/content/site";
import { track } from "@/lib/analytics";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import { openBooking } from "./BookingModal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
      <Reveal>
        <h2 className="text-3xl font-bold text-mist sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-mist-dim">
          {contact.line}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => {
              track(contact.cta.event);
              openBooking("contact");
            }}
            className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-ink transition-opacity hover:opacity-90"
          >
            {contact.cta.label}
          </button>
          <a
            href={`mailto:${site.email}`}
            onClick={() => track("contact_email")}
            className="text-sm text-mist underline decoration-slate-line underline-offset-4 hover:decoration-accent"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("contact_linkedin")}
            className="text-sm text-mist underline decoration-slate-line underline-offset-4 hover:decoration-accent"
          >
            LinkedIn ↗
          </a>
        </div>
      </Reveal>
      <Reveal className="relative mt-12 max-w-2xl">
        <ContactForm />
      </Reveal>
    </section>
  );
}
