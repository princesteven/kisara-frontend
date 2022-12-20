import Select from './select';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: Select,
    title: 'Select',
} as ComponentMeta<typeof Select>;

const data = [
  {
    id: 1,
    name: 'First'
  },
  {
    id: 2,
    name: 'Second'
  },
  {
    id: 3,
    name: 'Third'
  },
]


const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Select Something',
  loading: false,
  data: data,

};
