import { render } from '@testing-library/react';

import MenuTitle from './menu-title';

describe('MenuTitle', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<MenuTitle />);
        expect(baseElement).toBeTruthy();
    });
});
