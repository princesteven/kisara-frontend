import { FeatureScaffoldingSchema } from "./schema";
import {
  createFileName,
  updateAppStore,
  updateAppRoutes,
  updateAppMenus,
  updateBackendUrl,
  createFeatureName,
  updateFrontendUrl,
  createFeatureFunctionName,
} from "../../helpers";
import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments
} from "@nrwl/devkit";

const createFeature = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const dir = `./apps/${options.project}/src/app/modules/${options.name}`;

  generateFiles(
    tree,
    joinPathFragments(
      __dirname,
      options.type === "crud" ? "./crud" : "./single"
    ),
    dir,
    {
      ...options,
      createFeatureName,
      createFileName,
      createFeatureFunctionName,
      featureName: createFileName(options.name),
      tmpl: ""
    }
  );
};

export default async function(tree: Tree, schema: FeatureScaffoldingSchema) {
  await createFeature(tree, schema);
  updateAppStore(tree, schema);
  updateAppMenus(tree, schema);
  updateAppRoutes(tree, schema);
  updateBackendUrl(tree, schema);
  updateFrontendUrl(tree, schema);
  await formatFiles(tree);
}
