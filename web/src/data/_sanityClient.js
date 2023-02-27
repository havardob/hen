const sanityClient = require("@sanity/client");
const client = {
  projectId: "20l7h879",
  dataset: "production",
  apiVersion: "2022-06-01",
  useCdn: false,
};

module.exports = sanityClient({ ...client });
