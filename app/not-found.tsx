import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="bg-lu-bg flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-lu-sage mb-4 font-sans text-[11px] font-medium tracking-[0.18em] uppercase">
        404
      </p>
      <h1 className="text-lu-dark mb-4 font-serif text-4xl font-normal tracking-tight">
        Page not found
      </h1>
      <p className="text-lu-muted mb-10 max-w-sm text-base leading-relaxed font-light">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-lu-sage text-lu-bg hover:bg-lu-sage-dark rounded-[2px] px-6 py-3 font-sans text-[12px] font-medium tracking-[0.08em] uppercase transition-colors duration-200"
      >
        Back to home
      </Link>
    </section>
  );
}
