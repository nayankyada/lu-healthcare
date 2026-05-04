export interface StepCardProps {
  number: string;
  label: string;
  text: string;
}

export default function StepCard({number, label, text}: StepCardProps) {
  return (
    <div
      role="listitem"
      className="group border-lu-warm-gray hover:border-lu-sage cursor-default border-t pt-6 transition-colors duration-300"
    >
      <div className="text-lu-sage-light group-hover:text-lu-sage mb-3 font-serif text-3xl font-normal transition-colors duration-300">
        {number}
      </div>
      <div className="text-lu-charcoal mb-2 font-sans text-[13px] font-medium tracking-wide">
        {label}
      </div>
      <div className="text-lu-dim font-sans text-[13px] leading-relaxed font-light">{text}</div>
    </div>
  );
}
