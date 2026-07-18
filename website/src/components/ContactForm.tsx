"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-slate-line bg-ink px-4 py-3 text-sm text-mist placeholder:text-mist-dim/60 focus:border-accent";

/**
 * FR-1/FR-2: contact form posting server-side only (never URL params),
 * with honeypot anti-spam and explicit success/error states.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body.error ?? "Something went wrong. Please email me directly.");
      }
      track("form_submit");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please email me directly."
      );
    }
  }

  if (status === "success") {
    return (
      <p
        role="status"
        className="rounded-md border border-accent/40 bg-accent/10 p-4 text-sm text-mist"
      >
        Thanks — your message is in. I read everything and reply to serious
        inquiries within two working days.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-mist">
            Name
          </label>
          <input id="name" name="name" required maxLength={100} autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-mist">
            Email
          </label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="organization" className="mb-1.5 block text-sm text-mist">
          Organization
        </label>
        <input id="organization" name="organization" required maxLength={200} autoComplete="organization" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-mist">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} maxLength={5000} className={inputClass} />
      </div>

      {/* Honeypot — hidden from real users, bots fill it in */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-md border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-fit rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
