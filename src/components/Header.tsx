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
        <Link href="/" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 lg:flex-initial">
          <Image
            src="/logo-empresa-publica-agua.png"
            alt={site.publicPartnerName}
            width={160}
            height={48}
            className="h-9 w-auto shrink-0 object-contain sm:h-10"
            priority
          />
          <span className="hidden min-w-0 border-l border-slate-300 pl-2 sm:block lg:pl-3">
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
