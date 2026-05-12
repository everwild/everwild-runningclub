"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type { Lang } from "@/lib/lang";

export type SiteHeaderLabels = {
  brandLine: string;
  navManifesto: string;
  navSchedule: string;
  navRoutes: string;
  navPacers: string;
  navSocial: string;
  navBrands: string;
  navSignup: string;
};

const toggleLabels: Record<Lang, { open: string; close: string }> = {
  ja: { open: "メニューを開く", close: "メニューを閉じる" },
  en: { open: "Open menu", close: "Close menu" },
  zh: { open: "打开菜单", close: "关闭菜单" }
};

export function SiteHeader({
  lang,
  labels,
  brandStrong = "ERC"
}: {
  lang: Lang;
  labels: SiteHeaderLabels;
  brandStrong?: string;
}) {
  const router = useRouter();
  const pathname = usePathname() || `/${lang}`;
  const [open, setOpen] = useState(false);
  const labelsToggle = toggleLabels[lang];

  const home = `/${lang}`;
  const signupHref = `/${lang}/signup/`;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    setOpen(false);
    document.body.classList.remove("nav-open");
    document.body.style.overflow = "";
  }, [pathname]);

  const langHref = (target: Lang) => {
    const segs = pathname.split("/").filter(Boolean);
    if (segs.length === 0) {
      return `/${target}/`;
    }
    segs[0] = target;
    const joined = `/${segs.join("/")}`;
    return pathname.endsWith("/") ? `${joined}/` : joined;
  };

  return (
    <header className="site-header">
      <div
        className={`nav-backdrop${open ? " nav-backdrop--open" : ""}`}
        id="nav-backdrop"
        aria-hidden={!open}
        onClick={close}
      />
      <div className="shell">
        <div className="shell-nav-row">
          <Link className="brand" href={`${home}#top`} aria-label="Everwild Running Club">
            <div className="brand-mark">
              <img
                className="brand-mark-default"
                src="/assets/images/logo/Roadrunner-white.png"
                alt="ERC logo"
              />
              <img
                className="brand-mark-hover"
                src="/assets/images/logo/Roadrunner-pink.png"
                alt=""
                aria-hidden
              />
            </div>
            <div className="brand-copy">
              <strong>{brandStrong}</strong>
              <span>{labels.brandLine}</span>
            </div>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? labelsToggle.close : labelsToggle.open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-box" aria-hidden>
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
            </span>
          </button>
        </div>

        <div className="header-actions" id="site-menu">
          <nav className="nav-links" aria-label="Primary navigation">
            <Link href={`${home}#manifesto`} onClick={close}>
              {labels.navManifesto}
            </Link>
            <Link href={`${home}#schedule`} onClick={close}>
              {labels.navSchedule}
            </Link>
            <Link href={`${home}#routes`} onClick={close}>
              {labels.navRoutes}
            </Link>
            <Link href={`${home}#pacers`} onClick={close}>
              {labels.navPacers}
            </Link>
            <Link className="nav-social" href={`${home}#join`} onClick={close}>
              {labels.navSocial}
            </Link>
            <Link href={`${home}#shop`} onClick={close}>
              {labels.navBrands}
            </Link>
            <Link className="nav-signup" href={signupHref} onClick={close}>
              {labels.navSignup}
            </Link>
          </nav>

          <div className="lang-toggle" aria-label="Language switcher">
            {(["ja", "en", "zh"] as const).map((code) => (
              <button
                key={code}
                type="button"
                className={code === lang ? "is-active" : ""}
                aria-pressed={code === lang ? "true" : "false"}
                onClick={() => {
                  router.push(langHref(code));
                  close();
                }}
              >
                {code === "ja" ? "JA" : code === "en" ? "EN" : "CN"}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
