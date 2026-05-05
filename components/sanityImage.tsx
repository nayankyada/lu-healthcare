"use client";

import {urlFor} from "@/sanity/lib/image";
import {SanityImageSource} from "@sanity/image-url";
import Image, {ImageProps} from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: SanityImageSource;
  ref?: React.RefObject<HTMLImageElement | null>;
  onLoad?: () => void;
};

export const SanityImage = ({src, alt, ref, onLoad, width, height, fill, ...props}: Props) => {
  const altText = alt || "HudsonLake";

  return (
    <Image
      src={urlFor(src).url()}
      alt={altText}
      sizes="(min-width: 1200px) 85vw, (min-width: 768px) 75vw"
      loader={({width, quality = 100}) => urlFor(src).width(width).quality(quality).url()}
      ref={ref}
      onLoad={onLoad}
      width={width}
      height={height}
      fill={fill}
      {...props}
    />
  );
};