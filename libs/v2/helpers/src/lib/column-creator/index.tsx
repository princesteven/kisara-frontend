import {
  isEmpty,
  startCase,
  differenceWith,
  intersectionWith
} from 'lodash';

interface actionsParam {
    dataIndex?: string;
    title?: string;
    render?: any;
    key?: string | number;
    extraColumn?: boolean;
}

interface Columns {
    data: string;
    title: string;
    hidden?: boolean;
}

/**
 * Create columns for antd table. Receives an array of headers and actions.
 * @param header The headers of the table eg [{title: '', data: ''}]
 * @param actions the actions such as edit, add etc
 * @returns Columns for antd
 */

export const columnCreator = (header: Columns[] = [], actions: actionsParam = {}) => {
    let columns: actionsParam[] = [];
    if (Array.isArray(actions) && !isEmpty(actions)) {
        const extraColumns = intersectionWith(
            actions,
            header,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (extraColumn: any, originalColumn: any) => {
                if (!originalColumn.hidden) {
                    return originalColumn.data === extraColumn.dataIndex;
                }
            }
        );
        columns = extraColumns;
        const originalColumns = differenceWith(
            header,
            extraColumns,
            (originalColumn: Columns, extraColumn: actionsParam) => {
                return (
                    !originalColumn.hidden &&
                    originalColumn.data === extraColumn.dataIndex
                );
            }
        );

        originalColumns.map((originalColumn) => {
            if (!originalColumn.hidden) {
                columns.push({
                    title: startCase(originalColumn.title),
                    dataIndex: originalColumn.data,
                });
            }
        });
    } else {
        header.map((column: Columns) => {
            if (!column.hidden) {
                if (
                    typeof actions == 'object' &&
                    !isEmpty(actions) &&
                    actions.dataIndex === column.data
                ) {
                    columns.push({
                        title: startCase(actions.title),
                        dataIndex: actions.dataIndex,
                        render: actions.render,
                        key: actions.key,
                    });
                } else {
                    columns.push({
                        title: startCase(column.title),
                        dataIndex: column.data,
                    });
                }
            }
        });
    }
    if (!isEmpty(actions)) {
        if (Array.isArray(actions)) {
            actions.map((action) => {
                if (!action.extraColumn) {
                    columns.push(action);
                }
            });
        } else {
            if (!actions?.extraColumn) {
                columns.push(actions);
            }
        }
    }
    return columns;
};
