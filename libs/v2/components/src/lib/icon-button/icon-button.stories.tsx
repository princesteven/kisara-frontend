import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from './icon-button';

export default {
    component: IconButton,
    title: 'IconButton',
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
    <IconButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
