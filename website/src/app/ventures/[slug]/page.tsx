import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  frameworkSteps,
  industriesSection,
  site,
  ventures,
  work,
} from "@/content/site";
import Reveal from "@/components/Reveal";
import VentureCta from "@/components/VentureCta";
import WorkItemCard from "@/components/WorkItemCard";
import { Icon } from "@/components/Icons";

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

  const vIndex = ventures.findIndex((v) => v.slug === venture.slug);
  const relatedWork = venture.relatedWork.map((i) => work.items[i]);
  const otherVentures = ventures.filter((v) => v.slug !== venture.slug);
  const hasRelatedSection = relatedWork.length > 0;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src={venture.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/20" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-bright">
              Venture {String(vIndex + 1).padStart(2, "0")} / 04
            </p>
            <h1 className="mt-4 font-heading text-6xl font-bold leading-[0.95] tracking-wide text-white sm:text-7xl lg:text-8xl">
              {venture.name}
            </h1>
            <p className="mt-5 max-w-xl font-heading text-2xl font-semibold leading-snug text-accent-bright sm:text-3xl">
              {venture.sub}
            </p>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
              {venture.desc}
            </p>
            <div className="mt-7 flex flex-wrap gap-3.5">
              <Link
                href="/contact"
                className="rounded-md bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
              >
                Let&apos;s connect →
              </Link>
              <a
                href="#focus"
                className="rounded-md border border-white/45 px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-accent-bright"
              >
                Focus areas →
              </a>
            </div>
          </Reveal>

          <Reveal className="mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {venture.feats.map((f) => (
              <div key={f.t} className="flex items-start gap-3">
                <Icon name={f.icon} className="mt-0.5 h-7 w-7 shrink-0 text-accent-bright" />
                <div>
                  <p className="text-sm font-semibold text-white">{f.t}</p>
                  <p className="mt-0.5 text-xs leading-snug text-slate-line">
                    {f.d}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section id="focus" className="bg-ink-soft">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
                  FOCUS AREAS
                  <span className="h-px w-10 bg-accent" />
                </p>
                <h2 className="mt-3 text-3xl font-bold text-mist sm:text-4xl">
                  {venture.focusHeading}
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-mist-dim">
                {venture.focusSub}
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {venture.focus.map((item, i) =>
              venture.card === "dark" ? (
                <Reveal key={item.t}>
                  <div className="flex h-full flex-col overflow-hidden rounded-lg bg-navy text-white">
                    <div className="relative h-40 w-full">
                      <Image
                        src={item.img}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/0 to-navy/0" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <span className="text-xs font-semibold text-accent-bright">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-lg font-bold leading-tight">
                        {item.t}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-line">
                        {item.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal key={item.t}>
                  <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-slate-line bg-ink">
                    <div className="absolute inset-y-0 right-0 w-1/2">
                      <Image
                        src={item.img}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 17vw, (min-width: 640px) 25vw, 50vw"
                        className="object-cover [mask-image:linear-gradient(90deg,transparent_0%,#000_55%)]"
                      />
                    </div>
                    <div className="relative flex max-w-[58%] flex-col gap-2 p-6">
                      <span className="text-xs font-semibold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading text-lg font-bold leading-tight text-mist">
                        {item.t}
                      </h3>
                      <p className="text-sm leading-relaxed text-mist-dim">
                        {item.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      {/* Framework applied */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
                  HOW IT APPLIES THE FRAMEWORK
                  <span className="h-px w-10 bg-accent" />
                </p>
                <p className="mt-3 font-heading text-3xl font-bold leading-snug text-mist sm:text-4xl">
                  AI <span className="font-normal text-accent">→</span> SIMULATE{" "}
                  <span className="font-normal text-accent">→</span> OPTIMIZE{" "}
                  <span className="font-normal text-accent">→</span> OPERATE
                </p>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-mist-dim">
                {venture.fwParagraph}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {frameworkSteps.map((step, i) => {
              const img = venture.fwImages?.[i];
              const tags = venture.fwTags?.[i];
              return (
                <div
                  key={step.title}
                  className="flex flex-col gap-3 rounded-xl border border-slate-line p-6"
                >
                  {img ? (
                    <div className="relative h-24 w-full">
                      <Image
                        src={img}
                        alt=""
                        fill
                        sizes="190px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex items-start justify-between">
                      <span className="text-sm font-semibold text-accent">
                        {step.num}
                      </span>
                      <Icon name={step.icon} className="h-10 w-10 text-accent" />
                    </div>
                  )}
                  {img && (
                    <span className="text-sm font-semibold text-accent">
                      {step.num}
                    </span>
                  )}
                  <p className="font-heading text-xl font-bold text-mist">
                    {step.title}
                  </p>
                  <p className="text-sm font-semibold text-mist">{step.lead}</p>
                  <p className="text-sm leading-relaxed text-mist-dim">
                    {step.body}
                  </p>
                  {tags && (
                    <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md border border-slate-line px-2.5 py-1 text-xs text-mist-dim"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Related work + industries */}
      {hasRelatedSection && (
        <section className="bg-ink-soft">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
                  RELATED WORK
                  <span className="h-px w-10 bg-accent" />
                </p>
              </div>
            </Reveal>
            <div className="mt-8 flex flex-col gap-5">
              {relatedWork.map((item, i) => (
                <Reveal key={item.title}>
                  <WorkItemCard item={item} index={i} />
                </Reveal>
              ))}
            </div>

            {venture.industries && (
              <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-8 border-t border-slate-line pt-10">
                <div className="max-w-sm">
                  <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
                    {industriesSection.label}
                    <span className="h-px w-10 bg-accent" />
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-mist">
                    {industriesSection.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-dim">
                    {industriesSection.sub}
                  </p>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4">
                  {industriesSection.items.map((ind) => (
                    <div
                      key={ind.title}
                      className="flex flex-col gap-2 border-l border-slate-line pl-5"
                    >
                      <Icon name={ind.icon} className="h-8 w-8 text-accent" />
                      <p className="text-sm font-bold text-mist">{ind.title}</p>
                      <p className="text-xs text-mist-dim">{ind.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      <VentureCta venture={venture} />

      {/* Other ventures */}
      <section className="bg-[#050f20]">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
              OTHER VENTURES
              <span className="h-px w-10 bg-accent-bright" />
            </p>
          </Reveal>
          <Reveal className="mt-6 grid gap-3.5 sm:grid-cols-3">
            {otherVentures.map((v) => (
              <Link
                key={v.slug}
                href={`/ventures/${v.slug}`}
                className="group relative flex min-h-[120px] flex-col justify-center gap-1.5 overflow-hidden rounded-lg border border-white/10 p-6 text-white transition-colors hover:border-accent-bright"
              >
                <div className="absolute inset-y-0 right-0 w-3/5">
                  <Image
                    src={v.hero}
                    alt=""
                    fill
                    sizes="40vw"
                    className="object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050f20] via-[#050f20]/60 to-transparent" />
                </div>
                <span className="relative font-heading text-xl font-bold tracking-wide">
                  {v.name} →
                </span>
                <span className="relative max-w-[62%] text-sm text-slate-line">
                  {v.sub}
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
