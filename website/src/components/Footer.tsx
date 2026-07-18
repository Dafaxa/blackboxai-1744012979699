import { footer, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-8">
        <p className="text-xs text-mist-dim">{footer.note}</p>
        <div className="flex gap-5">
          <a
            href={`mailto:${site.email}`}
            className="text-xs text-mist-dim hover:text-mist"
          >
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-mist-dim hover:text-mist"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
