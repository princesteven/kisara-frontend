import DataTable from './datatable';
import { columnCreator } from '@react-frontends/v2/helpers';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: DataTable,
    title: 'DataTable',
} as ComponentMeta<typeof DataTable>;

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


const Template: ComponentStory<typeof DataTable> = (args) => (
    <DataTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  dataSource: dataSource,
  columns: columnCreator(columns)
};
