import {ArrowRight, ToothIcon} from "@/components/icons";
import StepCard from "@/components/step-card";
import { HomepageQueryResult } from "@/sanity.types";
import Link from "next/link";

export default function DentalImplantSection({data}: {data: NonNullable<HomepageQueryResult>}) {

console.log(data);
  const ctaClassName =
    "group border-lu-sage text-lu-sage hover:bg-lu-sage hover:text-lu-bg focus-visible:outline-lu-sage inline-flex w-fit items-center gap-2.5 rounded-[2px] border px-7 py-3.5 font-sans text-[13px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  return (
    <section
      className="bg-lu-bg text-lu-charcoal px-6 py-20 font-sans md:py-28"
      aria-label="Dental Implant Patient Guide"
    >
      <div className="mx-auto max-w-5xl">
        <div className="bg-lu-sage mb-8 h-px w-12" aria-hidden="true" />
        <p className="text-lu-sage mb-5 font-sans text-[11px] font-medium tracking-[0.18em] uppercase">
          {data.eyebrow}
        </p>

        <div className="mb-20 grid grid-cols-1 items-start gap-16 md:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="text-lu-dark mb-6 font-serif text-4xl leading-[1.2] font-normal tracking-tight md:text-5xl lg:text-[52px]">
              {data.headlineLine1}
              <br />
              <em className="text-lu-sage italic">{data.headlineLine2}</em>
            </h1>
            <p className="text-lu-muted border-lu-sage-light mb-7 border-l-2 pl-[18px] text-base leading-relaxed font-light">
              {data.subheadline}
            </p>
            <p className="text-lu-ink text-[15px] leading-[1.8] font-light">{data.body}</p>
          </div>

          <div
            className="bg-lu-surface relative overflow-hidden rounded-sm"
            style={{aspectRatio: "4/5"}}
            role="img"
            aria-label="Dental implant visual reference placeholder"
          >
            <div
              className="placeholder-gradient pointer-events-none absolute inset-0"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <ToothIcon className="text-lu-charcoal h-14 w-14 opacity-30" />
              <span className="text-lu-subtle font-sans text-[11px] font-medium tracking-[0.14em] uppercase">
                {data.visualPlaceholderLabel}
              </span>
            </div>
            <div className="bg-lu-bg/85 border-lu-sage/20 absolute bottom-5 left-5 rounded-[2px] border px-[14px] py-[10px] backdrop-blur-sm">
              <p className="text-lu-sage font-sans text-[11px] font-medium tracking-[0.1em] uppercase">
                {data.visualTagLabel}
              </p>
              <span className="text-lu-charcoal mt-0.5 block font-serif text-[13px]">
                {data.visualTagTitle}
              </span>
            </div>
          </div>
        </div>

        <div
          className="from-lu-sage-light mb-16 h-px w-full bg-gradient-to-r to-transparent"
          aria-hidden="true"
        />

        <p className="text-lu-subtle mb-9 font-sans text-[11px] font-medium tracking-[0.16em] uppercase">
          {data.stepsSectionLabel}
        </p>
        <div
          className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          role="list"
          aria-label="Implant process steps"
        >
          {data.steps.map((step) => (
            <StepCard key={step._key} number={step.number} label={step.label} text={step.text} />
          ))}
        </div>

        <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:gap-8">
          <Link
            href={data.cta.href}
            className={ctaClassName}
            {...(data.cta.openInNewTab ? {target: "_blank", rel: "noopener noreferrer"} : {})}
          >
            {data.cta.label}
            <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <p className="text-lu-subtle max-w-sm font-sans text-[12px] leading-relaxed font-light">
            {data.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
