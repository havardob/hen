import {RiListCheck2} from "react-icons/ri";

export default {
    name: 'priceTable',
    title: 'Pristabell',
    type: 'document',
    icon: RiListCheck2,
    fields: [
        {
            title: "Tittel",
            name: "title",
            type: "string",
        }, 
        {
            title: "Pris", 
            name: "price",
            type: "string",
        },
        {
            title: "Beskrivelse",
            name: "description",
            type: "text",
            rows: 3,
        }, 
        {
            title: "Lenke",
            name: "link",
            type: "linkObject",
        },
        {
            title: "Fordeler",
            name: "perks",
            type: "object",
            fields: [
                {
                    title: "Topptekst",
                    name: "topText",
                    type: "text",
                    rows: 2,
                }, 
                {
                    title: "Liste",
                    name: "list",
                    type: "array",
                    of: [{type: "string"}]
                },
                {
                    title: "Bunntekst",
                    name: "bottomText",
                    type: "text",
                    rows: 2
                }
            ]
        }
    ],
}