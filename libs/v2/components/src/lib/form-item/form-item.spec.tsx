import { render } from '@testing-library/react';

import FormItem from './form-item';
import {Input} from "antd";

describe('FormItem', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
          <FormItem
            name={'name'}
            rules={[
              {
                required: true
              }
            ]}
            validationErrors={{
              name: ['Name is required. This is from backend']
            }}
          >
            <Input placeholder="ApplicableCharge Name" />
          </FormItem>
        );
        expect(baseElement).toBeTruthy();
    });
});
