import { TransferProps } from 'antd';
import React from 'react';
import TableTransfer from '../table-transfer/table-transfer';

export interface Transfer extends TransferProps<any> {
    leftTableColumns: any;
    rightTableColumns: any;
}

/**
 * @function
 * @name DataTableTransfer
 * @description Select data by transfer from left to right
 * @param props.dataSource {Object[]} value that has the data
 * @param props.leftTableColumns Column names for the left table eg. ['name', 'description']
 * @param props.rightTableColumns Column names for the right table eg. ['name', 'description']
 * @param props.titles Title for source and target data
 * @param props.onChange {Function} function to be invoked whenever transfer of data occurs
 * @param props.targetKeys Identifiers of the dataSource at the target area (right column) eg ['1', '2']
 * @version 0.0.2
 * @since 0.0.1
 * @author Prince Malipula
 * @returns Table transfer component
 */

const DataTableTransfer: React.FC<Transfer> = ({
    leftTableColumns,
    rightTableColumns,
    ...props
}) => {
    return (
        <TableTransfer
            {...props}
            showSearch
            filterOption={(inputValue, item) =>
                item.name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
            }
            leftColumns={leftTableColumns}
            rightColumns={rightTableColumns}
            rowKey={(record) => record.id}
        />
    );
};

export default DataTableTransfer;
