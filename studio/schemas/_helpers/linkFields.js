export const link = {
  title: {
    title: "Lenketekst",
    name: "linkText",
    type: "string",
  },
  picker: {
    type: {
      title: "Intern eller ekstern lenke?",
      name: "linkType",
      type: "string",
      options: {
        list: [
          { title: "Intern", value: "isInternal" },
          { title: "Ekstern", value: "isExternal" },
        ],
        layout: "radio",
      },
      initialValue: "isInternal",
    },
    externalUrl: {
      title: "URL til ekstern nettside",
      name: "externalUrl",
      type: "string",
      hidden: ({ parent }) => parent.linkType == "isInternal",
    },
    internalUrl: {
      title: "Velg intern side",
      name: "internalUrl",
      type: "reference",
      to: [{ type: "subPage" }],
      hidden: ({ parent }) => parent.linkType == "isExternal",
    },
  },
  icon: {
    title: "Ikon",
    name: "linkIcon",
    type: "string",
    options: {
      list: [
        { title: "Pil høyre", value: "icon-arrow-right" },
        { title: "Smarttelefon", value: "icon-smartphone" },
      ],
    },
  },
  icon: {
    title: "Ikon",
    name: "linkIcon",
    type: "string",
    options: {
      list: [
        { title: "Pil høyre", value: "icon-arrow-right" },
        { title: "Smarttelefon", value: "icon-smartphone" },
      ],
    },
  },
  isPrimary: {
    title: "Primærfarge",
    name: "isPrimary",
    type: "boolean",
    initialValue: false,
  },
};

export const linkPicker = {
  title: "Lenke",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Intern side?",
      description: "Skal denne lenken gå til en annen side på dette nettstedet?",
      name: "isInternal",
      type: "boolean",
      initialValue: false,
    },
    {
      title: "Ekstern side",
      description:
        "Legg inn URL'en til nettsiden du vil lenke til. Husk å ta med 'https://'. F.eks. 'https://vg.no'",
      name: "externalUrl",
      type: "url",
      validation: (Rule) => Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
      hidden: ({ parent }) => parent?.isInternal === true, 
    }, 
    {
      title: "Intern side",
      description: "Velg en av sidene du har opprettet her i Sanity fra nedtrekkslisten",
      name: "internalUrl",
      type: "reference",
      to: [{ type: "subPage" }],
      hidden: ({ parent }) => parent?.isInternal === false,
      options: {
        disableNew: true,
      },
    },
    {
      title: "Åpne i ny fane?",
      description: "Bestem om lenken skal åpne seg i en ny fane når noen klikker på den", 
      name: "newTab",
      type: "boolean",
      initialValue: false
    }
  ],
};
