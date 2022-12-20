import {render} from '@testing-library/react';

import Layout from './layout';

describe('Layout', () => {
  it('should render successfully', () => {
    const {baseElement} = render(<Layout
      title={'Test Title'}
      user={{
        username: 'prince.malipula',
        name: 'Prince Malipula',
        email: 'prince.malipula@nmbtz.com'
      }}
      signOutUrl={'ms-portal.nmbtz.com'}
      menus={[]}
    />);
    expect(baseElement).toBeTruthy();
  });
});
