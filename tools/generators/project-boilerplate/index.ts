import { ProjectScaffoldingSchema } from "./schema";
import {
  Tree,
  formatFiles,
  generateFiles,
  joinPathFragments,
  installPackagesTask
} from "@nrwl/devkit";
import { checkApplicationExist, getApplicationPort, updateApplicationDb } from "../../helpers";

const addFiles = (tree: Tree, options: ProjectScaffoldingSchema) => {
  const applicationExists = checkApplicationExist(options);

  if (!applicationExists) {
    const dir = `./apps/${options.project}`;
    const nextPort = getApplicationPort()

    generateFiles(
      tree,
      joinPathFragments(__dirname, "./files"),
      dir,
      {
        ...options,
        tmpl: "",
        port: nextPort,
      }
    );
    updateApplicationDb(tree, options.project, nextPort)
    return;
  }

  console.log(`The Application ${options.project} is Already scaffolded`);
  return;
};

export default async function(tree: Tree, schema: ProjectScaffoldingSchema) {
  addFiles(tree, schema);
  tree.delete(`./apps/${schema.project}/src/app/app.module.css`)
  tree.delete(`./apps/${schema.project}/src/app/app.spec.tsx`)
  tree.delete(`./apps/${schema.project}/src/app/app.tsx`)
  tree.delete(`./apps/${schema.project}/src/app/nx-welcome.tsx`)

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
