import "./datatable.css";
import React from "react";
import { Table, TableProps } from "antd";

/**
 * @function
 * @name DataTable
 * @description Layout of each page i.e top nav and side nav
 * @param props.scroll scroll property of the table
 * @version 2.0.1
 * @since 2.0.1
 * @author Prince Malipula
 * @returns Data table
 */

const DataTable: React.FC<TableProps<any>> = ({
                                                rowKey = "id",
                                                scroll = { y: "75vh" },
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
