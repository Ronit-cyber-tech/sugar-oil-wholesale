import type { MetadataRoute } from "next";

const siteUrl = "https://sugaroilshop.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/products", "/reviews", "/contact"];

  return pages.map((page) => ({
    url: `${siteUrl}${page}`,
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.7,
  }));
}