import Link from "next/link";
import { photoCreditsLine } from "@/content/media";
import { site } from "@/content/pitch";

export function Footer() {
  return (
    <footer className="border-t border-sky-900/10 bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            © {site.copyrightYear} {site.name}. Pitch — fase idea.
          </p>
          <Link
            href="/modelo-industrial"
            className="text-sm font-medium text-sky-300 hover:text-white"
          >
            Modelo industrial (referencia)
          </Link>
        </div>
        <p className="text-xs text-slate-500">{photoCreditsLine}</p>
      </div>
    </footer>
  );
}
