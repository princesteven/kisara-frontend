import { ComponentStory, Meta } from '@storybook/react';
import PortalsPopover from './portals-popover';

export default {
    component: PortalsPopover,
    title: 'PortalsPopover',
} as Meta;

const Template: ComponentStory<typeof PortalsPopover> = () => (
    <PortalsPopover />
);

export const Primary = Template.bind({});
Primary.args = {};
