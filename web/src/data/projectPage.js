const client = require("./_sanityClient");

const query = `*[_type == "projectPage"] {
    ...
}`;

module.exports = async function () {
  const data = client.fetch(query).then((result) => {
    console.log(result);
    return result;
  });  
  return data;
};
