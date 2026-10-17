"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { NavLink } from "@/content/pitch";
import { navLinksHomeFull } from "@/content/pitch";

function navHref(link: NavLink, pathname: string): string {
  if (link.type === "route") return link.href;
  return pathname === "/" ? link.href : `/${link.href}`;
}

function MobileNavItem({
  link,
  pathname,
  onNavigate,
}: {
  link: NavLink;
  pathname: string;
  onNavigate: () => void;
}) {
  const className =
    "block rounded-lg px-4 py-3 text-base text-slate-800 hover:bg-sky-50";
  const href = navHref(link, pathname);

  if (link.type === "route") {
    return (
      <Link href={href} className={className} onClick={onNavigate}>
        {link.label}
      </Link>
    );
  }

  return (
    <Link href={href} className={className} onClick={onNavigate}>
      {link.label}
    </Link>
  );
}

export function HeaderMobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {open && mounted
        ? createPortal(
            <>
              <button
                type="button"
                className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm"
                aria-label="Cerrar menú"
                onClick={close}
              />
              <nav
                id="mobile-nav-panel"
                className="fixed right-0 top-0 z-[110] flex h-dvh w-[min(100%,20rem)] flex-col border-l border-slate-200 bg-white shadow-xl"
                aria-label="Navegación móvil"
              >
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                  <span className="text-sm font-semibold text-slate-900">
                    Menú
                  </span>
                  <button
                    type="button"
                    className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100"
                    onClick={close}
                  >
                    Cerrar
                  </button>
                </div>
                <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-2">
                  {navLinksHomeFull.map((link) => (
                    <MobileNavItem
                      key={`${link.type}-${link.href}`}
                      link={link}
                      pathname={pathname}
                      onNavigate={close}
                    />
                  ))}
                </div>
              </nav>
            </>,
            document.body,
          )
        : null}
    </div>
  );
}
