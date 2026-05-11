"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Lang } from "@/lib/lang";

export function LangEffects({ lang }: { lang: Lang }) {
  const pathname = usePathname();

  useEffect(() => {
    void lang;
    // Defensive cleanup for route transitions:
    // ensures no stale mobile-menu state can lock page scrolling.
    document.body.classList.remove("nav-open");
    document.body.style.overflow = "";
  }, [pathname, lang]);

  return null;
}
