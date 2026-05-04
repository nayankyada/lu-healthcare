import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  description: "SEO settings for the homepage.",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "The description of the page.",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "The image of the page.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});