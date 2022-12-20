import { Tree } from "@nrwl/devkit";
import { createFileName } from "../create-file-name";
import { readFileIfExisting } from "nx/src/project-graph/file-utils";
import { FeatureScaffoldingSchema } from "../../generators/feature-scaffolding/schema";

export const updateFrontendUrl = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const frontendUrlFilePath = `./apps/${options.project}/src/app/modules/common/configs/frontend.tsx`;
  const urlsContents = readFileIfExisting(frontendUrlFilePath);
  const urlsToAdd = `
    ${createFileName(options.name)}: {
      index: '/${options.name}',
      add: 'add',
      update: 'update'
    }
  `;

  const fileEndIndex = urlsContents.lastIndexOf("}");
  const urlsPrefix = urlsContents.substring(0, fileEndIndex);
  const urlsSuffix = urlsContents.substring(fileEndIndex);

  const finalContent = `${urlsPrefix}${urlsToAdd}${urlsSuffix}`;

  tree.write(frontendUrlFilePath, finalContent);
  return;
};
