const client = require("./_sanityClient");

const query = `*[_type == "frontPage"] {
  ...,
  cta {
    ...,
    link {
      ...,
      internalUrl-> 
    }
  },
  sections[] {
    ...,
    blocks[] {
      ...
    } 
  }
}`;

module.exports = async function () {
  return client.fetch(query).then((result) => {
    return result[0];
  });
};
