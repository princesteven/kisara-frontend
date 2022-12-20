import { render } from '@testing-library/react';

import V1Components from './v1-components';

describe('V1Components', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<V1Components />);
        expect(baseElement).toBeTruthy();
    });
});
