import { render } from '@testing-library/react';

import V1Hooks from './v1-hooks';

describe('V1Hooks', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<V1Hooks />);
        expect(baseElement).toBeTruthy();
    });
});
