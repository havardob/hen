export default {
  name: "iconPicker",
  title: "Icon picker",
  type: "object",
  fields: [
    {
      title: "Velg ikon",
      name: "icon",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebookIcon" },
          { title: "Twitter", value: "twitterIcon" },
        ],
      },
    },
  ],
};
