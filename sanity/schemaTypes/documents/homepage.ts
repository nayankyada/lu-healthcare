import {Home} from "lucide-react";
import {defineArrayMember, defineField, defineType} from "sanity";

export const homepageType = defineType({
  name: "homepage",
  title: "Homepage",
  description: "Content for the main landing page (patient guide section).",
  type: "document",
  icon: Home,
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "content",
      title: "Content",
    },
  ],
  fields: [
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      description: "The smaller text above the main title that sets context for the section.",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "headlineLine1",
      title: "Headline (first line)",
      description: "The first line of the main heading, shown in the primary text colour.",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "headlineLine2",
      title: "Headline (second line)",
      description: "The second line of the main heading, shown in the accent colour as emphasis.",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "subheadline",
      title: "Subheadline",
      description: "Supporting line under the headline with a subtle left border in the design.",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "body",
      title: "Body",
      description: "Main paragraph explaining the topic in plain language for visitors.",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stepsSectionLabel",
      title: "Steps section label",
      description: "Small uppercase label above the process steps grid (for example The Process).",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "steps",
      title: "Process steps",
      description: "The numbered steps shown in a row below the main content.",
      type: "array",
      of: [defineArrayMember({type: "homepageImplantStep"})],
      validation: (Rule) => Rule.required().min(1),
      group: "content",
    }),
    defineField({
      name: "visualPlaceholderLabel",
      title: "Visual area placeholder label",
      description: "Small label under the icon in the tall visual panel when no photo is used.",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "visualTagLabel",
      title: "Visual card tag (eyebrow)",
      description: "Tiny uppercase line on the tag in the corner of the visual panel.",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "visualTagTitle",
      title: "Visual card tag (title)",
      description: "Main word on the corner tag (for example the procedure name).",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "cta",
      title: "Primary CTA",
      description: "Button label and link at the bottom of the section.",
      type: "cta",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      description: "Short legal or educational note beside the button.",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
  ],
  preview: {
    select: {
      headlineLine1: "headlineLine1",
      headlineLine2: "headlineLine2",
    },
    prepare({headlineLine1, headlineLine2}) {
      const subtitle = [headlineLine1, headlineLine2].filter(Boolean).join(" ");
      return {
        title: "Homepage",
        subtitle: subtitle || undefined,
      };
    },
  },
});
