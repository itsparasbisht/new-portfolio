import type { MetadataRoute } from "next";

const baseUrl = "https://paras-bisht.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "weekly",
    },
  ];
}
