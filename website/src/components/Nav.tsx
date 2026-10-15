"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/content/site";
import { openBooking } from "./BookingModal";

/** Routes whose first section is a dark-navy hero get a dark header to match. */
function isDarkRoute(pathname: string) {
  return pathname === "/contact" || /^\/ventures\/[^/]+$/.test(pathname);
}

/**
 * Sticky nav shared across every route. Header color is static per route
 * (light on light-hero pages, dark on navy-hero pages) rather than
 * scroll-reactive, matching the source design.
 */
export default function Nav() {
  const pathname = usePathname();
  const onDark = isDarkRoute(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape, on route change, and when the
  // viewport widens past sm.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const mq = window.matchMedia("(min-width: 640px)");
    const onResize = () => {
      if (mq.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur ${
        onDark
          ? "border-b border-white/10 bg-navy/95"
          : "border-b border-slate-line bg-ink/95"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5"
      >
        <Link
          href="/"
          className={`font-heading text-base font-semibold tracking-tight ${
            onDark ? "text-white" : "text-mist"
          }`}
        >
          {site.name}
          <span className="text-accent-bright">.</span>
        </Link>
        <div className="hidden items-center gap-6 sm:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={`text-sm transition-colors ${
                  active
                    ? onDark
                      ? "text-accent-bright"
                      : "text-accent"
                    : onDark
                      ? "text-white/70 hover:text-white"
                      : "text-mist-dim hover:text-mist"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => openBooking("nav")}
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Contact
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition-colors sm:hidden ${
              onDark ? "border-white/25 text-white" : "border-slate-line text-mist"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className={`border-t sm:hidden ${
            onDark ? "border-white/10 bg-navy" : "border-slate-line bg-ink"
          }`}
        >
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "true" : undefined}
                    className={`block py-3 text-base ${
                      active
                        ? onDark
                          ? "text-accent-bright"
                          : "text-accent"
                        : onDark
                          ? "text-white"
                          : "text-mist"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
