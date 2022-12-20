import { isEmpty } from 'lodash';
import {SelectProps} from "./select-types";
import {Empty, Select as AntdSelect} from "antd";
import { Loader } from "@react-frontends/v2/components";

/**
 * @function
 * @name Select
 * @description Custom Select component with search and filter
 * @param props.data The data to pass in array
 * @version 2.0.2
 * @since 2.0.1
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
      notFoundContent={loading ? <Loader /> : <Empty />}
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
