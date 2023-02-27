import { RiImageLine } from "../../node_modules/react-icons/ri";

export default {
    name: 'images',
    title: 'Bilder',
    type: 'document',
    icon: RiImageLine,
    fields: [
        {
            title: "Tittel på bildet",
            name: "title", 
            type: "string",
        }, 
        {
            title: "Bilde",
            name: "image",
            type: "imageObject"
        }
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "image.altText",
            media: "image.imageFile"
        }
    }
}