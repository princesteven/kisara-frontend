import { render } from '@testing-library/react';

import PopConfirm from './pop-confirm';

describe('PopConfirm', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<PopConfirm />);
        expect(baseElement).toBeTruthy();
    });
});
