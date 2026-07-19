/**
 * Minimal line-icon set — consistent 1.5px stroke, inherits currentColor.
 * Hand-rolled to keep the bundle tiny and the style uniform.
 */

type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
};

/** Stacked layers — infrastructure */
export function LayersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 16 9 5 9-5" />
    </svg>
  );
}

/** Chip / processor — intelligence */
export function ChipIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}

/** Shield with check — proof / verification */
export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3c3 1.5 6 2 7 2 0 9-3 13-7 16-4-3-7-7-7-16 1 0 4-.5 7-2Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Lightbulb — innovation */
export function BulbIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

/** Leaf — sustainability */
export function LeafIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 21c0-9 4-15 14-16 1 10-3 15-11 15" />
      <path d="M5 21c2-5 5-8 10-10" />
    </svg>
  );
}

/** Trophy — competition win */
export function TrophyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5H5a3 3 0 0 0 3 5M16 5h3a3 3 0 0 1-3 5" />
      <path d="M12 13v4M8 20h8M10 17h4v3h-4z" />
    </svg>
  );
}

/** Globe with meridians — trade / global */
export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z" />
    </svg>
  );
}

/** Rounded tinted chip wrapping an icon — the recurring visual unit */
export function IconChip({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "md" | "lg";
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-accent-dim text-accent ${
        size === "lg" ? "h-12 w-12" : "h-10 w-10"
      }`}
    >
      {children}
    </span>
  );
}
