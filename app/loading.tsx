export default function Loading() {
  return (
    <section className="bg-lu-bg flex flex-1 items-center justify-center" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="bg-lu-sage h-px w-8 animate-pulse" />
        <p className="text-lu-subtle font-sans text-[11px] font-medium tracking-[0.18em] uppercase">
          Loading
        </p>
      </div>
    </section>
  );
}
