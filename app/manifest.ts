import type {MetadataRoute} from "next";

const siteUrl = process.env.SITE_URL ?? "https://lu.health";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LU Healthcare",
    short_name: "LU Health",
    description: "Healthcare services and information.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f6f2",
    theme_color: "#f8f6f2",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    scope: new URL(siteUrl).pathname || "/",
  };
}

