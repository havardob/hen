import { RiLink, RiDashboardLine } from "react-icons/ri";
import { iconPicker } from "../_helpers/iconFields";

export default {
  name: "cardNavigation",
  title: "Kort-navigasjons-blokk",
  type: "object",
  icon: RiDashboardLine,
  preview: {
    select: {
      list: "navigation",
    },
    prepare: ({ list }) => {
      let listOfLinks = [];
      for (const item of list) {
        listOfLinks.push(item.title);
      }
      return {
        title: "Kortnavigasjon",
        subtitle: listOfLinks.join(" | "),
        media: RiDashboardLine,
      };
    },
  },
  fields: [
    {
      title: "Innganger",
      name: "navigation",
      type: "array",
      of: [
        {
          title: "Lenke",
          name: "navigationItem",
          type: "object",
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
            prepare: ({ title, subtitle }) => ({
              title,
              subtitle,
              media: RiLink,
            }),
          },
          fields: [
            iconPicker,
            {
              title: "Tittel",
              name: "title",
              type: "string",
            },
            {
              title: "Beskrivelse",
              name: "description",
              type: "text",
              rows: 2,
            },
          ],
        },
      ],
    },
  ],
};
