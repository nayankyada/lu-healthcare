import {siteConfig} from "@/lib/site";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-lu-bg border-lu-border sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:h-[70px]">
        <Link
          href="/"
          className="flex items-baseline gap-1.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="text-lu-dark font-serif text-2xl leading-none font-normal tracking-tight">
            LU
          </span>
          <span className="text-lu-sage font-sans text-[11px] font-medium tracking-[0.14em] uppercase">
            Health
          </span>
        </Link>

        <Link
          href={siteConfig.nav.cta.href}
          className="bg-lu-sage text-lu-bg hover:bg-lu-sage-dark rounded-[2px] px-5 py-2.5 font-sans text-[12px] font-medium tracking-[0.08em] uppercase transition-colors duration-200"
        >
          {siteConfig.nav.cta.label}
        </Link>
      </div>
    </header>
  );
}
