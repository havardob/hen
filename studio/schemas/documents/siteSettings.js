import { metaTitle, metaDescription, metaKeywords, metaImage } from "../_helpers/metaFields";
import { RiSettings3Line } from "../../node_modules/react-icons/ri";

export default {
    name: 'siteSettings',
    title: 'Innstillinger for nettsiden',
    type: 'document',
    icon: RiSettings3Line,
    fields: [
        metaTitle, 
        metaDescription,
        {
            name: "metaAuthor",
            title: "Forfatter",
            type: "string"
        },
        metaImage, 
        metaKeywords
    ],
}