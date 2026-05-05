import Description from "@/components/description";
import {SanityImage} from "@/components/sanityImage";
import SubTitle from "@/components/subTitle";
import Title from "@/components/title";
import { SanityImageSource } from "@sanity/image-url";

export default function DoctorProfile({
  image,
  alt,
  name,
  profession,
  description,
}: {
  image: SanityImageSource;
  alt: string;
  name: string;
  profession: string;
  description: string;
}) {
  return (
    <div className="bg-dark-sapphire order-1 flex flex-col gap-4 rounded-2xl p-4 lg:order-2">
      <SanityImage
        src={image}
        alt={alt}
        width={300}
        height={300}
        className="w-full rounded-2xl"
      />
      <div className="p-4">
        <Title title={name} />
        <SubTitle subTitle={profession} />
        <Description description={description} />
      </div>
    </div>
  );
}
