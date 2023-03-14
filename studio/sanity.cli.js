import { defineCliConfig } from "sanity/cli";

export const sanityClient = defineCliConfig({
  api: {
    projectId: "20l7h879",
    dataset: "production",
  },
});
