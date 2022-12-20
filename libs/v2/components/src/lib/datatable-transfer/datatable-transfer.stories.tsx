import DatatableTransfer from './datatable-transfer';
import {acolumCreator} from "../../../../../v1/helpers/src";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: DatatableTransfer,
    title: 'DatatableTransfer',
} as ComponentMeta<typeof DatatableTransfer>;

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

let targetKeys = [1, 2, 3];

const onChange = (value: any) => {
  targetKeys = value
}

const titles = ['Available Users', 'Selected Users']

const Template: ComponentStory<typeof DatatableTransfer> = (args) => (
    <DatatableTransfer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  dataSource: dataSource,
  leftTableColumns: acolumCreator(columns),
  rightTableColumns: acolumCreator(columns),
  titles: titles,
  onChange: onChange,
  // @ts-ignore
  targetKeys: targetKeys
};
