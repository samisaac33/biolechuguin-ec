"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Evita que el navegador restaure scroll al footer; respeta anclas (#…) en la URL. */
export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    if (window.location.hash) return;
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
