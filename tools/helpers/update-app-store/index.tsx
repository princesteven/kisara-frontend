import { Tree } from "@nrwl/devkit";
import { tsquery } from "@phenomnomnominal/tsquery";
import { createFileName } from "../create-file-name";
import { VariableStatement, Identifier } from "typescript";
import { readFileIfExisting } from "nx/src/project-graph/file-utils";
import { createFeatureFunctionName } from "../create-feature-function-name";
import { FeatureScaffoldingSchema } from "../../generators/feature-scaffolding/schema";

export const updateAppStore = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const storeFilePath = `./apps/${options.project}/src/store/index.tsx`;

  const appStore = updateStoreInputs(tree, options);

  if (appStore !== "") {
    const updatedStore = tsquery.replace(
      appStore,
      "VariableStatement",
      (node) => {
        const vsNode = node as VariableStatement;

        const declarations = vsNode.declarationList.declarations[0];

        if ((declarations.name as Identifier).escapedText === "reducers") {

          const newReducer = `
            ${createFeatureFunctionName(options.name)}: ${createFeatureFunctionName(options.name)}Reducer,
          `;

          const arrLiteral = declarations.initializer as any;

          if (arrLiteral.properties.length > 0) {
            const currentStore = vsNode.getFullText();

            const insertPosition = currentStore.lastIndexOf(",") + 1;

            const currentStorePrefix = currentStore.substring(0, insertPosition);
            const currentStoreSuffix = currentStore.substring(insertPosition);

            return `${currentStorePrefix}${newReducer}${currentStoreSuffix}`;
          }
        }
      }
    );

    if (updatedStore !== appStore) {
      tree.write(storeFilePath, updatedStore);
    }
  }
};

const updateStoreInputs = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const storeFilePath = `./apps/${options.project}/src/store/index.tsx`;
  const appStore = readFileIfExisting(storeFilePath);
  const importStatement = `\n import ${createFeatureFunctionName(options.name)}Reducer from '../app/modules/${options.name}/slices/${createFileName(options.name)}';`;

  const lastImportIndex = appStore.lastIndexOf("import");
  const trimmedContents = appStore.substring(lastImportIndex);
  const endOfImportStatement = trimmedContents.indexOf(";");
  const currentImportPrefix = appStore.substring(0, endOfImportStatement + lastImportIndex + 1);
  const currentImportSuffix = appStore.substring(endOfImportStatement + lastImportIndex + 1);
  return `${currentImportPrefix}${importStatement}${currentImportSuffix}`;
};
