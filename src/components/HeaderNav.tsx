"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavLink } from "@/content/pitch";
import { navLinksHomePrimary, navLinksInner } from "@/content/pitch";

function NavItem({ link }: { link: NavLink }) {
  const className =
    "rounded-md px-2 py-1.5 text-xs xl:text-sm text-slate-700 transition-colors hover:bg-sky-50 hover:text-sky-950";

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
  const links = isHome ? navLinksHomePrimary : navLinksInner;

  return (
    <nav
      className="hidden shrink-0 items-center gap-0.5 lg:flex"
      aria-label="Navegación principal"
    >
      {links.map((link) => (
        <NavItem key={`${link.type}-${link.href}`} link={link} />
      ))}
    </nav>
  );
}
