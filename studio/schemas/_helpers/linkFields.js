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
