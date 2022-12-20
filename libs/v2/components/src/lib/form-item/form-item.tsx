import {Form} from "antd";
import {FormItemsProps} from "./form-item-types";

/**
 * @function
 * @name FormItem
 * @description Implement form item that accomodates backend validation
 * @version 2.1.0
 * @since 2.1.0
 * @author Prince Malipula
 * @returns Form Item with backend validation
 */

const FormItem: React.FC<FormItemsProps> = ({
                                              validationErrors,
                                              children,
                                              ...props
                                            }) => {
  return (
    <Form.Item
      {...props}
      validateStatus={validationErrors?.[`${props.name}`] && 'error'}
      extra={
        <div>
          {validationErrors?.[`${props.name}`] &&
            validationErrors?.[`${props.name}`].map((error) => (
              <div className="text-red-500">{error}</div>
            ))}
        </div>
      }
    >
      {children}
    </Form.Item>
  );
};

export default FormItem;
