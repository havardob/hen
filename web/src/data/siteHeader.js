const client = require("./_sanityClient");

const query = `*[_type == "siteHeader"] {
    ...,
    "logo": logo.asset -> url,
    navigation[] {
      ...,
      internalUrl->
    }
}`;

module.exports = async function () {
  const data = client.fetch(query).then((result) => {
    return result[0];
  });
  return data;
};
