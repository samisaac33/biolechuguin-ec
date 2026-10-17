import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/pitch";
import { HeaderNav } from "./HeaderNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-900/10 bg-[var(--surface)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo-empresa-publica-agua.png"
            alt={site.publicPartnerName}
            width={160}
            height={48}
            className="h-10 w-auto shrink-0 object-contain sm:h-11"
            priority
          />
          <span className="hidden border-l border-slate-300 pl-3 sm:block">
            <span className="block text-sm font-semibold tracking-tight text-slate-800">
              {site.name}
            </span>
            <span className="block text-xs text-slate-600">{site.tagline}</span>
          </span>
        </Link>
        <HeaderNav />
        <Link
          href="/modelo-industrial"
          className="shrink-0 rounded-full bg-sky-700 px-3 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-sky-800 sm:px-4 sm:text-sm"
        >
          Planta
        </Link>
      </div>
    </header>
  );
}
