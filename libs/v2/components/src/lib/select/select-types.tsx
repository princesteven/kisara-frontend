import {SelectProps as AntSelectProps} from "antd/lib/select";

interface LabeledValue {
  value: string | number;
  label: string;
  key: string | number;
}

interface SelectData {
  id: any;
  name: string;
}

export interface SelectProps extends AntSelectProps<any> {
  data: SelectData[];
  loading: boolean;
  children?: React.ReactNode;
  defaultValue?: LabeledValue;
}
