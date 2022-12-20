import styles from './pop-confirm.module.css';
import { Popconfirm, PopconfirmProps } from 'antd';

/* eslint-disable-next-line */
export interface CustomPopConfirmProps {
    confirmMethod: () => void;
    cancelMethod?: () => void;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    cancelText?: string;
    okText?: string;
    title?: string;
    okButtonProps?: any;
    cancelButtonProps?: any;
}

/**
 * @function
 * @name PopConfirm
 * @description A confirmation for sensitive actions such as delete or approve etc.
 * @version 0.0.3
 * @since 0.0.1
 * @author Prince Malipula
 * @param props.confirmMethod function to be called when user clicks yes (confirm message)
 * @returns Pop Confirm for options that needs confirmation
 */
const CustomPopConfirm: React.FC<CustomPopConfirmProps> = ({
    title = 'Are you Sure?',
    okText = 'Yes',
    cancelText = 'Cancel',
    confirmMethod,
    cancelMethod,
    children,
    okButtonProps,
    cancelButtonProps,
    icon
}) => {
    return (
        <Popconfirm
            title={title}
            okText={okText}
            cancelText={cancelText}
            onConfirm={confirmMethod}
            onCancel={cancelMethod}
            okButtonProps={okButtonProps}
            cancelButtonProps={cancelButtonProps}
            icon={icon}
        >
            {children}
        </Popconfirm>
    );
};

export default CustomPopConfirm;
