import React from 'react';
import { Link as NavLink, LinkProps } from 'react-router-dom';

/**
 * @function
 * @name Link
 * @description Link for navigating through the layout
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @param props Any properties
 * @returns Link Tag for navigation
 */

const Link = (props: LinkProps) => {
    return <NavLink {...props} />;
};

export default Link;
