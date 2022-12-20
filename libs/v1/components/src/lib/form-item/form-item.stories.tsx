import { Input } from 'antd';
import { Story, Meta } from '@storybook/react';
import FormItem, { FormItemsProps } from './form-item';

export default {
    component: FormItem,
    title: 'FormItem',
} as Meta;

const Template: Story<FormItemsProps> = (args) => (
    <FormItem {...args}>
        <Input placeholder="ApplicableCharge Name" />
    </FormItem>
);

export const Primary = Template.bind({});
Primary.args = {
    name: 'name',
    rules: [{ required: true }],
    label: 'Name',
    validationErrors: {
        name: ['Name is required. This is from backend'],
    },
};
