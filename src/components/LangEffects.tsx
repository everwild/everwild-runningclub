"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { htmlLangForUiLang, type Lang } from "@/lib/lang";

export function LangEffects({ lang }: { lang: Lang }) {
  const pathname = usePathname();

  /* site-core.css uses `html:lang()`; the root inline script only runs once, so SPA locale changes must sync `lang` here. */
  useLayoutEffect(() => {
    document.documentElement.lang = htmlLangForUiLang(lang);
  }, [lang]);

  useEffect(() => {
    document.body.classList.remove("nav-open");
    document.body.style.overflow = "";
  }, [pathname]);

  return null;
}
