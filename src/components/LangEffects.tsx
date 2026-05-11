"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/lang";
import { htmlLangForUiLang } from "@/lib/lang";

export function LangEffects({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = htmlLangForUiLang(lang);
  }, [lang]);

  useEffect(() => {
    const uaData = (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData;
    const platform = uaData?.platform || navigator.platform || "";
    const userAgent = navigator.userAgent || "";
    const isApple =
      /Mac|iPhone|iPad|iPod/i.test(platform) ||
      /Macintosh|Mac OS X|iPhone|iPad|iPod/i.test(userAgent);
    if (isApple) {
      document.documentElement.dataset.platform = "apple";
    } else {
      delete document.documentElement.dataset.platform;
    }
  }, []);

  return null;
}
