import {lcfirst} from "../index";

/**
 * @function
 * @name createFileName
 * @description creates a feature name out of a newly created scaffolding feature variable
 * @param fileName {string} feature name
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {String}
 */
export const createFileName = (fileName: string) => {
  const convertedFileName = fileName.replace(
    /[^a-zA-Z0-9]+(.)/g,
    (m, chr) => `_${chr.toLowerCase()}`
  );
  return lcfirst(convertedFileName);
}
