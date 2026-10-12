import Link from "next/link";
import { globalOutlook } from "@/content/site";
import Reveal from "./Reveal";

export default function GlobalOutlook() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:py-32">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-bright">
            {globalOutlook.label}
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            {globalOutlook.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            {globalOutlook.paragraph}
          </p>
          <Link
            href={globalOutlook.cta.href}
            className="mt-8 inline-block rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-accent-bright hover:text-accent-bright"
          >
            {globalOutlook.cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
