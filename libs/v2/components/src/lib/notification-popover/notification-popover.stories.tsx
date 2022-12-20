import { ComponentStory, Meta } from '@storybook/react';
import NotificationPopover from './notification-popover';

export default {
    component: NotificationPopover,
    title: 'NotificationPopover',
} as Meta;

const Template: ComponentStory<typeof NotificationPopover> = (args) => (
    <NotificationPopover {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  notifications: [
    {
      title: 'Hello',
    }
  ]
};
