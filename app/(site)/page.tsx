import DentalImplantSection from "@/components/dental-implant-section";
import {dentalImplantContent} from "@/lib/content";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: `${dentalImplantContent.headline[0]} ${dentalImplantContent.headline[1]}`,
  description: dentalImplantContent.subheadline,
};

export default function Home() {
  return <DentalImplantSection />;
}
