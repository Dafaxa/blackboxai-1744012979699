"use client";

import Image from "next/image";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { Icon } from "./Icons";
import type { ventures } from "@/content/site";

export default function VentureCard({
  venture,
  index,
}: {
  venture: (typeof ventures)[number];
  index: number;
}) {
  return (
    <Link
      href={`/ventures/${venture.slug}`}
      onClick={() => track(`venture_${venture.slug}`)}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-line bg-ink shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="relative h-44 w-full overflow-hidden bg-ink-soft">
        <Image
          src={venture.hero}
          alt={venture.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-dim text-accent">
            <Icon name={venture.icon} className="h-5 w-5" />
          </span>
          <span className="font-heading text-xs uppercase tracking-widest text-mist-dim">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-4 font-heading text-xl font-semibold text-mist">
          {venture.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-accent">{venture.sub}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-dim">
          {venture.short}
        </p>
        <span className="mt-5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
