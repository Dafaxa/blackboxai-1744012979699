import Image from "next/image";
import { about } from "@/content/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-y border-slate-line bg-ink-soft">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:py-32">
        <Reveal>
          <h2 className="text-3xl font-bold text-mist sm:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-10 flex flex-col items-start gap-8 sm:flex-row">
            <Image
              src={about.headshotSrc}
              alt={about.headshotAlt}
              width={160}
              height={160}
              className="rounded-lg border border-slate-line object-cover"
            />
            <p className="text-base leading-relaxed text-mist-dim">
              {about.bio}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
