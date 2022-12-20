import {FormItemProps} from "antd";

export interface ValidationErrors {
  [key: string]: string[];
}

export interface FormItemsProps extends FormItemProps {
  validationErrors: ValidationErrors;
}
