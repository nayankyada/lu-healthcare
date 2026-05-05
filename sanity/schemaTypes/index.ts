import {type SchemaTypeDefinition} from "sanity";

import {homepageType} from "./documents/homepage";
import {siteSettingsType} from "./documents/site-settings";
import {seo} from "./objects/seo";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [siteSettingsType, homepageType, seo],
};
