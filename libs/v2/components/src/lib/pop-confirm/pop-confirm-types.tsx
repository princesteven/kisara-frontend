import { TooltipPlacement } from "antd/es/tooltip";

export interface PopConfirmProps {
  confirmMethod: () => void;
  cancelMethod?: () => void;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  cancelText?: string;
  okText?: string;
  title?: string;
  okButtonProps?: any;
  cancelButtonProps?: any;
  placement?: TooltipPlacement;
}
