import { Story, Meta } from '@storybook/react';
import { V1Components, V1ComponentsProps } from './v1-components';

export default {
    component: V1Components,
    title: 'V1Components',
} as Meta;

const Template: Story<V1ComponentsProps> = (args) => <V1Components {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
