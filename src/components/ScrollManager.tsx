"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function resetHomeOnLoad() {
  if (window.location.pathname !== "/") return;
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  if (window.location.hash) {
    history.replaceState(
      history.state,
      "",
      window.location.pathname + window.location.search,
    );
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

/** Scroll arriba al cambiar de ruta; en recarga de inicio, no quedar en ancla previa. */
export function ScrollManager() {
  const pathname = usePathname();
  const isFirstPathEffect = useRef(true);

  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted && window.location.pathname === "/") {
        resetHomeOnLoad();
      }
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isReload = nav?.type === "reload";

    const frame = requestAnimationFrame(() => {
      if (pathname === "/") {
        if (
          isReload ||
          (isFirstPathEffect.current && window.location.hash)
        ) {
          resetHomeOnLoad();
        } else if (!window.location.hash) {
          scrollToTop();
        }
      } else if (!window.location.hash) {
        scrollToTop();
      }
    });

    isFirstPathEffect.current = false;
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
