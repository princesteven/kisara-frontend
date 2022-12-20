import { Story, Meta } from '@storybook/react';
import Select, { SelectProps } from './select';

export default {
    component: Select,
    title: 'Select',
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

const data = [
    {
        id: 1,
        name: 'First'
    },
    {
        id: 2,
        name: 'Second'
    },
    {
        id: 3,
        name: 'Third'
    },
]

Primary.args = {
    placeholder: 'Select Something',
    loading: false,
    data: data,

};
