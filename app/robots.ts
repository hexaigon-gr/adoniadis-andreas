import type { MetadataRoute } from "next";

import { SITE } from "@/lib/general/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || SITE.url;

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
    disallow: ["/api/", "/admin/"],
  },
  sitemap: `${BASE_URL}/sitemap.xml`,
});

export default robots;
