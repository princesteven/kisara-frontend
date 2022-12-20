import { isEmpty } from "lodash";
import { ucwords } from "../ucwords";

/**
 * @function
 * @name createHyphenedColumns
 * @description create columns data
 * @param sampleObject {string} first element in data
 * @param hiddenColumns {string} array of keys that should be ignored
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {Array<Object>} columns data i.e data, title, hidden
 */
export const createHyphenedColumns = (sampleObject: ObjectConstructor, hiddenColumns = []) => {
    if (!sampleObject) {
        return [];
    }

    const columns = Object.keys(sampleObject);
    return columns.map((column: string) => {
        const title = column.split('_');
        let generatedTitle = '';
        const conf = title.map((titleArray) => {
            return (generatedTitle = generatedTitle + ' ' + titleArray);
        });
        return {
            data: column,
            title: ucwords(conf[conf.length - 1]),
            hidden: isEmpty(hiddenColumns)
                ? column === 'id'
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                : hiddenColumns.includes(column),
        };
    });
};
