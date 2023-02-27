const blocksToHtml = require("@sanity/block-content-to-html");
const client = require("./_sanityClient");

const query = `*[_type == "frontPage"] {
  ...,
  buttons[] {
    ...,
    internalUrl->
  },
  sections[]{
    ...,
    buttons[]{
      ...,
      internalUrl->
    },
    sectionElements[]-> {
      ...,
      "featuredImage": featuredImage.asset->url,
      link {
        ...,
        internalUrl->
      }
    }
  }
}`;

module.exports = async function () {
  return client.fetch(query).then((result) => {
    result[0].pageContent !== undefined
      ? (result[0].pageContent = blocksToHtml({ blocks: result[0].pageContent }))
      : "";

    // Hent ut innholdet fra seksjonen
    if (result[0].sections) {
      for (let section of result[0].sections) {
        section.content !== undefined
          ? (section.content = blocksToHtml({ blocks: section.content }))
          : "";
      } 
    }
    return result[0];
  });
};
