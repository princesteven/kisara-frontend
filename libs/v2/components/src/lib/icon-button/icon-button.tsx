import 'antd/dist/antd.css';
import './icon-button.css';
import React from 'react';
import {Button} from "antd";
import {IconButtonProps} from "./icon-button-types";

/**
 * @function
 * @name IconButton
 * @description A custom icon button for with onClick actions
 * @version 2.0.0
 * @since 2.0.0
 * @author Erick Kondela
 * @author Prince Malipula
 * @param icon React Node icon component from AntD icons library
 * @param onClick Reference to an action on clicking a button
 * @param style Custom JSX Object style
 * @param className custom css class name
 * @returns IconButton
 */

export const IconButton: React.FC<IconButtonProps> = ({icon, onClick, style, className}) => {
  return (
    <Button
      icon={icon}
      className={`custom-button default-icon-button ${className}`}
      style={style} onClick={onClick}
    />
  );
}

export default IconButton;
