import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, ventures } from "@/content/site";
import Reveal from "@/components/Reveal";
import VentureCard from "@/components/VentureCard";
import VentureCta from "@/components/VentureCta";
import { Icon, IconChip } from "@/components/Icons";

export function generateStaticParams() {
  return ventures.map((v) => ({ slug: v.slug }));
}

function getVenture(slug: string) {
  return ventures.find((v) => v.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) return {};
  return {
    title: `${venture.name} — ${site.name}`,
    description: venture.desc,
  };
}

export default async function VenturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const venture = getVenture(slug);
  if (!venture) notFound();

  const related = venture.related
    .map((slug) => ventures.find((v) => v.slug === slug))
    .filter((v): v is (typeof ventures)[number] => !!v);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="relative h-[46vh] min-h-[320px] w-full">
          <Image
            src={venture.hero}
            alt={venture.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />
        </div>
        <div className="relative mx-auto -mt-28 max-w-5xl px-5 pb-16">
          <Link
            href="/ventures"
            className="text-xs uppercase tracking-widest text-accent-bright hover:underline"
          >
            ← All ventures
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <IconChip size="lg">
              <Icon name={venture.icon} className="h-6 w-6" />
            </IconChip>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-bright">
              {venture.sub}
            </p>
          </div>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
            {venture.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            {venture.desc}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {venture.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <Reveal>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {venture.feats.map((f) => (
              <li
                key={f.t}
                className="rounded-xl border border-slate-line bg-ink p-5 shadow-[var(--shadow-card)]"
              >
                <IconChip>
                  <Icon name={f.icon} className="h-5 w-5" />
                </IconChip>
                <p className="mt-4 font-heading text-base font-semibold text-mist">
                  {f.t}
                </p>
                <p className="mt-1 text-sm text-mist-dim">{f.d}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Focus areas */}
      <section className="border-t border-slate-line bg-ink-soft">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:py-32">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              FOCUS AREAS
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold text-mist sm:text-4xl">
              {venture.focusHeading}
            </h2>
            <p className="mt-4 max-w-xl text-mist-dim">{venture.focusSub}</p>
          </Reveal>

          <Reveal className="mt-12">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {venture.focus.map((item, i) => (
                <li
                  key={item.t}
                  className="overflow-hidden rounded-xl border border-slate-line bg-ink shadow-[var(--shadow-card)]"
                >
                  <div className="relative h-36 w-full bg-ink-soft">
                    <Image
                      src={item.img}
                      alt={item.t}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-xs uppercase tracking-widest text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-heading text-base font-semibold text-mist">
                        {item.t}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                      {item.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <VentureCta venture={venture} />

      {related.length > 0 && (
        <section className="border-t border-slate-line">
          <div className="mx-auto max-w-5xl px-5 py-20">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                OTHER VENTURES
              </p>
            </Reveal>
            <Reveal className="mt-6">
              <ul className="grid gap-5 sm:grid-cols-2">
                {related.map((v) => {
                  const idx = ventures.findIndex((x) => x.slug === v.slug);
                  return (
                    <li key={v.slug}>
                      <VentureCard venture={v} index={idx} />
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
