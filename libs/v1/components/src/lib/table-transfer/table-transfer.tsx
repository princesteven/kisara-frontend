import difference from 'lodash/difference';
import { Transfer, TransferProps } from 'antd';
import { DataTable } from '@react-frontends/v1/components';

interface TableTransferProps extends TransferProps<any> {
    leftColumns: any;
    rightColumns: any;
}

/**
 * @function
 * @name TableTransfer
 * @description Layout of each page i.e top nav and side nav
 * @param props.leftColumns Left columns, which have column type
 * @param props.rightColumns Rigth columns, which have column type
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns TableTransfer
 */
const TableTransfer: React.FC<TableTransferProps> = ({
    leftColumns,
    rightColumns,
    ...restProps
}) => {
    return (
        <Transfer {...restProps} showSelectAll={false}>
            {({
                direction,
                filteredItems,
                onItemSelectAll,
                onItemSelect,
                selectedKeys: listSelectedKeys,
            }) => {
                const columns =
                    direction === 'left' ? leftColumns : rightColumns;
                const rowSelection = {
                    onSelectAll(
                        selected: boolean,
                        selectedRows: { id: string }[]
                    ) {
                        const treeSelectedKeys = selectedRows.map(
                            ({ id }) => id
                        );
                        const diffKeys = selected
                            ? difference(treeSelectedKeys, listSelectedKeys)
                            : difference(listSelectedKeys, treeSelectedKeys);
                        onItemSelectAll(diffKeys, selected);
                    },
                    onSelect({ id }: { id: string }, selected: boolean) {
                        onItemSelect(id, selected);
                    },
                    selectedRowKeys: listSelectedKeys,
                };

                return (
                    <DataTable
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={filteredItems}
                        loading={false}
                        className="data-table"
                        onRow={({ id }) => ({
                            onClick: () => {
                                onItemSelect(
                                    id,
                                    !listSelectedKeys.includes(id)
                                );
                            },
                        })}
                    />
                );
            }}
        </Transfer>
    );
};

export default TableTransfer;
