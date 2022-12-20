import DataTable from './datatable';
import { TableProps } from 'antd';
import { Story, Meta } from '@storybook/react';
import { acolumCreator } from "@react-frontends/v1/helpers";

export default {
    component: DataTable,
    title: 'Datatable',
} as Meta;

const dataSource = [
    {
        id: 1,
        name: 'John Doe',
        username: 'john.doe',
        email: 'john.doe@nmbtz.com',
    },
    {
        id: 2,
        name: 'Jane Doe',
        username: 'jane.doe',
        email: 'jane.doe@nmbtz.com',
    },
    {
        id: 3,
        name: 'John Doe',
        username: 'john.doe',
        email: 'john.doe@nmbtz.com',
    },
    {
        id: 4,
        name: 'Jane Doe',
        username: 'jane.doe',
        email: 'jane.doe@nmbtz.com',
    },
    {
        id: 5,
        name: 'John Doe',
        username: 'john.doe',
        email: 'john.doe@nmbtz.com',
    },
    {
        id: 6,
        name: 'Jane Doe',
        username: 'jane.doe',
        email: 'jane.doe@nmbtz.com',
    },
]

const columns = [
    {
        data: 'id',
        title: 'Id',
        hidden: true,
    },
    {
        data: 'name',
        title: 'Name',
        hidden: false,
    },
    {
        data: 'username',
        title: 'Username',
        hidden: false,
    },
    {
        data: 'email',
        title: 'Email',
        hidden: false,
    },
]

const Template: Story<TableProps<any>> = (args) => <DataTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    dataSource: dataSource,
    columns: acolumCreator(columns)
};
