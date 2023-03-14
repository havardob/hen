import { iconPicker } from "../_helpers/iconFields";
import { RiInsertRowTop } from "react-icons/ri";

export default {
  name: "introduction",
  title: "Intro-felt",
  type: "object",
  icon: RiInsertRowTop,
  preview: {
    select: {
      title: "title",
      subtitle: "text",
    },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle,
      media: RiInsertRowTop,
    }),
  },
  fields: [
    iconPicker,
    {
      title: "Overskrift",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tekst",
      name: "text",
      type: "text",
      rows: 4,
    },
  ],
};
