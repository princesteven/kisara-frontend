import Link from './link';
import { Story, Meta } from '@storybook/react';
import { LinkProps, MemoryRouter } from 'react-router-dom';

export default {
    component: Link,
    title: 'Link',
} as Meta;

const Template: Story<LinkProps> = (args) => (
    <MemoryRouter initialEntries={['/']}>
        <Link {...args} />
    </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
    to: '/',
};
