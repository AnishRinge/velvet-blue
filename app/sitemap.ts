import type { MetadataRoute } from "next";
import { songs } from "@/data/songs";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/music", "/about", "/links"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/music" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const releases = songs.map((song) => ({
    url: `${siteUrl}/music/${song.id}`,
    lastModified: new Date(`${song.releaseDate}T00:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...pages, ...releases];
}
