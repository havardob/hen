import { RiMedal2Line } from "react-icons/ri";

export default {
  name: "iconCard",
  title: "Ikon-kort",
  type: "document",
  icon: RiMedal2Line,
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
    },
    {
      title: "Ikon",
      name: "icon",
      type: "object",
      options: {
        layout: "grid",
        columns: 2,
      },
      fields: [
        {
          title: "Ikon",
          name: "symbol",
          type: "string",
          options: {
            list: [
              {
                title: "Responsiv",
                value: "icon-edit",
              },
              {
                title: "Smarttelefon",
                value: "icon-smartphone",
              },
              {
                title: "Google-logo",
                value: "icon-google",
              },
              {
                title: "Dollar-tegn",
                value: "icon-dollar",
              },
            ],
          },
        },
        {
            title: "Farge",
            name: "color",
            type: "string", 
            options: {
                list: [
                    { title: "Rød", value: "red"},
                    { title: "Grønn", value: "green"},
                    { title: "Blå", value: "blue"}, 
                    { title: "Lilla", value: "purple"},
                    { title: "Oransje", value: "orange"},
                ]
            }
        }
      ],
    },
    {
      title: "Innhold",
      name: "content",
      type: "text",
      rows: 5,
    },
    {
      title: "Lenke",
      name: "link",
      type: "linkObject",
    },
  ],
};
