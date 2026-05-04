import DentalImplantSection from "@/components/dental-implant-section";
import {siteConfig} from "@/lib/site";
import {sanityFetch} from "@/sanity/lib/live";
import {homepageQuery} from "@/sanity/lib/queries";
import type {Metadata} from "next";
import {cache} from "react";

const getHomepage = cache(async () => sanityFetch({query: homepageQuery}));

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await getHomepage();
  if (!data) {
    return {
      title: siteConfig.name,
      description: siteConfig.tagline,
    };
  }
  return {
    title: `${data.headlineLine1} ${data.headlineLine2}`,
    description: data.subheadline,
  };
}

export default async function Home() {
  const {data} = await getHomepage();
  return <DentalImplantSection data={data} />;
}
