"use client";

import { track as vercelTrack } from "@vercel/analytics";

/**
 * FR-6: analytics events for hero CTA, section CTAs, form submit, booking open.
 * Wraps Vercel Analytics; safe to call anywhere on the client.
 */
export function track(event: string, props?: Record<string, string | number>) {
  try {
    vercelTrack(event, props);
  } catch {
    // analytics must never break the page
  }
  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, props ?? {});
  }
}
