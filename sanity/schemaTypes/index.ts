import {type SchemaTypeDefinition} from "sanity";

import {siteSettingsType} from "./documents/site-settings";
import {cta} from "./objects/cta";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [siteSettingsType, cta],
};
