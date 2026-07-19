import { thesis } from "@/content/site";
import Reveal from "./Reveal";
import { ChipIcon, IconChip, LayersIcon, ShieldCheckIcon } from "./Icons";

const layerIcons = [LayersIcon, ChipIcon, ShieldCheckIcon]; // matches thesis.layers order

/** Layered diagram is the centerpiece: infrastructure → intelligence → proof. */
export default function Thesis() {
  return (
    <section id="thesis" className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-mist sm:text-4xl">
            {thesis.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist-dim">
            {thesis.paragraph}
          </p>
          <p className="mt-4 rounded-r-lg border-l-2 border-accent bg-accent-dim/40 py-3 pl-4 pr-4 text-sm leading-relaxed text-mist">
            {thesis.whyNow}
          </p>
        </Reveal>

        <Reveal className="lg:pt-2">
          <ol
            className="relative grid gap-4"
            aria-label="The stack, bottom to top"
          >
            {/* connector spine */}
            <span
              aria-hidden="true"
              className="absolute bottom-8 left-[27px] top-8 w-px bg-slate-line"
            />
            {[...thesis.layers].reverse().map((layer, i) => {
              const depth = thesis.layers.length - 1 - i; // 0 = bottom
              const Icon = layerIcons[depth];
              return (
                <li
                  key={layer.title}
                  className="relative rounded-xl border border-slate-line bg-ink p-5 shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-start gap-4">
                    <IconChip>
                      <Icon className="h-5 w-5" />
                    </IconChip>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-heading text-lg font-semibold text-mist">
                          {layer.title}
                        </h3>
                        <span className="font-heading text-xs uppercase tracking-widest text-accent">
                          {String(depth + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                        {layer.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-center text-xs uppercase tracking-widest text-mist-dim">
            Infrastructure → Intelligence → Proof
          </p>
        </Reveal>
      </div>
    </section>
  );
}
