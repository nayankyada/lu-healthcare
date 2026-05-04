import type {IConfig} from "next-sitemap";

const config: IConfig = {
  siteUrl: process.env.SITE_URL ?? "https://lu.health",
  generateRobotsTxt: true,
  exclude: ["/studio", "/studio/*"],
  robotsTxtOptions: {
    policies: [
      {userAgent: "*", allow: "/"},
      {userAgent: "*", disallow: ["/studio"]},
    ],
  },
};

export default config;
