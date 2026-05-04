import type {SiteSettingsQueryResult} from "@/sanity.types";
import Link from "next/link";

export default function Footer({data}: {data: NonNullable<SiteSettingsQueryResult>}) {
  return (
    <footer className="bg-lu-dark text-lu-bg font-sans">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-baseline gap-1.5"
          aria-label={`${data.headerLogoText} ${data.headerLogoSub} home`}
        >
          <span className="font-serif text-xl font-normal tracking-tight">
            {data.headerLogoText}
          </span>
          <span className="text-lu-sage text-[11px] font-medium tracking-[0.14em] uppercase">
            {data.headerLogoSub}
          </span>
        </Link>

        <p className="text-lu-dim text-[12px] font-light">{data.disclaimer}</p>
      </div>
    </footer>
  );
}
