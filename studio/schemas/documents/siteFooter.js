import { RiLayoutBottom2Line, RiLink } from "react-icons/ri";
import { link } from "../_helpers/linkFields";

export default {
  name: "siteFooter",
  title: "Footer",
  type: "document",
  icon: RiLayoutBottom2Line,
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string"
    },
    {
      title: "Lenker",
      name: "footerLinks",
      type: "array",
      of: [
        {
          title: "Lenke til...",
          name: "link",
          type: "object",
          icon: RiLink,
          fields: [
            link.title,
            link.picker.type,
            link.picker.externalUrl,
            link.picker.internalUrl,
            link.icon,
            link.isPrimary,
          ],
        },
      ],
    },
    {
      title: "Innhold",
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Sosiale medier",
      name: "someLinks",
      type: "array",
      of: [
        {
          title: "SoMe-lenke",
          name: "link",
          type: "object",
          fields: [
            {
              title: "Lenke til...",
              name: "linkSettings",
              type: "linkObject",
            },
            {
              title: "Ikon",
              name: "icon",
              type: "iconPicker",
            },
          ],
        },
      ],
    },
  ],
};
