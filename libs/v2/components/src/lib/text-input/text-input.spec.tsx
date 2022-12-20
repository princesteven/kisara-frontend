import { render } from '@testing-library/react';

import TextInput from './text-input';

describe('TextInput', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
          <TextInput
            type={'text'}
            placeholder={'Testing Test'}
            name={'Testing'}
          />
        );
        expect(baseElement).toBeTruthy();
    });
});
