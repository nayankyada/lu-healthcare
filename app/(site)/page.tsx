
import {sanityFetch} from "@/sanity/lib/live";
import {homepageQuery} from "@/sanity/lib/queries";
import type {Metadata} from "next";
import { notFound } from "next/navigation";
import {cache} from "react";

const getHomepage = cache(async () => sanityFetch({query: homepageQuery}));

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await getHomepage();
  if (!data) {
    notFound();
  }
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default async function Home() {
  const {data} = await getHomepage();
  if (!data) {
    notFound();
  }
  return null;
}
