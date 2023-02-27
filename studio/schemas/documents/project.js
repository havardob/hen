import {RiProfileLine} from "react-icons/ri";

export default {
    name: 'project',
    title: 'Prosjekt',
    type: 'document',
    icon: RiProfileLine,
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
            rows: 4,
        },
        {
            title: "Promobilde",
            name: "featuredImage",
            type: "image",
        }, 
        {
            title: "Kategori",
            name: "category",
            type: "string",
            initialValue: "simplest",
            options: {
                list: [{title: "Helt enkel", value: "simplest"}, {title: "Enkel", value: "simple"}]
            }
        },
        {
            title: "Metadata",
            name: "projectMeta",
            type: "object",
            fields: [
                {
                    title: "Kunde",
                    name: "client",
                    type: "string"
                },
                {
                    title: "Årstall",
                    name: "year",
                    type: "number"
                },
            ]
        },
        {
            title: "Lenke til nettside",
            name: "link",
            type: "linkObject"
        },
        {
            title: "Innhold",
            name: "body",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },

    ],
}