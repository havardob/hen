const client = require("./_sanityClient");

const query = `*[_type == "frontPage"] {
  ...,
  navigationObject {
    navigation[] {
      ...,
        link {
          ...,
          internalUrl->
        },
    },
  },
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
    console.log(result[0].navigationObject.navigation[0]);
    return result[0];
  });
};
