import { metaTitle, metaDescription, metaImage, metaKeywords } from "../_helpers/metaFields";
import { RiPagesLine } from "../../node_modules/react-icons/ri";
import { richText } from "../_helpers/richTextFields";

export default {
  name: "subPage",
  title: "Side",
  type: "document",
  icon: RiPagesLine,
  groups: [
    { name: "groupContent", title: "Innhold", default: true },
    { name: "groupMeta", title: "Metadata" },
    { name: "groupSettings", title: "Innstillinger" },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "leading"
    }
  },
  fields: [
    // CONTENT
    {
      title: "Tittel",
      name: "title",
      type: "string",
      group: "groupContent",
    },
    {
      title: "Ingress",
      name: "leading",
      type: "text",
      rows: 6,
      group: "groupContent",
    },
    {
      ...richText,
      title: "Innhold",
      name: "body",
      description: "Legg til tekst, bilder, videor eller andre elementer her",
      group: "groupContent",
    },
    {
      title: "Innhold i høyrekolonne",
      name: "aside",
      description: "Du kan legge til ekstra informasjon i kolonnen til høyre for innholdet",
      group: "groupContent",
      type: "array",
      of: [
        { title: "Ikon-kort", name: "iconCardRef", type: "reference", to: [{ type: "iconCard" }] },
        {
          title: "Pris-tabell",
          name: "priceTableRef",
          type: "reference",
          to: [{ type: "priceTable" }],
        },
        {
          title: "Faktaboks",
          name: "factBox",
          type: "object",
          fields: [
            {
              title: "Tittel",
              name: "title",
              type: "string"
            }, 
            {
              title: "Kunde",
              name: "client",
              type: "string"
            },
            {
              title: "URL",
              name: "url",
              type: "string"
            },
            {
              title: "Årstall",
              name: "year",
              type: "string"
            }
          ]
        }
      ],
    },

    // METADATA
    { ...metaTitle, group: "groupMeta" },
    { ...metaDescription, group: "groupMeta" },
    { ...metaImage, group: "groupMeta" },
    { ...metaKeywords, group: "groupMeta" },

    // SETTINGS
    {
      title: "Parent",
      name: "parent",
      type: "reference",
      to: [{ type: "subPage" }],
      options: {
        disableNew: true,
      },
      group: "groupSettings",
    },
    {
      title: "URL",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      group: "groupSettings",
    },
  ],
};
