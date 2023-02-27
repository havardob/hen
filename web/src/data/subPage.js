const blocksToHtml = require("@sanity/block-content-to-html");
const client = require("./_sanityClient");
const imageUrlBuilder = require("@sanity/image-url");

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const query = `*[_type == "subPage"] {
    ...,
    aside[] {
      _type == 'factBox' => @,
      _type == 'priceTableRef' || _type == 'iconCardRef' => @-> {
        ...,
        link {
          ...,
          internalUrl->
        }
      }
    },
}`;

const h = blocksToHtml.h;

const serializers = {
  types: {
    // Accordion
    accordion: (props) => {
      let title = String;
      let content = String;

      if (props.node.title) {
        title = h(
          "summary.accordion-button",
          props.node.title,
          h("i.accordion-button-icon", {
            innerHTML: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="currentColor"
                      d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
            </svg>`,
          })
        );
      }

      if (props.node.content) {
        content = h(
          "div.accordion-content-wrapper",
          h("div.accordion-content", {
            innerHTML: blocksToHtml({ blocks: props.node.content, className: "rich-text" }),
          })
        );
      }

      return h("details.accordion", title, content);
    },
    // Media
    media: (props) => {
      let image = String;
      let figcaption = String;

      if (props.node.imageFile) {
        image = h("img", {
          src: urlFor(props.node.imageFile).url(),
          alt: props.node.altText ? props.node.altText : "",
          className: props.node.hasBorder ? "bordered" : "",
        });
      }

      if (props.node.imageText) {
        figcaption = h("figcaption", props.node.imageText);
      }

      return h("figure.block-image", image, figcaption);
    },
    // Video
    youtubeEmbed: (props) => {
      return h("div.block-video", {
        innerHTML: `<iframe src="https://www.youtube.com/embed/${props.node.code}" allowfullscreen></iframe>`,
      });
    },
  },
};

module.exports = async function () {
  const data = client.fetch(query).then((result) => {
    for (let subpage of result) {
      subpage.body !== undefined
        ? (subpage.body = blocksToHtml({
            blocks: subpage.body,
            className: "rich-text",
            serializers: serializers,
          }))
        : "";
    }
    return result;
  });
  return data;
};
