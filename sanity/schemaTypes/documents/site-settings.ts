import {Settings} from "lucide-react";
import {defineField, defineType} from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  description: "Global settings used across the website (SEO defaults, branding, and social links).",
  type: "document",
  icon: Settings,
  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "social",
      title: "Social",
    },
  ],
  fields: [
    defineField({
      name: "siteName",
      title: "Site name",
      description:
        "The full site name used in the footer copyright line and for accessibility (for example LU Health).",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      description: "A short sentence that describes the website (used as a default meta description).",
      type: "string",
      group: "general",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      description: "Fallback SEO settings used when a page doesn’t provide its own SEO values.",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          description: "Default title used for pages that don’t define their own title.",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          description: "Default description used for pages that don’t define their own description.",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "image",
          title: "Image",
          description: "Default social sharing image used for Open Graph and Twitter previews.",
          type: "image",
          options: {hotspot: true},
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      siteName: "siteName",
    },
    prepare({siteName}) {
      return {
        title: siteName || "Site settings",
      };
    },
  },
});
