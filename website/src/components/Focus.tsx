import { focus } from "@/content/site";
import Reveal from "./Reveal";
import { BulbIcon, ChipIcon, IconChip, LeafIcon } from "./Icons";

const segmentIcons = [ChipIcon, BulbIcon, LeafIcon]; // matches focus.segments order

/**
 * Content pillars segmented into Technology, Innovation & Sustainability —
 * the three lenses the thesis is argued through.
 */
export default function Focus() {
  return (
    <section
      id="focus"
      className="mx-auto max-w-5xl border-t border-slate-line px-5 py-24 sm:py-32"
    >
      <Reveal>
        <h2 className="text-3xl font-bold text-mist sm:text-4xl">
          {focus.heading}
        </h2>
        <p className="mt-4 max-w-xl text-mist-dim">{focus.sub}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {focus.segments.map((segment, si) => {
          const Icon = segmentIcons[si];
          return (
            <Reveal key={segment.title}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-line bg-ink-soft/60 p-6">
                <IconChip size="lg">
                  <Icon className="h-6 w-6" />
                </IconChip>
                <h3 className="mt-4 font-heading text-xl font-semibold text-mist">
                  {segment.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {segment.tagline}
                </p>
                <ul className="mt-6 flex-1 space-y-5">
                  {segment.topics.map((topic) => (
                    <li key={topic.name} className="relative pl-5">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[7px] h-1.5 w-1.5 rounded-full bg-accent-bright"
                      />
                      <p className="text-sm font-semibold text-mist">
                        {topic.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                        {topic.line}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
