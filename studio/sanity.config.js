import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { DefaultPreview } from "./custom-components/defaultPreview";
import schemas from "./schemas/schema";
import deskStructure from "./src/deskStructure";

export default defineConfig([
  {
    name: "production-workspace",
    basePath: "/production",
    title: "Produksjon",
    subtitle: "Alt innholdet på nettsiden din",
    dataset: "production",
    projectId: "20l7h879",
    plugins: [
      deskTool({
        structure: deskStructure,
      }),
    ],
    schema: {
      types: schemas,
    },
    form: {
      components: {
        preview: DefaultPreview,
      },
    },
  },
  {
    name: "test-workspace",
    basePath: "/test",
    title: "Test",
    subtitle: "Bytt til denne hvis du vil teste noe",
    dataset: "test",
    projectId: "20l7h879",
    plugins: [
      deskTool({
        structure: deskStructure,
      }),
    ],
    schema: {
      types: schemas,
    },
    form: {
      components: {
        preview: DefaultPreview,
      },
    },
  },
]);
