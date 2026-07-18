import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/content/site";

/**
 * FR-1/FR-2: server-side validation + email delivery via Resend.
 * Requires env vars in production:
 *   RESEND_API_KEY  — Resend API key
 *   CONTACT_TO      — destination inbox (defaults to site.email)
 *   CONTACT_FROM    — verified sender, e.g. "Site <noreply@yourdomain.com>"
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "website" field. Pretend success.
  if (clean(body.website, 200) !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const organization = clean(body.organization, 200);
  const message = clean(body.message, 5000);

  if (!name || !organization || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please fill in all fields with a valid email." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] RESEND_API_KEY not set; submission:", {
        name,
        email,
        organization,
      });
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: `Email delivery is not configured yet. Please email ${site.email} directly.` },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "Website <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? site.email,
      replyTo: email,
      subject: `Website inquiry — ${name} (${organization})`,
      text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\n${message}`,
    });
    if (error) throw new Error(error.message);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] delivery failed:", err);
    return NextResponse.json(
      { error: `Could not send right now. Please email ${site.email} directly.` },
      { status: 502 }
    );
  }
}
