import { Tree } from "@nrwl/devkit";
import { ucfirst } from "../ucfirst";
import { tsquery } from "@phenomnomnominal/tsquery";
import { createFileName } from "../create-file-name";
import { VariableStatement, Identifier } from "typescript";
import { readFileIfExisting } from "nx/src/project-graph/file-utils";
import { FeatureScaffoldingSchema } from "../../generators/feature-scaffolding/schema";

export const updateAppMenus = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const storeFilePath = `./apps/${options.project}/src/app/modules/common/configs/menu.tsx`;

  const appStore = readFileIfExisting(storeFilePath);

  if (appStore !== "") {
    const updatedStore = tsquery.replace(
      appStore,
      "VariableStatement",
      (node) => {
        const vsNode = node as VariableStatement;

        const declarations = vsNode.declarationList.declarations[0];

        if ((declarations.name as Identifier).escapedText === "menus") {

          const newMenu = `
            {
              name: '${ucfirst(options.name.replace("-", " "))}',
              link: frontend.${createFileName(options.name)}.index,
              icon: <SettingsIcon />,
              permissions: [],
            },
          `

          const arrLiteral = declarations.initializer as any;

          if (arrLiteral.elements.length > 0) {
            const currentStore = vsNode.getFullText();
            const insertPosition = currentStore.lastIndexOf(",") + 1;

            const currentStorePrefix = currentStore.substring(0, insertPosition);
            const currentStoreSuffix = currentStore.substring(insertPosition);

            return `${currentStorePrefix}${newMenu}${currentStoreSuffix}`;
          }
        }
      }
    );

    if (updatedStore !== appStore) {
      tree.write(storeFilePath, updatedStore);
    }
  }
};

