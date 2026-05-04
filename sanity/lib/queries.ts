import {defineQuery} from "groq";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
   ...
  }
`);
