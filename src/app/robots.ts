import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";

export const dynamic = "force-static";

/** Paths not listed in sitemap — discourage crawling signup, legal, and non-default locales. */
const DISALLOW_PATHS = [
  "/en/",
  "/zh/",
  "/ja/signup/",
  "/ja/legal/",
  "/ja/privacy/",
  "/ja/terms/",
  "/en/signup/",
  "/en/legal/",
  "/en/privacy/",
  "/en/terms/",
  "/zh/signup/",
  "/zh/legal/",
  "/zh/privacy/",
  "/zh/terms/",
  "/backup/"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: DISALLOW_PATHS
    },
    sitemap: `${SITE_ORIGIN}/sitemap.xml`
  };
}
