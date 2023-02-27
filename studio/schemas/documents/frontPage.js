import { metaTitle, metaDescription, metaKeywords, metaImage } from "../_helpers/metaFields";
import { section } from "../_helpers/sectionFields";
import { RiHome3Fill } from "../../node_modules/react-icons/ri";
import { richText } from "../_helpers/richTextFields";

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
