import styles from './select.module.css';
import { isEmpty } from 'lodash';
import {
    Spin,
    Empty,
    Select as AntdSelect,
    SelectProps as AntSelectProps,
} from 'antd';
import Loading from '../loading/loading';

interface LabeledValue {
    value: string | number;
    label: string;
    key: string | number;
}

interface SelectData {
    id: number | string;
    name: string;
}

export interface SelectProps extends AntSelectProps<any> {
    data: SelectData[];
    loading: boolean;
    children?: React.ReactNode;
    defaultValue?: LabeledValue;
}

/**
 * @function
 * @name Select
 * @description Custom Select component with search and filter
 * @param props.data The data to pass in array
 * @version 0.0.2
 * @since 0.0.1
 * @author Prince Malipula
 */
const Select: React.FC<SelectProps> = ({
    data,
    children,
    loading = false,
    defaultValue = {},
    ...props
}) => {
    return (
        <AntdSelect
            {...props}
            showSearch
            filterOption={(input: string, option: any) =>
                option?.children &&
                option?.children
                    .toString()
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
            }
            notFoundContent={loading ? <Loading /> : <Empty />}
        >
            {defaultValue.value &&
                isEmpty(
                    data.find((datum) => datum.id === defaultValue.value)
                ) && (
                    <AntdSelect.Option value={defaultValue.value}>
                        {defaultValue.label}
                    </AntdSelect.Option>
                )}
            {!children
                ? data.map((data, index) => (
                      <AntdSelect.Option
                          value={data.id}
                          key={`select-${index}`}
                      >
                          {data.name}
                      </AntdSelect.Option>
                  ))
                : children}
        </AntdSelect>
    );
};

export default Select;
