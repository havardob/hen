import { RiSlideshowLine } from "react-icons/ri";

export default {
  name: "projectPage",
  title: "Project page",
  type: "document",
  icon: RiSlideshowLine,
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
    },
    {
      title: "URL",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Ingress",
      name: "leading",
      type: "text",
      rows: 5,
    },
  ],
};