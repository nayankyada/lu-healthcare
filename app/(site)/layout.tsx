import "@/app/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {siteConfig} from "@/lib/site";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";
import {siteSettingsQuery} from "@/sanity/lib/queries";
import type {Metadata} from "next";
import {DM_Sans, Lora} from "next/font/google";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {data: settings} = await sanityFetch({query: siteSettingsQuery});

  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="bg-lu-bg text-lu-charcoal flex min-h-full flex-col font-sans">
        <Header data={settings} />
        <main className="flex-1">{children}</main>
        <Footer data={settings} />
        <SanityLive />
      </body>
    </html>
  );
}
