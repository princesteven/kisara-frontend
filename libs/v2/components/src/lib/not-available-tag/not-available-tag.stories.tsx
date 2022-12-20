import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotAvailableTag } from './not-available-tag';

export default {
    component: NotAvailableTag,
    title: 'NotAvailableTag',
} as ComponentMeta<typeof NotAvailableTag>;

const Template: ComponentStory<typeof NotAvailableTag> = (args) => (
    <NotAvailableTag {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
