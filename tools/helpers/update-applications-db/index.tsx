import { Tree } from "@nrwl/devkit";
import { applications } from "../../db";
import { readFileIfExisting } from "nx/src/project-graph/file-utils";

export const getApplicationPort = (initialPort = 4201) => {
  const application = applications.find(application => application.port === initialPort);

  if (!application) {
    return initialPort;
  }
  return getApplicationPort(initialPort + 1);
};

export const updateApplicationDb = (tree: Tree, application: string, port: number) => {
  const path = './tools/db/applications.tsx';
  const applications = readFileIfExisting(path);

  const endOfFile = applications.lastIndexOf("]");
  const prefix = applications.substring(0, endOfFile);
  const suffix = applications.substring(endOfFile);

  const newApp = `
    {
      name: '${application}',
      port: ${port},
    },
  `;

  const updatedApplications = `${prefix}${newApp}${suffix}`;

  tree.write(path, updatedApplications);
};
