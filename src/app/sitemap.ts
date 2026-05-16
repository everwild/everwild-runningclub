import type { MetadataRoute } from "next";
import { INDEXABLE_HOME_LANG, SITE_ORIGIN } from "@/lib/site";

export const dynamic = "force-static";

/** Single canonical homepage for indexing (default locale). */
const HOME_PATH = `/${INDEXABLE_HOME_LANG}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_ORIGIN}${HOME_PATH}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
