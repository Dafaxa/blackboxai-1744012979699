import Link from "next/link";
import { areas } from "@/content/site";
import Reveal from "./Reveal";
import { Icon, IconChip } from "./Icons";

/** Six areas of interest, each linking to the venture that applies it. */
export default function Areas() {
  return (
    <section className="mx-auto max-w-5xl border-t border-slate-line px-5 py-24 sm:py-32">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {areas.label}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-mist sm:text-4xl">
          {areas.heading}
        </h2>
        <p className="mt-4 max-w-xl text-mist-dim">{areas.sub}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {areas.items.map((item) => (
          <Reveal key={item.title}>
            <Link
              href={`/ventures/${item.relatedSlug}`}
              className="group flex h-full flex-col rounded-2xl border border-slate-line bg-ink-soft/60 p-6 transition-colors hover:border-accent"
            >
              <IconChip size="lg">
                <Icon name={item.icon} className="h-6 w-6" />
              </IconChip>
              <h3 className="mt-4 font-heading text-lg font-semibold text-mist">
                {item.title}
              </h3>
              <ul className="mt-3 flex flex-1 flex-wrap gap-2">
                {item.list.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-slate-line px-2.5 py-1 text-xs text-mist-dim"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                Explore →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
