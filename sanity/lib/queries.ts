import {defineQuery} from "groq";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
   ...
  }
`);

export const homepageQuery = defineQuery(`
  *[_type == "homepage" && _id == "homepage"][0] {
   ...,
   specialization {
   ...,
    listItems[] {
      title,
      description,
      image -> {
        ...,
      },
    },
   },
   doctorProfile {
    name,
    profession,
    image -> {
      ...,
    },
    description,
   },
  }
`);
