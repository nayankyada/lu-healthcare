import type {ClassValue} from "clsx";

import {cn} from "@/utils";

type Props = {
  description: string;
  className?: ClassValue;
};

export default function Description({description, className}: Props) {
  return (
    <p
      className={cn(
        "leading-wider text-xs font-medium tracking-[6px]  text-white/70 lg:text-sm",
        className,
      )}
    >
      {description}
    </p>
  );
}
