import FormItem from './form-item';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Input} from "antd";

export default {
    component: FormItem,
    title: 'FormItem',
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args) => (
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
