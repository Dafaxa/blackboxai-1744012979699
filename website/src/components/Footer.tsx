import Link from "next/link";
import { footer, nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-line">
      <div className="mx-auto max-w-5xl px-5 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="font-heading text-base font-semibold tracking-tight text-mist"
          >
            {site.name}
            <span className="text-accent">.</span>
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-mist-dim hover:text-mist"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-5">
            <a
              href={`mailto:${site.email}`}
              className="text-xs text-mist-dim hover:text-mist"
            >
              Email
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-mist-dim hover:text-mist"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-slate-line pt-6">
          <p className="text-xs text-mist-dim">{footer.line}</p>
          <p className="text-xs text-mist-dim">{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}
