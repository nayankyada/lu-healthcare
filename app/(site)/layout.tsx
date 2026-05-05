import "@/app/globals.css";
import {SanityLive} from "@/sanity/lib/live";
import localFont from "next/font/local";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${awesome.variable} h-full antialiased`}>
      <body>
        <main>{children}</main>
        <SanityLive />
      </body>
    </html>
  );
}
