import type { Metadata } from "next";

export const SITE_ORIGIN = "https://www.everwild-runningclub.com";

/** Sub-pages and non-canonical locales: allow link discovery, do not index. */
export const ROBOTS_NOINDEX: NonNullable<Metadata["robots"]> = {
  index: false,
  follow: true
};

/** Only this locale home is listed in sitemap / intended for search indexing. */
export const INDEXABLE_HOME_LANG = "ja" as const;

export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xojrvbbj";
