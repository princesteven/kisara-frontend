import {isEmpty} from "lodash";
import {ucwords} from "@react-frontends/v2/helpers";

interface Configs {
  casing: 'camelCase' | 'snake_case';
  hidden: boolean;
  columns: any[];
}

interface CreateColumnsReturn {
  data: string,
  title: string,
  hidden?: boolean,
}

/**
 * @function
 * @name createColumns
 * @description formats object to column's GetData type
 * @param sampleObject {Object} a sample object to extract column titles
 * @param configs {Object} function configurations
 * @param configs.columns {Array} columns that should either be hidden or shown.
 * Optional, defaults to Empty Array
 * @param configs.casing {camelCase | snake_case} the casing of the columns as they are passed from the object.
 * Optional, defaults to snake_case
 * @param configs.hidden {Boolean} whether to treat the columns above as columns to hide or columns to show.
 * If true, they will be columns to hide. If false, they will be columns to show. Optional, defaults to true.
 * @version 2.0.0
 * @since 2.0.0
 * @author Prince Malipula
 * @returns {object} user form
 */
export const createColumns = (
  sampleObject: Record<any, unknown> = {},
  configs: Configs = {
    columns: [],
    hidden: true,
    casing: 'snake_case'
  }
): CreateColumnsReturn[] => {
  if (!sampleObject) {
    return [];
  }

  const columnTitles = Object.keys(sampleObject);
  const separator = configs.casing === 'camelCase' ? /(?=[A-Z])/ : '_';
  return columnTitles.map((column: string) => {
    const formattedTitle = column.replace(/([A-Z]+)/g, "_$1").replace(/^,/, "");
    const title = formattedTitle.split(separator);
    let generatedTitle = '';
    const conf = title.map((titleArray) => {
      return (generatedTitle = generatedTitle + ' ' + titleArray);
    });
    return {
      data: column,
      title: ucwords(conf[conf.length - 1]),
      hidden: isEmpty(configs.columns)
        ? column === 'id'
        : (configs.hidden
          ? configs.columns.includes(column as never)
          : !configs.columns.includes(column as never)
      ) || column === 'id',
    };
  });
};
