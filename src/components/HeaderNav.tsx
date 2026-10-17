"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/content/pitch";
import { navLinksHome, navLinksInner } from "@/content/pitch";

function NavItem({ link }: { link: NavLink }) {
  const className =
    "rounded-md px-2.5 py-1.5 text-sm text-emerald-900/80 transition-colors hover:bg-sky-50 hover:text-sky-950 whitespace-nowrap";

  if (link.type === "route") {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  );
}

export function HeaderNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links = isHome ? navLinksHome : navLinksInner;

  return (
    <nav
      className="hidden max-w-xl items-center gap-0.5 overflow-x-auto md:flex lg:max-w-none"
      aria-label="Navegación principal"
    >
      {links.map((link) => (
        <NavItem key={`${link.type}-${link.href}`} link={link} />
      ))}
    </nav>
  );
}
