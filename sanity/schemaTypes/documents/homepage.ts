import {Home} from "lucide-react";
import {defineField, defineType} from "sanity";

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
      name: "headline",
      title: "Headline",
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
      name: "headline",
      title: "Headline",
      type: "string",
      group: "headline",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specialization",
      title: "Specialization",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "listItems",
          title: "List items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 2,
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  validation: (Rule) => Rule.required(),
                }),
              ],
            },
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "doctorProfile",
      title: "Doctor profile",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "profession",
          title: "Profession",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
      ],
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
