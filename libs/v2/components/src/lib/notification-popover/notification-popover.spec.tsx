import { render } from '@testing-library/react';

import NotificationPopover from './notification-popover';

describe('NotificationPopover', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<NotificationPopover notifications={[]} />);
        expect(baseElement).toBeTruthy();
    });
});
