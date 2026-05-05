import {cn} from "@/utils";
import type {ClassValue} from "clsx";

type Props = {
  title: string;
  className?: ClassValue;
};

export default function Title({title, className}: Props) {
  return (
    <p
      className={cn(
        "text-xl font-semibold tracking-[6px] text-white/90 lg:text-2xl lg:tracking-[8px]",
        className,
      )}
    >
      {title}
    </p>
  );
}
