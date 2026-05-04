import {siteConfig} from "@/lib/site";
import Link from "next/link";

export default function Footer() {
  const {name, footer} = siteConfig;

  return (
    <footer className="bg-lu-dark text-lu-bg font-sans">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-baseline gap-1.5" aria-label={`${name} home`}>
          <span className="font-serif text-xl font-normal tracking-tight">LU</span>
          <span className="text-lu-sage text-[11px] font-medium tracking-[0.14em] uppercase">
            Health
          </span>
        </Link>

        <p className="text-lu-dim text-[12px] font-light">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>

        <p className="text-lu-ink max-w-xs text-[11px] leading-relaxed font-light sm:text-right">
          {footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
