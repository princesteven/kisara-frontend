import {Popconfirm as AntdPopConfirm} from "antd";
import {PopConfirmProps} from "./pop-confirm-types";

/**
 * @function
 * @name PopConfirm
 * @description A confirmation for sensitive actions such as delete or approve etc.
 * @version 2.0.4
 * @since 2.0.1
 * @author Prince Malipula
 * @param props.confirmMethod function to be called when user clicks yes (confirm message)
 * @returns Pop Confirm for options that needs confirmation
 */

const PopConfirm: React.FC<PopConfirmProps> = ({
                                                 title = 'Are you Sure?',
                                                 okText = 'Yes',
                                                 cancelText = 'Cancel',
                                                 confirmMethod,
                                                 cancelMethod,
                                                 children,
                                                 okButtonProps,
                                                 cancelButtonProps,
                                                 icon,
                                                 placement = 'left'
                                               }) => {
  return (
    <AntdPopConfirm
      title={title}
      okText={okText}
      cancelText={cancelText}
      onConfirm={confirmMethod}
      onCancel={cancelMethod}
      okButtonProps={okButtonProps}
      cancelButtonProps={cancelButtonProps}
      icon={icon}
      placement={placement}
    >
      {children}
    </AntdPopConfirm>
  );
};

export default PopConfirm;
