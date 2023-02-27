import { richTextField } from "../../custom-components/richTextField";

export const richText = {
  title: "Rik-tekst",
  name: "richText",
  type: "array",
  of: [
    {
      type: "block",
      options: {
        spellCheck: false,
      },
      components: {
        input: richTextField,
      },
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Overskrift 2", value: "h2" },
        { title: "Overskrift 3", value: "h3" },
        { title: "Sitat", value: "blockquote" },
      ],
      lists: [
        { title: "Punktliste", value: "bullet" },
        { title: "Nummerert", value: "number" },
      ],
      marks: {
        // Only allow these decorators
        decorators: [
          { title: "Uthevet", value: "strong" },
          { title: "Kursiv", value: "em" },
          { title: "Gjennomstrek", value: "strike-through" },
        ],
        annotations: [
          {
            name: "link",
            type: "linkObject",
            title: "Lenke",
          },
        ],
      },
    },
    {
      name: "accordion",
      type: "accordionItem",
      title: "Trekkspill",
    },
    {
      name: "media",
      type: "imageObject",
      title: "Bilde",
    },
    {
      title: "YouTube-video",
      name: "youtubeEmbed",
      type: "object",
      fields: [
        {
          title: "Youtube ID",
          type: "string",
          name: "code",
        },
      ],
    },
  ],
};
