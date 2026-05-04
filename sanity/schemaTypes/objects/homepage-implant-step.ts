import {defineField, defineType} from "sanity";

export const homepageImplantStepType = defineType({
  name: "homepageImplantStep",
  title: "Homepage implant step",
  description: "One numbered step in the implant process row on the homepage.",
  type: "object",
  fields: [
    defineField({
      name: "number",
      title: "Step number",
      description: "Short number or code shown above the step title (for example 01).",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      description: "The short title for this step (for example Consultation).",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "text",
      title: "Description",
      description: "A sentence explaining what happens in this step.",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
