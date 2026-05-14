"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { htmlLangForUiLang, type Lang } from "@/lib/lang";

export function LangEffects({ lang }: { lang: Lang }) {
  const pathname = usePathname();

  /* Font + weight tokens in site-core.css key off `html:lang()` / `html[lang^=…]`. Root layout’s inline script only runs on first parse, so client-side locale changes must update `lang` here or styles stay on the previous language until a full reload. */
  useLayoutEffect(() => {
    document.documentElement.lang = htmlLangForUiLang(lang);
  }, [lang]);

  useEffect(() => {
    void lang;
    // Defensive cleanup for route transitions:
    // ensures no stale mobile-menu state can lock page scrolling.
    document.body.classList.remove("nav-open");
    document.body.style.overflow = "";
  }, [pathname, lang]);

  return null;
}
