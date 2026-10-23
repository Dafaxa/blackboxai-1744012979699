import Image from "next/image";
import type { work } from "@/content/site";

export default function WorkItemCard({
  item,
  index,
}: {
  item: (typeof work.items)[number];
  index: number;
}) {
  return (
    <article className="relative overflow-hidden rounded-xl bg-navy text-white">
      <div className="absolute inset-0">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-navy/10" />
      </div>
      <div className="relative flex max-w-3xl flex-col gap-5 p-6 sm:p-10">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent-bright">
          Featured · {String(index + 1).padStart(2, "0")}
          <span className="h-px w-10 bg-accent-bright" />
        </p>
        <h3 className="font-heading text-2xl font-bold leading-tight sm:text-3xl">
          {item.title}
        </h3>
        <p className="max-w-lg text-sm leading-relaxed text-slate-line">
          {item.intro}
        </p>
        <div className="flex flex-wrap items-stretch gap-2.5">
          {item.flow.map((node, j) => {
            const join = "join" in node ? node.join : j === 0 ? "" : "→";
            return (
              <span key={node.label} className="flex items-stretch gap-2.5">
                {join && (
                  <span className="flex items-center text-lg font-semibold text-accent-bright">
                    {join}
                  </span>
                )}
                <span className="flex max-w-[190px] flex-1 flex-col gap-1.5 rounded-md border border-accent-bright/40 bg-navy/80 px-3.5 py-3">
                  <span className="font-heading text-xs font-bold leading-tight text-white">
                    {String(j + 1).padStart(2, "0")} {node.label}
                  </span>
                  {"desc" in node && node.desc && (
                    <span className="text-[11px] leading-snug text-slate-line">
                      {node.desc}
                    </span>
                  )}
                </span>
              </span>
            );
          })}
        </div>
        <div className="flex items-start gap-3 border-t border-white/10 pt-5 text-sm leading-relaxed">
          {item.footLabel && (
            <strong className="shrink-0 text-accent-bright">
              {item.footLabel}
            </strong>
          )}
          <span>{item.foot}</span>
        </div>
      </div>
    </article>
  );
}
