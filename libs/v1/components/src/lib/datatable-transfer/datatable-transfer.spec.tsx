import { render } from '@testing-library/react';

import DatatableTransfer from './datatable-transfer';

describe('DatatableTransfer', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<DatatableTransfer />);
        expect(baseElement).toBeTruthy();
    });
});
