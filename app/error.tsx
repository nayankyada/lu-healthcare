"use client";

import {useEffect} from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-lu-bg flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-lu-sage mb-4 font-sans text-[11px] font-medium tracking-[0.18em] uppercase">
        Error
      </p>
      <h1 className="text-lu-dark mb-4 font-serif text-4xl font-normal tracking-tight">
        Something went wrong
      </h1>
      <p className="text-lu-muted mb-10 max-w-sm text-base leading-relaxed font-light">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="bg-lu-sage text-lu-bg hover:bg-lu-sage-dark rounded-[2px] px-6 py-3 font-sans text-[12px] font-medium tracking-[0.08em] uppercase transition-colors duration-200"
      >
        Try again
      </button>
    </section>
  );
}
