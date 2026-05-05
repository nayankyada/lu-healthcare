import type {ClassValue} from "clsx";

import {cn} from "@/utils";

type Props = {
  subTitle: string;
  className?: ClassValue;
};

export default function SubTitle({subTitle, className}: Props) {
  return (
    <h3
      className={cn(
        "leading-wider text-base font-medium tracking-[6px] lg:tracking-[8px] text-white/90 lg:text-lg",
        className,
      )}
    >
      {subTitle}
    </h3>
  );
}
