import { RiLayoutTop2Line, RiLink } from "react-icons/ri";
import { link } from "../_helpers/linkFields";

export default {
  name: "siteHeader",
  title: "Header",
  type: "document",
  icon: RiLayoutTop2Line,
  fields: [
    {
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Header",
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
    },
    {
      title: "Navigasjon",
      name: "navigation",
      type: "array",
      of: [
        {
          title: "Lenke til...",
          name: "navigationItem",
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
  ],
};
