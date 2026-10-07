import { domains } from "@/content/site";
import Reveal from "./Reveal";
import {
  FactoryIcon,
  GlobeIcon,
  IconChip,
  NetworkIcon,
  PropertyIcon,
  WaveformIcon,
} from "./Icons";

const domainIcons = {
  property: PropertyIcon,
  factory: FactoryIcon,
  waveform: WaveformIcon,
  globe: GlobeIcon,
  network: NetworkIcon,
} as const;

/** Five domains the framework is applied across: property, industry, energy, trade, talent. */
export default function Domains() {
  return (
    <section
      id="domains"
      className="mx-auto max-w-5xl border-t border-slate-line px-5 py-24 sm:py-32"
    >
      <Reveal>
        <h2 className="text-3xl font-bold text-mist sm:text-4xl">
          {domains.heading}
        </h2>
        <p className="mt-4 max-w-xl text-mist-dim">{domains.sub}</p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {domains.items.map((item) => {
          const Icon = domainIcons[item.icon];
          return (
            <Reveal key={item.name}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-line bg-ink-soft/60 p-6">
                <IconChip size="lg">
                  <Icon className="h-6 w-6" />
                </IconChip>
                <h3 className="mt-4 font-heading text-lg font-semibold text-mist">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mist-dim">
                  {item.line}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
