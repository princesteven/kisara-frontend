import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { compact, flattenDeep } from 'lodash';
import {
    MenuChildren,
    Menus,
} from '../../../../components/src/lib/layout/types';

export const renderMenu = (
    menus: Menus[],
    checkAuthorized: (permissions?: string | string[]) => boolean
) => {
    const { SubMenu } = Menu;

    return menus.map((menu, index) => {
        if (!menu.children) {
            let isAuthorized = checkAuthorized(menu?.permissions);
            return (
                isAuthorized && (
                    <Menu.Item
                        key={menu.link}
                        icon={menu.icon}
                        className="menu-item"
                    >
                        <Link
                            to={`${menu.link}`}
                            key={`menu-${index}`}
                            className="menu-link"
                        >
                            {menu.name}
                        </Link>
                    </Menu.Item>
                )
            );
        } else {
            let permissions = compact(
                flattenDeep(menu.children?.map((child) => child?.permissions))
            );

            let isAuthorized = menu?.permissions
                ? checkAuthorized(menu?.permissions)
                : checkAuthorized(permissions);

            return (
                isAuthorized && (
                    <SubMenu
                        key={`submenu-${index}`}
                        icon={menu.icon}
                        title={menu.name}
                        className="text-white submenu"
                        popupClassName="ant-menu-dark"
                    >
                        {menu.children.map(
                            (child: MenuChildren, index: number) => {
                                let isAuthorized = checkAuthorized(
                                    child?.permissions
                                );
                                return (
                                    isAuthorized && (
                                        <Menu.Item
                                            key={child.link}
                                            className="submenu-item"
                                        >
                                            <Link
                                                to={child.link}
                                                key={`${child.link}_${index}`}
                                                className="block"
                                            >
                                                {child.name}
                                            </Link>
                                        </Menu.Item>
                                    )
                                );
                            }
                        )}
                    </SubMenu>
                )
            );
        }
    });
};
