import type {SiteSettingsQueryResult} from "@/sanity.types";
import Link from "next/link";

export default function Header({data}: {data: NonNullable<SiteSettingsQueryResult>}) {
  return (
    <header className="bg-lu-bg border-lu-border sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:h-[70px]">
        <Link
          href="/"
          className="flex items-baseline gap-1.5"
          aria-label={`${data.headerLogoText} ${data.headerLogoSub} home`}
        >
          <span className="text-lu-dark font-serif text-2xl leading-none font-normal tracking-tight">
            {data.headerLogoText}
          </span>
          <span className="text-lu-sage font-sans text-[11px] font-medium tracking-[0.14em] uppercase">
            {data.headerLogoSub}
          </span>
        </Link>

        <Link
          href={data.headerCta.href}
          className="bg-lu-sage text-lu-bg hover:bg-lu-sage-dark rounded-[2px] px-5 py-2.5 font-sans text-[12px] font-medium tracking-[0.08em] uppercase transition-colors duration-200"
        >
          {data.headerCta.label}
        </Link>
      </div>
    </header>
  );
}
