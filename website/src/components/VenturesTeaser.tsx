import Link from "next/link";
import { ventures, venturesTeaser } from "@/content/site";
import Reveal from "./Reveal";
import VentureCard from "./VentureCard";

export default function VenturesTeaser() {
  return (
    <section className="border-y border-slate-line bg-ink-soft">
      <div className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            {venturesTeaser.label}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-mist sm:text-4xl">
            {venturesTeaser.heading}
          </h2>
          <p className="mt-4 max-w-xl text-mist-dim">{venturesTeaser.sub}</p>
        </Reveal>

        <Reveal className="mt-12">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ventures.map((v, i) => (
              <li key={v.slug}>
                <VentureCard venture={v} index={i} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10">
          <Link
            href="/ventures"
            className="text-sm font-medium text-accent hover:underline"
          >
            View All Ventures →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
