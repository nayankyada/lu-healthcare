export type Step = {
  number: string;
  label: string;
  text: string;
};

export type DentalImplantContent = {
  eyebrow: string;
  headline: [string, string];
  subheadline: string;
  body: string;
  steps: Step[];
  cta: string;
  disclaimer: string;
};

export const dentalImplantContent: DentalImplantContent = {
  eyebrow: "Patient Guide",
  headline: ["Understanding", "Dental Implants"],
  subheadline: "A permanent, natural-feeling solution for missing teeth — explained clearly.",
  body: "A dental implant is a small titanium post placed gently into the jawbone, acting as a stable root for a replacement tooth. Over time, it fuses naturally with the bone — a process called osseointegration — creating a foundation that looks, feels, and functions like your own tooth.",
  steps: [
    {
      number: "01",
      label: "Consultation",
      text: "Your dentist evaluates bone health and suitability.",
    },
    {
      number: "02",
      label: "Placement",
      text: "The titanium post is placed under local anaesthetic.",
    },
    {
      number: "03",
      label: "Healing",
      text: "Over 3–6 months, the implant fuses with your jawbone.",
    },
    {
      number: "04",
      label: "Restoration",
      text: "A natural-looking crown is attached to complete the implant.",
    },
  ],
  cta: "Continue Reading",
  disclaimer:
    "This guide is for informational purposes. Please consult your dental professional for personal advice.",
};
