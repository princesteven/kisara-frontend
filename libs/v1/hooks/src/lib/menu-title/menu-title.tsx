import styles from './menu-title.module.css';
import { useEffect, useState } from 'react';
import { compact, flattenDeep } from 'lodash';
import { useLocation } from 'react-router-dom';
import { ucfirst } from '@react-frontends/v1/helpers';
import { Menus } from 'libs/v1/components/src/lib/layout/types';

/**
 * @function
 * @name MenuTitle
 * @description Creates a title for the page
 * @author Prince Malipula
 * @version 0.0.1
 * @since 0.0.1
 * @returns {string} Menu Title
 */
const useMenuTitle = (menus: Menus[], appName: string) => {
    const location = useLocation();
    const [titleSection, setTitleSection] = useState<string>();

    useEffect(() => {
        let title =
            (menus.find((menu) => menu.link === location.pathname)?.name &&
                menus.find((menu) => menu.link === location.pathname)?.name) ||
            (compact(flattenDeep(menus.map((menu) => menu.children))).find(
                (menu) => menu.link === location.pathname
            )?.name &&
                compact(flattenDeep(menus.map((menu) => menu.children))).find(
                    (menu) => menu.link === location.pathname
                )?.name) ||
            ucfirst(location.pathname.split('/')?.[1]);
        setTitleSection(title);
    }, [location.pathname]);

    const generateMenuTitle = () => {
        return `${titleSection} | ${appName}`;
    };

    return { generateMenuTitle };
};

export default useMenuTitle;
