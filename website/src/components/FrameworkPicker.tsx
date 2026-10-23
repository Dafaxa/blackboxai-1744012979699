"use client";

import { useEffect, useState } from "react";
import { frameworkSteps } from "@/content/site";
import { Icon } from "./Icons";

const INTERVAL_MS = 3200;

/**
 * Interactive 4-step framework picker. Auto-advances every 3.2s and lets
 * visitors click a step to jump to it directly, restarting the cycle.
 */
export default function FrameworkPicker() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % frameworkSteps.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [active]);

  const current = frameworkSteps[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <ol className="flex flex-col gap-3" aria-label="The framework, step by step">
        {frameworkSteps.map((step, i) => {
          const isActive = i === active;
          return (
            <li key={step.num}>
              <button
                onClick={() => setActive(i)}
                aria-current={isActive ? "true" : undefined}
                className={`relative w-full overflow-hidden rounded-xl border p-5 text-left transition-all duration-300 ${
                  isActive
                    ? "-translate-y-0.5 border-accent-bright bg-navy/60 shadow-[0_12px_30px_-10px_rgba(16,185,129,0.35)]"
                    : "border-white/10 bg-navy/20 hover:border-white/25"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-heading text-xs font-bold uppercase tracking-widest ${
                      isActive ? "text-accent-bright" : "text-white/40"
                    }`}
                  >
                    {step.num}
                  </span>
                  <h3
                    className={`font-heading text-lg font-semibold ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isActive ? "text-slate-line" : "text-white/40"
                  }`}
                >
                  {step.lead}
                </p>
                <span className="mt-4 block h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                  <span
                    key={isActive ? `active-${i}-${active}` : `idle-${i}`}
                    className={`block h-full rounded-full bg-accent-bright ${
                      isActive ? "step-bar-active" : "w-0"
                    }`}
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div
        key={current.num}
        className="reveal is-visible flex flex-col rounded-2xl border border-white/10 bg-navy/40 p-8 sm:p-10"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-bright/50 bg-navy/70 text-accent-bright">
          <Icon name={current.icon} className="h-7 w-7" />
        </span>
        <p className="mt-6 font-heading text-xs font-bold uppercase tracking-widest text-accent-bright">
          Step {current.num}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          {current.lead}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-slate-line">
          {current.body}
        </p>
      </div>
    </div>
  );
}
