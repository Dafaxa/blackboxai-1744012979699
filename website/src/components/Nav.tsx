"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { openBooking } from "./BookingModal";

/**
 * FR-5: sticky nav, smooth scroll (CSS scroll-behavior), active-section
 * highlight via IntersectionObserver.
 */
export default function Nav() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-slate-line bg-ink/90 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5"
      >
        <a
          href="#top"
          className="font-heading text-base font-semibold tracking-tight text-mist"
        >
          {site.name}
          <span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`text-sm transition-colors hover:text-mist ${
                active === item.href ? "text-accent" : "text-mist-dim"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => openBooking("nav")}
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Book a call
        </button>
      </nav>
    </header>
  );
}
