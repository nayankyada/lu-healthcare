import Description from "@/components/description";
import {SanityImage} from "@/components/sanityImage";
import Title from "@/components/title";
import {SanityImageSource} from "@sanity/image-url";

export interface SpecializationItemProps {
  image: SanityImageSource;
  title: string;
  description: string;
}
export default function SpecializationItem({
  image,
  title,
  description,
}: SpecializationItemProps) {
  return (
    <div className="bg-american-earth flex flex-col gap-8 lg:gap-4 rounded-2xl p-4 md:p-8 lg:p-4 lg:flex-row">
      <SanityImage
        src={image}
        alt={title}
        width={200}
        height={100}
        className="w-full rounded-2xl lg:w-[200px]"
        sizes="300px"
      />
      <div className="lg:p-4 flex flex-col gap-4">
        <Title title={title} />
        <Description description={description} />
      </div>
    </div>
  );
}
