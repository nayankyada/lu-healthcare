import {type SchemaTypeDefinition} from "sanity";

import {homepageType} from "./documents/homepage";
import {siteSettingsType} from "./documents/site-settings";
import {cta} from "./objects/cta";
import {homepageImplantStepType} from "./objects/homepage-implant-step";
import {seo} from "./objects/seo";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [siteSettingsType, homepageType, cta, homepageImplantStepType, seo],
};
