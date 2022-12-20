import { render } from '@testing-library/react';

import ProfilePopover from './profile-popover';

describe('ProfilePopover', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ProfilePopover
          name={'Prince Malipula'}
          username={'prince.malipula'}
        />);
        expect(baseElement).toBeTruthy();
    });
});
