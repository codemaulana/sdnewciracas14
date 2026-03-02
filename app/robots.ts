import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/api/"], 
    },
    sitemap: "https://sdnciracas14.sch.id/sitemap.xml",
  };
}