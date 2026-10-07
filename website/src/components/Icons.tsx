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

/** Neural network nodes — AI / understand */
export function NeuralIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="4" r="1.6" />
      <circle cx="19" cy="8" r="1.6" />
      <circle cx="19" cy="16" r="1.6" />
      <circle cx="12" cy="20" r="1.6" />
      <circle cx="5" cy="16" r="1.6" />
      <circle cx="5" cy="8" r="1.6" />
      <path d="M12 6v4M17.6 9l-3.7 2.1M17.6 15l-3.7-2.1M12 18v-4M6.4 15l3.7-2.1M6.4 9l3.7 2.1" />
    </svg>
  );
}

/** Wireframe cube — digital twin / simulate */
export function CubeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M4 7l8 4 8-4M12 11v10" />
    </svg>
  );
}

/** Ascending bars — optimize */
export function BarsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 20V13M12 20V8M19 20V4" />
    </svg>
  );
}

/** Gear — operate */
export function GearIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.5M12 18.5V21M21 12h-2.5M5.5 12H3M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M18.4 18.4l-1.8-1.8M7.4 7.4 5.6 5.6" />
    </svg>
  );
}

/** Waveform — energy */
export function WaveformIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 12h3l2-7 3 14 3-10 2 5h3l2-5" />
    </svg>
  );
}

/** Factory — industry */
export function FactoryIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 21V11l5 3V11l5 3V9l6 3.5V21H3Z" />
      <path d="M8 21v-4M14 21v-4" />
    </svg>
  );
}

/** Architectural grid — property */
export function PropertyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 10h16M4 16h16M10 4v16M16 4v16" />
    </svg>
  );
}

/** Human network — talent */
export function NetworkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M10.3 7.8 7.7 16.2M13.7 7.8l2.6 8.4M8.5 18h7" />
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
