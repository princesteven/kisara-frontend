import Loading from './loading';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: Loading,
    title: 'Loading',
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
    <Loading />
);

export const Primary = Template.bind({});
Primary.args = {};
