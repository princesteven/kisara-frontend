import { Tree } from "@nrwl/devkit";
import { createFeatureName } from "../create-feature-name";
import { readFileIfExisting } from "nx/src/project-graph/file-utils";
import { FeatureScaffoldingSchema } from "../../generators/feature-scaffolding/schema";

export const updateAppRoutes = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const appEntryFilePath = `./apps/${options.project}/src/app/entry-point/app.tsx`;
  const appRoutes = updateRoutesImports(tree, options);

  const newRoute = `
            {${createFeatureName(options.name)}Routes}
          `;
  const searchItem = '}';
  const endOfDeclarationIndex = appRoutes.lastIndexOf(searchItem);
  const lastRouteIndex = appRoutes.lastIndexOf(searchItem, endOfDeclarationIndex - 1)
  const prefix = appRoutes.substring(0, lastRouteIndex + 1)
  const suffix = appRoutes.substring(lastRouteIndex + 1)

  const updatedRoutes = `${prefix}${newRoute}${suffix}`

  if (updatedRoutes !== appRoutes) {
    tree.write(appEntryFilePath, updatedRoutes)
  }
};

const updateRoutesImports = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const appEntryFilePath = `./apps/${options.project}/src/app/entry-point/app.tsx`;
  const appRoutes = readFileIfExisting(appEntryFilePath);
  const importStatement = `\n import ${createFeatureName(options.name)}Routes from '../modules/${options.name}/routes';`;

  const lastImportIndex = appRoutes.lastIndexOf("import");
  const trimmedContents = appRoutes.substring(lastImportIndex);
  const endOfImportStatement = trimmedContents.indexOf(";");
  const currentImportPrefix = appRoutes.substring(0, endOfImportStatement + lastImportIndex + 1);
  const currentImportSuffix = appRoutes.substring(endOfImportStatement + lastImportIndex + 1);
  return `${currentImportPrefix}${importStatement}${currentImportSuffix}`;
};
