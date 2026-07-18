import { thesis } from "@/content/site";
import Reveal from "./Reveal";

/** Layered diagram is the centerpiece: infrastructure → intelligence → proof. */
export default function Thesis() {
  return (
    <section id="thesis" className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
      <Reveal>
        <h2 className="text-3xl font-bold text-mist sm:text-4xl">
          {thesis.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist-dim">
          {thesis.paragraph}
        </p>
        <p className="mt-4 max-w-2xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-mist">
          {thesis.whyNow}
        </p>
      </Reveal>

      <Reveal className="mt-14">
        <ol className="grid gap-3" aria-label="The stack, bottom to top">
          {[...thesis.layers].reverse().map((layer, i) => {
            const depth = thesis.layers.length - 1 - i; // 0 = top (Proof)
            return (
              <li
                key={layer.title}
                className="mx-auto rounded-lg border border-slate-line bg-ink-soft p-5 sm:p-6"
                style={{ width: `${84 + i * 8}%` }}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-heading text-xs uppercase tracking-widest text-accent">
                    {String(depth + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-mist">
                    {layer.title}
                  </h3>
                  <p className="text-sm text-mist-dim">{layer.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="mt-3 text-xs uppercase tracking-widest text-mist-dim">
          Infrastructure → Intelligence → Proof
        </p>
      </Reveal>
    </section>
  );
}
