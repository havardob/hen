import { metaTitle, metaDescription, metaKeywords, metaImage } from "../_helpers/metaFields";
import { section } from "../_helpers/sectionFields";
import { RiHome3Fill } from "../../node_modules/react-icons/ri";
import { richText } from "../_helpers/richTextFields";

export default {
  name: "frontPage",
  title: "Forside",
  type: "document",
  icon: RiHome3Fill,
  groups: [
    { title: "Innhold", name: "groupContent", default: true },
    { title: "Metadata", name: "groupMeta" },
  ],
  fields: [
    {
      name: "title",
      initialValue: "Forside",
      hidden: true,
      type: "string",
      group: "groupContent",
    },
    {
      title: "Overskrift",
      name: "pageTitle",
      type: "string",
      group: "groupContent",
    },
    {
      ...richText,
      title: "Innhold",
      group: "groupContent",
      name: "pageContent",
    },
    { ...section.buttons, group: "groupContent" },
    {
      title: "Seksjoner",
      name: "sections",
      type: "array",
      group: "groupContent",
      of: [
        {
          title: "Pris-seksjon",
          name: "pricingSection",
          type: "object",
          fields: [
            section.title,
            section.content,
            {
              title: "Elementer",
              name: "sectionElements",
              type: "array",
              of: [
                {
                  title: "Pristabell",
                  name: "priceTableRef",
                  type: "reference",
                  to: [{ type: "priceTable" }],
                },
              ],
            },
            section.buttons,
            section.buttonsAlignmentCenter,
            section.isNarrow,
            section.darkTheme,
          ],
        },
        {
          title: "Fordeler-seksjon",
          name: "perksSection",
          type: "object",
          fields: [
            section.title,
            section.content,
            {
              title: "Elementer",
              name: "sectionElements",
              type: "array",
              of: [
                {
                  title: "Ikon-kort",
                  name: "iconCardRef",
                  type: "reference",
                  to: [{ type: "iconCard" }],
                },
              ],
            },
            section.buttons,
            section.buttonsAlignmentCenter,
            section.isNarrow,
            section.darkTheme,
          ],
        },
        {
          title: "Prosjekt-seksjon",
          name: "showcaseSection",
          type: "object",
          fields: [
            section.title,
            section.content,
            {
              title: "Elementer",
              name: "sectionElements",
              type: "array",
              of: [
                {
                  title: "Prosjekter",
                  name: "projectRef",
                  type: "reference",
                  to: [{ type: "project" }],
                },
              ],
            },
            section.buttons,
            section.buttonsAlignmentCenter,
            section.isNarrow,
            section.darkTheme,
          ],
        },
      ],
    },
    { ...metaTitle, group: "groupMeta" },
    { ...metaDescription, group: "groupMeta" },
    { ...metaImage, group: "groupMeta" },
    { ...metaKeywords, group: "groupMeta" },
  ],
};
