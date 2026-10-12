"use client";

import { contact, site } from "@/content/site";
import { track } from "@/lib/analytics";
import { openBooking } from "./BookingModal";

export default function ContactActions() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={() => {
          track(contact.cta.event);
          openBooking("contact");
        }}
        className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
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
  );
}
