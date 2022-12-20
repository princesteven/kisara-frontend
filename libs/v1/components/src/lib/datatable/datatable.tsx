import './datatable.css';
import React from 'react';
import { Table, TableProps } from 'antd';

/**
 * @function
 * @name DataTable
 * @description Layout of each page i.e top nav and side nav
 * @param props any props from antd table props
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns Page Layout
 */
const DataTable: React.FC<TableProps<any>> = ({
    rowKey = 'id',
    scroll = { y: 450 },
    ...props
}) => {
    return (
        <Table
            {...props}
            rowKey={rowKey}
            scroll={scroll}
            className={`${props.className} data-table`}
        />
    );
};

export default DataTable;
