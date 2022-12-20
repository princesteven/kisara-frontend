import { default as MaskInput } from './mask-input';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: MaskInput,
    title: 'MaskInput',
} as ComponentMeta<typeof MaskInput>;

const Template: ComponentStory<typeof MaskInput> = (args) => (
    <MaskInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  pattern: 'xxxx-xxxx-xxx-xxxx',
  separator: '-'
};
