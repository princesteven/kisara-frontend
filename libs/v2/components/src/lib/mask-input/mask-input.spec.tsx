import { render } from '@testing-library/react';

import MaskInput from './mask-input';

describe('MaskInput', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<MaskInput pattern={'xxxx-xxxx-xxxx'} />);
        expect(baseElement).toBeTruthy();
    });
});
