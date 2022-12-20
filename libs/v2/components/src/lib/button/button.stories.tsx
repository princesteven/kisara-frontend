import Button from './button';
import {ButtonProps} from "./button-types";
import {Meta, Story} from '@storybook/react';
import {CheckOutlined} from "@ant-design/icons";

export default {
    component: Button,
    title: 'Button',
} as Meta;

const Template:Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test',
  type: 'primary',
  shape: 'round',
  size: 'small',
  icon: <CheckOutlined />,
};
