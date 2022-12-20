"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHyphenedColumns = void 0;
var lodash_1 = require("lodash");
var ucwords_1 = require("../ucwords");
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
var createHyphenedColumns = function (sampleObject, hiddenColumns) {
    if (hiddenColumns === void 0) { hiddenColumns = []; }
    if (!sampleObject) {
        return [];
    }
    var columns = Object.keys(sampleObject);
    return columns.map(function (column) {
        var title = column.split('_');
        var generatedTitle = '';
        var conf = title.map(function (titleArray) {
            return (generatedTitle = generatedTitle + ' ' + titleArray);
        });
        return {
            data: column,
            title: (0, ucwords_1.ucwords)(conf[conf.length - 1]),
            hidden: (0, lodash_1.isEmpty)(hiddenColumns)
                ? column === 'id'
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                : hiddenColumns.includes(column),
        };
    });
};
exports.createHyphenedColumns = createHyphenedColumns;
//# sourceMappingURL=index.js.map