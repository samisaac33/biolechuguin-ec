import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/pitch";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { HeaderNav } from "./HeaderNav";
import { HeaderShell } from "./HeaderShell";

export function Header() {
  return (
    <HeaderShell>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2.5 sm:gap-3 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:flex-initial"
          aria-label={`Alianza entre ${site.publicPartnerName} y ${site.name}`}
        >
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <Image
              src="/logo-empresa-publica-agua.png"
              alt={site.publicPartnerName}
              width={160}
              height={48}
              className="h-9 w-auto max-w-[42vw] shrink-0 object-contain object-left sm:h-10 sm:max-w-none"
              priority
            />
            <span
              className="flex shrink-0 items-center gap-1.5 sm:gap-2"
              aria-hidden
            >
              <span className="h-7 w-px bg-slate-300 sm:h-8" />
              <span className="rounded-md bg-sky-100/80 px-1 py-0.5 text-[10px] font-bold leading-none text-sky-800 ring-1 ring-sky-200/80 sm:px-1.5 sm:text-[11px]">
                ×
              </span>
              <span className="h-7 w-px bg-slate-300 sm:h-8" />
            </span>
            <Image
              src="/logo-biolechuguin-ec.jpg"
              alt={site.name}
              width={80}
              height={80}
              className="h-9 w-9 shrink-0 rounded-full object-cover ring-1 ring-emerald-200/90 sm:h-10 sm:w-10"
              priority
            />
          </div>
          <span className="hidden min-w-0 border-l border-slate-300 pl-2 lg:block lg:pl-3">
            <span className="block truncate text-sm font-semibold tracking-tight text-slate-800">
              {site.name}
            </span>
            <span className="hidden text-xs text-slate-600 xl:block">
              {site.tagline}
            </span>
          </span>
        </Link>
        <HeaderNav />
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#alianzas"
            className="hidden rounded-full bg-sky-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-800 lg:inline-flex"
          >
            Alianzas
          </Link>
          <HeaderMobileMenu />
        </div>
      </div>
    </HeaderShell>
  );
}
