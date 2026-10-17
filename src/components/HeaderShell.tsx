"use client";

import { useEffect, useState, type ReactNode } from "react";

export function HeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-sky-900/10 bg-[var(--surface)]/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {children}
    </header>
  );
}
