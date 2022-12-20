import { render } from '@testing-library/react';

import NotAvailableTag from './not-available-tag';

describe('NotAvailableTag', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<NotAvailableTag />);
        expect(baseElement).toBeTruthy();
    });
});
