export const metaTitle = {
  name: "metaTitle",
  title: "Navnet på nettsiden",
  type: "string",
  description: "Navnet du skriver inn her vil vises i fanen i nettleseren",
};

export const metaDescription = {
  name: "metaDescription",
  title: "Metabeskrivelse",
  type: "text",
  rows: 4,
  description:
    "Beskriv hva denne nettsiden handler om. Denne teksten dukker opp i Google-søkeresultatene, eller hvis du deler denne nettsiden på Facebook eller andre sosiale medier",
};

export const metaImage = {
  name: "metaImage",
  title: "Bilde til deling på sosiale medier",
  type: "image",
};

export const metaKeywords = {
  name: "metaKeywords",
  title: "Nøkkelord",
  type: "array",
  of: [
    {
      type: "string",
    },
  ],
  options: {
    layout: "tags",
  },
};