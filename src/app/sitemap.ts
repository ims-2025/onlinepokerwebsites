import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { operators } from "@/lib/operators";
import { guides } from "@/lib/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticPages = [
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/about/`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${base}/responsible-gambling/`, priority: 0.5, changeFrequency: "yearly" as const },
  ];

  const reviewPages = operators.map((o) => ({
    url: `${base}/reviews/${o.slug}/`,
    priority: 0.9,
    changeFrequency: "weekly" as const,
    lastModified: now,
  }));

  const guidePages = guides.map((g) => ({
    url: `${base}/guides/${g.slug}/`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...reviewPages,
    ...guidePages,
  ];
}
