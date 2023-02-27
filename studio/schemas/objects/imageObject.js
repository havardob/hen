import { RiImage2Line, RiRuler2Fill } from "react-icons/ri";
import { ImageObjectPreview } from "../../custom-components/imageObjectPreview";

export default {
  name: "imageObject",
  title: "Bilde",
  type: "object",
  icon: RiImage2Line,
  components: {
    preview: ImageObjectPreview,
  },
  preview: {
    select: {
      title: "title",
      subtitle: "imageText",
      media: "imageFile",
    },
  },
  fields: [
    {
      title: "Bildetittel",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Bildefil",
      name: "imageFile",
      type: "image",
      description: "Støtter filtypene .jpg, .png, .gif og .svg.",
    },
    {
      title: "Bildetekst",
      name: "imageText",
      description: "Tekst som skal vises under bildet",
      type: "text",
      rows: 4,
    },
    {
      title: "Legg på en ramme",
      description: "Lurt å gjøre hvis bildet har hvit eller gjennomsiktig bakgrunnsfarge",
      name: "hasBorder",
      type: "boolean",
      initialValue: false,
      options: {
        layout: "checkbox",
      },
    },
    {
      title: "Bildet er kun til pynt",
      description:
        "Huk av denne hvis bildet ikke er viktig for resten av innholdet. Da vil høytlesningsverktøy for svaksynte ignorere bildet.",
      name: "isDecorative",
      type: "boolean",
      initialValue: false,
      options: {
        layout: "checkbox",
      },
    },
    {
      title: "Alternativ tekst (alt-text)",
      name: "altText",
      description:
        "Beskriv nøye hva du ser på bildet. Denne teksten vil leses opp av høytlesningsverktøy for svaksynte. Ikke start teksten med 'Bilde av...'",
      type: "text",
      rows: 2,
      hidden: ({ parent }) => parent.isDecorative,
    },
  ],
};
