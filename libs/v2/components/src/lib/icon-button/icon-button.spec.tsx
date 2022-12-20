import { render } from '@testing-library/react';
import {CheckOutlined} from "@ant-design/icons";


import IconButton from './icon-button';

const click = () => {
  alert('Clicked');
}

describe('IconButton', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<IconButton icon={<CheckOutlined />} onClick={click} />);
        expect(baseElement).toBeTruthy();
    });
});
