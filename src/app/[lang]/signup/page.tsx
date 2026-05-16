import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SignupForm } from "@/components/signup/SignupForm";
import { htmlLangForUiLang, isLang, type Lang } from "@/lib/lang";
import { ROBOTS_NOINDEX, SITE_ORIGIN } from "@/lib/site";
import { signupCopy } from "@/messages/signupCopy";
import "@/styles/signup.css";

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
  const t = signupCopy[lang];
  const path = `${lang}/signup/`;
  return {
    title: t.pageTitle,
    description: t.formBody,
    robots: ROBOTS_NOINDEX,
    alternates: { canonical: `${SITE_ORIGIN}/${path}` },
    openGraph: {
      title: t.pageTitle,
      description: t.formBody,
      url: `${SITE_ORIGIN}/${path}`,
      images: [`${SITE_ORIGIN}/assets/images/logo/everwild-horizontal-white.png`],
      locale: htmlLangForUiLang(lang)
    }
  };
}

export default async function SignupPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) {
    notFound();
  }
  const lang = raw as Lang;
  const t = signupCopy[lang];

  return (
    <>
      <SiteHeader lang={lang} labels={t} />
      <main className="signup-hero" id="top">
        <div className="signup-hero-grid">
          <section className="form-panel" id="signup">
            <div className="form-head">
              <h1>{t.formTitle}</h1>
              <p>{t.formBody}</p>
            </div>
            <SignupForm key={lang} lang={lang} />
          </section>
        </div>
      </main>
    </>
  );
}
