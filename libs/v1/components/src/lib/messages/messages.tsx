import styles from './messages.module.css';
import { notification } from 'antd';

/* eslint-disable-next-line */
export interface MessagesProps {}

/**
 * @function
 * @name messages
 * @description component for displaying messages
 * @param type {String} The message type. Could be info, success, error etc.
 * @param description {String} The body of the message
 * @version 0.0.1
 * @since 0.0.1
 * @returns message component
 */
export const messages = (
    type: 'success' | 'error' | 'info' | 'warning',
    description: string,
    duration?: number,
    preserve: boolean = false,
    placement: 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' = 'topRight'
) => {
    notification[type]({
        message: null,
        description: description,
        duration: preserve ? 0 : (duration || 5),
        placement: placement
    });
};
