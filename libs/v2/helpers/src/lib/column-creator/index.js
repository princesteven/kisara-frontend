"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columnCreator = void 0;
var lodash_1 = require("lodash");
/**
 * Create columns for antd table. Receives an array of headers and actions.
 * @param header The headers of the table eg [{title: '', data: ''}]
 * @param actions the actions such as edit, add etc
 * @returns Columns for antd
 */
var columnCreator = function (header, actions) {
    if (header === void 0) { header = []; }
    if (actions === void 0) { actions = {}; }
    var columns = [];
    if (Array.isArray(actions) && !(0, lodash_1.isEmpty)(actions)) {
        var extraColumns = (0, lodash_1.intersectionWith)(actions, header, 
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        function (extraColumn, originalColumn) {
            if (!originalColumn.hidden) {
                return originalColumn.data === extraColumn.dataIndex;
            }
        });
        columns = extraColumns;
        var originalColumns = (0, lodash_1.differenceWith)(header, extraColumns, function (originalColumn, extraColumn) {
            return (!originalColumn.hidden &&
                originalColumn.data === extraColumn.dataIndex);
        });
        originalColumns.map(function (originalColumn) {
            if (!originalColumn.hidden) {
                columns.push({
                    title: (0, lodash_1.startCase)(originalColumn.title),
                    dataIndex: originalColumn.data,
                });
            }
        });
    }
    else {
        header.map(function (column) {
            if (!column.hidden) {
                if (typeof actions == 'object' &&
                    !(0, lodash_1.isEmpty)(actions) &&
                    actions.dataIndex === column.data) {
                    columns.push({
                        title: (0, lodash_1.startCase)(actions.title),
                        dataIndex: actions.dataIndex,
                        render: actions.render,
                        key: actions.key,
                    });
                }
                else {
                    columns.push({
                        title: (0, lodash_1.startCase)(column.title),
                        dataIndex: column.data,
                    });
                }
            }
        });
    }
    if (!(0, lodash_1.isEmpty)(actions)) {
        if (Array.isArray(actions)) {
            actions.map(function (action) {
                if (!action.extraColumn) {
                    columns.push(action);
                }
            });
        }
        else {
            if (!(actions === null || actions === void 0 ? void 0 : actions.extraColumn)) {
                columns.push(actions);
            }
        }
    }
    return columns;
};
exports.columnCreator = columnCreator;
//# sourceMappingURL=index.js.map