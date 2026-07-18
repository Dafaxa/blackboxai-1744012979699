"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { track } from "@/lib/analytics";

export const OPEN_BOOKING_EVENT = "open-booking";

/** Programmatically open the booking modal from anywhere on the client. */
export function openBooking(source: string) {
  window.dispatchEvent(
    new CustomEvent(OPEN_BOOKING_EVENT, { detail: { source } })
  );
}

/**
 * FR-3: Cal.com scheduling embed, loaded lazily inside a dialog so the
 * third-party iframe never costs anything until the user asks for it.
 */
export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const source = (e as CustomEvent).detail?.source ?? "unknown";
      track("booking_open", { source });
      setOpen(true);
    };
    window.addEventListener(OPEN_BOOKING_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_BOOKING_EVENT, onOpen);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <dialog
      ref={dialogRef}
      onClose={close}
      onClick={(e) => {
        // click on backdrop closes
        if (e.target === dialogRef.current) close();
      }}
      aria-label="Book a call"
      className="m-auto w-[min(92vw,900px)] rounded-lg border border-slate-line bg-ink-soft p-0 backdrop:bg-black/70"
    >
      <div className="flex items-center justify-between border-b border-slate-line px-4 py-3">
        <p className="text-sm font-medium text-mist">Book a call</p>
        <button
          onClick={close}
          className="rounded px-2 py-1 text-sm text-mist-dim hover:text-mist"
          aria-label="Close booking dialog"
        >
          ✕
        </button>
      </div>
      {open && (
        <iframe
          src={site.calLink}
          title="Scheduling — book a call with Dafa"
          className="h-[70vh] w-full bg-ink-soft"
        />
      )}
    </dialog>
  );
}
