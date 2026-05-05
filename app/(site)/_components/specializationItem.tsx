import {SanityImage} from "@/components/sanityImage";
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
    <div className="bg-american-earth flex flex-col gap-4 rounded-2xl p-4 lg:flex-row">
      <SanityImage
        src={image}
        alt={title}
        width={200}
        height={100}
        className="w-full rounded-2xl lg:w-[200px]"
      />
      <div className="p-4">
        <p className="leading-wider text-2xl font-semibold tracking-wider text-white/90">{title}</p>
        <p className="leading-wider text-sm font-medium tracking-wider text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}
