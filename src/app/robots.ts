import type { MetadataRoute } from "next";

// The site had no robots.txt at all (the route 404'd), so crawlers were never
// pointed at the sitemap. Keep this in sync with `metadataBase` in layout.tsx
// and `baseUrl` in sitemap.ts — all three must declare the same canonical host.
const BASE_URL = "https://redrockvet.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Sanity Studio and the contact endpoint carry no search value.
        disallow: ["/studio", "/studio/", "/api/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
