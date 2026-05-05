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
