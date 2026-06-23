import type { MetadataRoute } from "next";

import { SITE } from "@/lib/general/constants";
import { routing } from "@/lib/i18n/routing";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || SITE.url;

const sitemap = (): MetadataRoute.Sitemap => {
  return routing.locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${BASE_URL}/${l}`]),
      ),
    },
  }));
};

export default sitemap;
