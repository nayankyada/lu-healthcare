import {Settings} from "lucide-react";
import {defineField, defineType} from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: Settings,
  groups: [
    {
      name: "general",
      title: "General",
    },
    {
      name: "header",
      title: "Header",
    },
    {
      name: "footer",
      title: "Footer",
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
      name: "headerLogoText",
      title: "Header logo text",
      description: "The prominent word or initials shown in the header next to the subtitle.",
      type: "string",
      group: "header",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headerLogoSub",
      title: "Header logo subtitle",
      description: "The smaller uppercase line beside the main logo text in the header.",
      type: "string",
      group: "header",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headerCta",
      title: "Header CTA",
      description: "The primary button in the header (label, link, and new-tab behaviour).",
      type: "cta",
      group: "header",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      description: "Short legal or educational notice shown in the footer (plain text).",
      type: "text",
      rows: 2,
      group: "footer",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      siteName: "siteName",
      headerLogoText: "headerLogoText",
      headerLogoSub: "headerLogoSub",
    },
    prepare({siteName, headerLogoText, headerLogoSub}) {
      return {
        title:
          siteName || [headerLogoText, headerLogoSub].filter(Boolean).join(" ") || "Site settings",
      };
    },
  },
});
