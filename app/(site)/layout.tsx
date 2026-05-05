import "@/app/globals.css";
import type {SiteSettingsQueryResult} from "@/sanity.types";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
import {siteSettingsQuery} from "@/sanity/lib/queries";
import type {Metadata, Viewport} from "next";
import localFont from "next/font/local";
import {notFound} from "next/navigation";
const siteUrl = new URL(process.env.SITE_URL ?? "https://lu.health");

const awesome = localFont({
  variable: "--font-awesome-local",
  display: "swap",
  src: [
    {
      path: "../../fonts/Awesome.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../fonts/Awesome.otf",
      style: "normal",
      weight: "400",
    },
  ],
});

export const viewport: Viewport = {
  themeColor: "#f8f6f2",
  colorScheme: "light",
};

export async function generateMetadata(): Promise<Metadata> {
  const {data}: {data: NonNullable<SiteSettingsQueryResult>} = await sanityFetch({
    query: siteSettingsQuery,
  });
  if (!data) {
    notFound();
  }
  return {
    metadataBase: siteUrl,
    title: {
      default: data.defaultSeo.title,
      template: `%s | ${data.siteName}`,
    },
    description: data.defaultSeo.description,
    applicationName: data.siteName,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: "/",
      siteName: data.siteName,
      title: data.defaultSeo.title,
      description: data.defaultSeo.description,
      locale: "en_US",
      images: [{url: data.defaultSeo.image.asset?.url ?? "", width: 1200, height: 630}],
    },
    twitter: {
      card: "summary_large_image",
      title: data.defaultSeo.title,
      description: data.defaultSeo.description,
      images: [{url: data.defaultSeo.image.asset?.url ?? "", width: 1200, height: 630}],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {data} = await sanityFetch({query: siteSettingsQuery});
  const siteName = data?.siteName ?? "LU Healthcare";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": new URL("#organization", siteUrl).toString(),
        name: siteName,
        url: siteUrl.toString(),
      },
      {
        "@type": "WebSite",
        "@id": new URL("#website", siteUrl).toString(),
        url: siteUrl.toString(),
        name: siteName,
        publisher: {"@id": new URL("#organization", siteUrl).toString()},
      },
    ],
  };

  return (
    <html lang="en" className={`${awesome.variable} h-full antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <main>{children}</main>
        <SanityLive />
      </body>
    </html>
  );
}
