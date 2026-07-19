import { credibility } from "@/content/site";
import Reveal from "./Reveal";
import { GlobeIcon, IconChip, TrophyIcon } from "./Icons";

export default function Credibility() {
  return (
    <section id="credibility" className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
      <Reveal>
        <h2 className="text-3xl font-bold text-mist sm:text-4xl">
          {credibility.heading}
        </h2>
      </Reveal>
      <Reveal className="mt-10">
        <ul className="grid gap-5 sm:grid-cols-3">
          {credibility.wins.map((win) => (
            <li
              key={win.title}
              className="rounded-xl border border-slate-line bg-ink p-6 shadow-[var(--shadow-card)]"
            >
              <IconChip>
                <TrophyIcon className="h-5 w-5" />
              </IconChip>
              <p className="mt-4 text-xs uppercase tracking-widest text-accent">
                {win.note}
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-mist">
                {win.title}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 flex max-w-xl items-center gap-3 text-sm leading-relaxed text-mist-dim">
          <GlobeIcon className="h-5 w-5 shrink-0 text-accent" />
          {credibility.institutions}
        </p>
      </Reveal>
    </section>
  );
}
