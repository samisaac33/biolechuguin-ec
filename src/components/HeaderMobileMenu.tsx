"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type { NavLink } from "@/content/pitch";
import { navLinksHomeFull, navLinksInner } from "@/content/pitch";

function MobileNavItem({
  link,
  onNavigate,
}: {
  link: NavLink;
  onNavigate: () => void;
}) {
  const className =
    "block rounded-lg px-4 py-3 text-base text-slate-800 hover:bg-sky-50";

  if (link.type === "route") {
    return (
      <Link href={link.href} className={className} onClick={onNavigate}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} className={className} onClick={onNavigate}>
      {link.label}
    </a>
  );
}

export function HeaderMobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const links = isHome ? navLinksHomeFull : navLinksInner;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Menú</span>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M6.4 5.6 12 11.2l5.6-5.6 1.4 1.4L13.4 12l5.6 5.6-1.4 1.4L12 13.4l-5.6 5.6-1.4-1.4L10.6 12 5 6.4z"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
            <path
              fill="currentColor"
              d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
            />
          </svg>
        )}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
            aria-label="Cerrar menú"
            onClick={close}
          />
          <nav
            id="mobile-nav-panel"
            className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,20rem)] flex-col border-l border-slate-200 bg-white shadow-xl"
            aria-label="Navegación móvil"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <span className="text-sm font-semibold text-slate-900">Menú</span>
              <button
                type="button"
                className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100"
                onClick={close}
              >
                Cerrar
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-2">
              {links.map((link) => (
                <MobileNavItem
                  key={`${link.type}-${link.href}`}
                  link={link}
                  onNavigate={close}
                />
              ))}
              {isHome ? (
                <a
                  href="#alianzas"
                  className="mx-2 mt-4 rounded-full bg-sky-700 px-4 py-3 text-center text-sm font-medium text-white"
                  onClick={close}
                >
                  Alianzas
                </a>
              ) : null}
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}
