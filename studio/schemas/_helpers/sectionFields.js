import { link } from "./linkFields";
export const section = {
  title: {
    title: "Overskrift eller noe",
    name: "title",
    type: "string",
  },
  content: {
    title: "Innhold",
    name: "content",
    type: "array",
    of: [{ type: "block" }],
  },
  buttons: {
    title: "Knapper",
    name: "buttons",
    type: "array",
    of: [
      {
        title: "Lenke",
        name: "linkObject",
        type: "object",
        fields: [
          link.title,
          link.picker.type,
          link.picker.externalUrl,
          link.picker.internalUrl,
          link.icon,
          link.isPrimary
        ],
      },
    ],
  },
  buttonsAlignmentCenter: {
    title: "Midtstill knapper",
    name: "buttonsAlignmentCenter",
    type: "boolean",
    initialValue: false,
  },
  darkTheme: {
    title: "Mørk modus",
    name: "darkTheme",
    type: "boolean",
    initialValue: false,
  },
  isNarrow: {
    title: "Smal bredde",
    name: "isNarrow",
    type: "boolean",
    initialValue: false,
  },
};
