import Link from "next/link";
import { site } from "@/content/pitch";

export function Footer() {
  return (
    <footer className="border-t border-sky-900/10 bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
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
    </footer>
  );
}
