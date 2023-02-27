import { RiLink } from "react-icons/ri";
import { link } from "../_helpers/linkFields";

export default {
  name: "linkObject",
  title: "Link object",
  type: "object",
  icon: RiLink,
  options: {
    modal: "popover"
  },
  fields: [
    link.title,
    link.picker.type,
    link.picker.externalUrl,
    link.picker.internalUrl,
    link.icon,
    link.isPrimary,
  ],
};