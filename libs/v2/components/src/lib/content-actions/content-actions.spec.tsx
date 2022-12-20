import { render } from '@testing-library/react';

import ContentActions from './content-actions';

describe('ContentActions', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ContentActions />);
        expect(baseElement).toBeTruthy();
    });
});
