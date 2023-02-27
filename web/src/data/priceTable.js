const client = require("./_sanityClient");
const query = `*[_type == "priceTable"] {
    ...
}`;

module.exports = async function () {
  return client.fetch(query).then((result) => {
    return result;
  });
};
