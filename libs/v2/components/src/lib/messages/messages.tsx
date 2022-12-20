import {notification} from "antd";

/**
 * @function
 * @name messages
 * @description component for displaying messages
 * @version 2.0.1
 * @since 2.0.1
 * @returns message component
 */

export const messages = (
  type: 'success' | 'error' | 'info' | 'warning',
  description: string,
  duration?: number,
  preserve = false,
  placement: 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' = 'bottomLeft'
) => {
  notification[type]({
    message: null,
    description: description,
    duration: preserve ? 0 : (duration || 5),
    placement: placement
  });
};
