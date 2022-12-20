import { Tree } from "@nrwl/devkit";
import { createFileName } from "../create-file-name";
import { readFileIfExisting } from "nx/src/project-graph/file-utils";
import { FeatureScaffoldingSchema } from "../../generators/feature-scaffolding/schema";

export const updateBackendUrl = (tree: Tree, options: FeatureScaffoldingSchema) => {
  const backendUrlFilePath = `./apps/${options.project}/src/app/modules/common/configs/backend.tsx`;
  const urlsContents = readFileIfExisting(backendUrlFilePath);
  const urlsToAdd = `
    ${createFileName(options.name)}: {}
  `;

  const fileEndIndex = urlsContents.lastIndexOf("}");
  const urlsPrefix = urlsContents.substring(0, fileEndIndex);
  const urlsSuffix = urlsContents.substring(fileEndIndex);

  const finalContent = `${urlsPrefix}${urlsToAdd}${urlsSuffix}`;

  tree.write(backendUrlFilePath, finalContent);
  return;
};
