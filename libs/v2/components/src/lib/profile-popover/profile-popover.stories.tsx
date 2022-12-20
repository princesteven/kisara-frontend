import { ComponentStory, Meta } from '@storybook/react';
import ProfilePopOver from './profile-popover';

export default {
    component: ProfilePopOver,
    title: 'ProfilePopOver',
} as Meta;

const Template: ComponentStory<typeof ProfilePopOver> = (args) => (
    <ProfilePopOver {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'Prince Malipula',
  username: 'prince.malipula'
};
