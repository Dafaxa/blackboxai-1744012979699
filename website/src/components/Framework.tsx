import { framework } from "@/content/site";
import Reveal from "./Reveal";
import { BarsIcon, CubeIcon, GearIcon, IconChip, NeuralIcon } from "./Icons";

const stepIcons = {
  neural: NeuralIcon,
  cube: CubeIcon,
  bars: BarsIcon,
  gear: GearIcon,
} as const;

/** Four-step framework: Understand → Simulate → Optimize → Operate. */
export default function Framework() {
  return (
    <section id="framework" className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <h2 className="text-3xl font-bold text-mist sm:text-4xl">
            {framework.heading}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist-dim">
            {framework.paragraph}
          </p>
          <p className="mt-4 rounded-r-lg border-l-2 border-accent bg-accent-dim/60 py-3 pl-4 pr-4 text-sm leading-relaxed text-mist">
            {framework.positioning}
          </p>
        </Reveal>

        <Reveal className="lg:pt-2">
          <ol className="relative grid gap-4" aria-label="The framework, step by step">
            {/* connector spine */}
            <span
              aria-hidden="true"
              className="absolute bottom-8 left-[27px] top-8 w-px bg-slate-line"
            />
            {framework.steps.map((step, i) => {
              const Icon = stepIcons[step.icon];
              return (
                <li
                  key={step.title}
                  className="relative rounded-xl border border-slate-line bg-ink p-5 shadow-[var(--shadow-card)]"
                >
                  <div className="flex items-start gap-4">
                    <IconChip>
                      <Icon className="h-5 w-5" />
                    </IconChip>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <h3 className="font-heading text-lg font-semibold text-mist">
                          {step.title}
                        </h3>
                        <span className="font-heading text-xs uppercase tracking-widest text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-center text-xs uppercase tracking-widest text-accent">
            {framework.steps.map((s) => s.title).join(" → ")} →{" "}
            {framework.outcome}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
