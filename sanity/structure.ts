import {Settings2Icon} from "lucide-react";
import type {StructureResolver} from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .icon(Settings2Icon)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings").title("Site Settings"),
        ),
    ]);
