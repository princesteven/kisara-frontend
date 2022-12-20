import { render } from '@testing-library/react';

import PortalsPopover from './portals-popover';

describe('PortalsPopover', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<PortalsPopover />);
        expect(baseElement).toBeTruthy();
    });
});
