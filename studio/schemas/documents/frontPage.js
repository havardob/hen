import { RiHome3Fill, RiPageSeparator, RiListCheck2 } from "react-icons/ri";

export default {
  name: "frontPage",
  title: "Forside",
  type: "document",
  icon: RiHome3Fill,
  fields: [
    {
      name: "title",
      initialValue: "Forside",
      hidden: true,
      type: "string",
    },
    {
      title: "Tittel",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Intro",
      name: "intro",
      type: "text",
      rows: 6,
    },
    { type: "cardNavigation", name: "navigationObject", title: "Navigasjon" },
    {
      title: "Call to action",
      name: "cta",
      type: "object",
      fields: [
        {
          title: "Link",
          name: "link",
          type: "object",
          fields: [
            {
              title: "Intern eller ekstern lenke?",
              name: "linkType",
              type: "string",
              options: {
                list: [
                  { title: "Intern", value: "isInternal" },
                  { title: "Ekstern", value: "isExternal" },
                ],
                layout: "radio",
              },
              initialValue: "isInternal",
            },
            {
              title: "URL til ekstern nettside",
              name: "externalUrl",
              type: "url",
              hidden: ({ parent }) => parent?.linkType === "isInternal",
            },
            {
              title: "Velg intern side",
              name: "internalUrl",
              type: "reference",
              to: [{ type: "subPage" }],
              hidden: ({ parent }) => parent?.linkType === "isExternal",
            },
          ],
        },
        { title: "Tittel", name: "title", type: "string" },
        {
          title: "Type",
          name: "type",
          type: "string",
          options: {
            list: [
              { title: "Primær", value: "primary" },
              { title: "Sekundær", value: "secondary" },
            ],
          },
        },
      ],
    },
    {
      title: "Seksjoner",
      type: "array",
      name: "sections",
      of: [
        {
          title: "Skillelinje",
          name: "divider",
          type: "object",
          icon: RiPageSeparator,
          preview: {
            prepare: () => {
              return {
                title: "Skillelinje",
                media: RiPageSeparator,
              };
            },
          },
          fields: [
            {
              title: "Skillelinje",
              type: "string",
              name: "divider",
              initialValue: "----------------",
              readOnly: true,
            },
          ],
        },
        {
          title: "Seksjon med blokker",
          name: "section",
          type: "object",
          icon: RiListCheck2,
          preview: {
            select: {
              blocks: "blocks",
            },
            prepare: ({ blocks }) => {
              return {
                title: `${blocks.length} blokk${blocks.length > 1 ? "er" : ""}`,
                media: RiListCheck2,
              };
            },
          },
          fields: [
            {
              title: "Blokker",
              name: "blocks",
              type: "array",
              of: [
                { type: "introduction", title: "Introduksjons-felt" },
                { type: "cardNavigation", title: "Kortnavigasjon" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
