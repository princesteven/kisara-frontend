import { applications } from '../../db'
import { ProjectScaffoldingSchema } from "../../generators/project-boilerplate/schema";

export const checkApplicationExist = (options: ProjectScaffoldingSchema) => {
  return applications.some(application => application.name === options.project)
}
