import { RiHome3Fill, RiLink } from "../../node_modules/react-icons/ri";

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
      type: "string"
    },
    {
      title: "Intro",
      name: "intro",
      type: "text",
      rows: 6,
    },
    {
      title: "Innganger",
      name: "navigation",
      type: "array",
      of: [
        { 
          title: "Lenke",
          name: "navigationItem",
          type: "object",
          icon: RiLink,
          fields: [
            {
              title: "Tittel",
              name: "title",
              type: "string",
            },
            {
              title: "Beskrivelse",
              name: "description",
              type: "text",
              rows: 2
            }
          ]
        }
      ]
    }
  ]
};
