import { RiSortDesc } from "react-icons/ri";
import { richText } from "../_helpers/richTextFields";

export default {
  name: "accordionItem",
  title: "Accordion item",
  type: "object",
  icon: RiSortDesc,
  preview: {
    select: {
        title: "title",
        subtitle: "content",
    }
  },
  fields: [
    {
      title: "Tittel / Overskrift",
      name: "title",
      type: "string",
    },
    {
      ...richText, 
      name: "content",
      validation: Rule => Rule.required()
    },
  ],
};
