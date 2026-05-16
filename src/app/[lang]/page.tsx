import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { HomeEffects } from "@/components/home/HomeEffects";
import { HomeMain } from "@/components/home/HomeMain";
import { htmlLangForUiLang, isLang, type Lang } from "@/lib/lang";
import { INDEXABLE_HOME_LANG, ROBOTS_NOINDEX, SITE_ORIGIN } from "@/lib/site";
import { homeCopy } from "@/messages/homeCopy";
import "@/styles/home.css";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: raw } = await params;
  if (!isLang(raw)) {
    return {};
  }
  const lang = raw as Lang;
  const t = homeCopy[lang];
  const path = `${lang}/`;
  return {
    title: t.pageTitle,
    description: t.heroBody,
    ...(lang !== INDEXABLE_HOME_LANG ? { robots: ROBOTS_NOINDEX } : {}),
    alternates: {
      canonical: `${SITE_ORIGIN}/${path}`,
      languages: {
        ja: `${SITE_ORIGIN}/ja/`,
        en: `${SITE_ORIGIN}/en/`,
        "zh-CN": `${SITE_ORIGIN}/zh/`
      }
    },
    openGraph: {
      type: "website",
      siteName: "EVERWILD",
      title: t.pageTitle,
      description: t.heroBody,
      url: `${SITE_ORIGIN}/${path}`,
      images: [`${SITE_ORIGIN}/assets/images/logo/everwild-horizontal-white.png`],
      locale: htmlLangForUiLang(lang)
    },
    twitter: {
      card: "summary",
      title: t.pageTitle,
      description: t.heroBody,
      images: [`${SITE_ORIGIN}/assets/images/logo/everwild-horizontal-white.png`]
    }
  };
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) {
    notFound();
  }
  const lang = raw as Lang;
  const t = homeCopy[lang];

  return (
    <>
      <SiteHeader lang={lang} labels={t} brandStrong="ERC" />
      <HomeMain lang={lang} t={t} />
      <SiteFooter lang={lang} t={t} />
      <HomeEffects />
    </>
  );
}
