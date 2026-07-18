import { credibility } from "@/content/site";
import Reveal from "./Reveal";

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
              className="rounded-lg border border-slate-line p-6"
            >
              <p className="text-xs uppercase tracking-widest text-accent">
                {win.note}
              </p>
              <p className="mt-2 font-heading text-lg font-semibold text-mist">
                {win.title}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-mist-dim">
          {credibility.institutions}
        </p>
      </Reveal>
    </section>
  );
}
