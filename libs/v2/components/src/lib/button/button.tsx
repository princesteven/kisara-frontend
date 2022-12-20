import 'antd/dist/antd.css';
import './button.css';
import { FC } from 'react';
import { Button as AntButton } from 'antd';
import {ButtonProps} from "./button-types";

/**
 * @function
 * @name Button
 * @description A custom button for with onClick actions
 * @version 2.0.0
 * @since 2.0.0
 * @author Erick Kondela
 * @author Prince Malipula
 * @param title a button title
 * @param onClick Reference to an action on clicking a button
 * @param size Size of a button i.e large, small (Default is medium)
 * @param shape Shape of a button i.e round (Default is normal)
 * @param type Type of a button i.e success, danger, warning, primary, outlined, outlined-primary, outlined-danger, outlined-warning, outlined-success (Default is primary)
 * @param style Custom JSX Object style
 * @param className custom css class name
 * @param icon React Node for button icon
 * @returns Button
 */

const Button: FC<ButtonProps> = ({
                                   title,
                                   shape,
                                   type,
                                   size,
                                   icon,
                                   style,
                                   className,
                                   onClick
}) => {
  return (
    <AntButton
      shape={shape}
      onClick={onClick}
      size={size}
      icon={icon}
      style={style}
      className={`custom-button ${ type } ${ className }`}
    >
      {title}
    </AntButton>
  )
}

Button.defaultProps = {
  type: "primary",
  shape: "round",
  size: "large",
}

export default Button;
