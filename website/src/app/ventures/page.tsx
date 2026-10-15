import type { Metadata } from "next";
import { site, ventures, venturesPage } from "@/content/site";
import Reveal from "@/components/Reveal";
import VentureCard from "@/components/VentureCard";

export const metadata: Metadata = {
  title: `${venturesPage.heading} — ${site.name}`,
  description: venturesPage.sub,
};

export default function VenturesPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {venturesPage.label}
        </p>
        <h1 className="mt-3 text-3xl font-bold text-mist sm:text-4xl">
          {venturesPage.heading}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-mist-dim">{venturesPage.sub}</p>
      </Reveal>

      <Reveal className="mt-12">
        <ul className="grid gap-5 sm:grid-cols-2">
          {ventures.map((v, i) => (
            <li key={v.slug}>
              <VentureCard venture={v} index={i} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
