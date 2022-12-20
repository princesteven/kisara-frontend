import { ComponentStory, ComponentMeta } from '@storybook/react';
import { messages } from './messages';
import { Button } from "../../index";
import {CheckOutlined} from "@ant-design/icons";

export default {
    component: Button,
    title: 'Messages',
} as ComponentMeta<typeof Button>;

const showMessage = () => {
  messages('success', 'It works!')
}

const Template: ComponentStory<typeof Button> = (args) => (
  <Button
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Click Me',
  type: 'primary',
  shape: 'round',
  size: 'small',
  icon: <CheckOutlined />,
  onClick: showMessage
};
