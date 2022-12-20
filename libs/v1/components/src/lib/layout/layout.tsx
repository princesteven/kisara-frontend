import 'antd/dist/antd.css';
import './layout.css';
import { useEffect, useState } from 'react';
import { compact, flattenDeep } from 'lodash';
import { MenuChildren, Menus, User } from './types';
import { useMenuTitle } from "@react-frontends/v1/hooks";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import fallback from '../../../../assets/images/fallback.png';
import { useLocation, Outlet, useNavigate, Link } from 'react-router-dom';
import {
    Layout as AntdLayout,
    Menu,
    Breadcrumb,
    Image,
    Popover,
    Avatar,
    Button,
} from 'antd';

export interface LayoutProps {
    user: User;
    width: number;
    menus: Menus[];
    appName: string;
    logout: () => void;
    changePasswordLink: string;
    postAction: (action: any, values: any) => Promise<any>;
    checkAuthorized: (permissions?: string[] | string) => boolean;
}

/**
 * @function
 * @name Layout
 * @description Layout of each page i.e. top nav and side nav
 * @param props.children Page passed as children
 * @param props.user User Details
 * @param props.appName AppName
 * @param props.width Width of side menu
 * @param props.logout {Function} logout function
 * @param props.changePasswordLink {String} the frontend link to show the change password model
 * @param props.checkAuthorized {Function} the function to check if the user is authorized
 * @param props.postAction {Function} the function to post data
 * @version 0.0.4
 * @since 0.0.1
 * @author Prince Malipula
 * @returns Page Layout
 */
const Layout: React.FC<LayoutProps> = ({
    user,
    width,
    logout,
    appName,
    menus = [],
    postAction,
    checkAuthorized,
    changePasswordLink,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { Header, Content, Sider } = AntdLayout;
    const [collapsed, setCollapsed] = useState(false);
    const { generateMenuTitle } = useMenuTitle(menus, appName);

    const { SubMenu } = Menu

    useEffect(() => {
        if (width <= 900) {
            setCollapsed(false); //change to true if you want the sidenav to change open status
            return;
        }
        setCollapsed(false); //change to false if you want the sidenav to change open status
    }, [width]);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const signOut = () => {
        postAction(logout, []);
    };

    const changePassword = () => {
        navigate(changePasswordLink);
    };

    const signoutContent = (
        <div className="w-60 flex flex-col items-center py-3">
            <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{
                    background:
                        'linear-gradient(to right,#E53935 35%, #E53935 10%, #c9690f 80%, #c9690f 25%)',
                }}
            >
                <div className="bg-white w-20 h-20 rounded-full items-center justify-center">
                    <Avatar src={fallback} className="w-20 h-20" />
                </div>
                <div
                    className="font-semibold text-lg"
                    style={{ color: '#2e2e2e' }}
                >
                    {user?.name}
                </div>
                <span
                    className="font-semibold text-md"
                    style={{ color: '#494949' }}
                >
                    {user?.email}
                </span>
            </div>
            <Button onClick={changePassword} className="py-8" type="link">
                Change Password
            </Button>
            <Button
                shape="round"
                onClick={signOut}
                className="mt-5 px-8"
                type="primary"
            >
                Logout
            </Button>
        </div>
    );

    const renderMenu = menus.map((menu, index) => {
        if (!menu.children) {
            const isAuthorized = checkAuthorized(menu?.permissions);
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
            const permissions = compact(
                flattenDeep(menu.children?.map((child) => child?.permissions))
            );

            const isAuthorized = menu?.permissions
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
                                const isAuthorized = checkAuthorized(
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

    return (
        <HelmetProvider>
            <div className="min-h-full -mb-12">
                <Helmet>
                    <title>{generateMenuTitle()}</title>
                </Helmet>
                <AntdLayout className="min-h-screen h-full">
                    <Sider
                        width={250}
                        trigger={null}
                        collapsible
                        collapsed={collapsed}
                        className="aside bg-gradient-to-t from-nmb-blue-primary to-nmb-blue-secondary min-h-full"
                    >
                        <div className="p-8" />
                        <Menu
                            mode="inline"
                            className="bg-transparent border-r-0"
                            defaultSelectedKeys={[location.pathname]}
                            selectedKeys={[location.pathname]}
                            defaultOpenKeys={[location.pathname]}
                        >
                            {renderMenu}
                        </Menu>
                    </Sider>
                    <AntdLayout className="bg-white">
                        <Header className="bg-gray-100 flex flex-row justify-between">
                            <div className="flex space-x-3">
                                <div
                                    onClick={toggle}
                                    className="text-nmb-blue-primary hover:cursor-pointer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 inline-block align-middle`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </div>
                                <Breadcrumb className="p-6 font-medium">
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <div>
                                <div className="hover:cursor-pointer relative group h-full flex items-center">
                                    <Popover
                                        content={signoutContent}
                                        trigger="click"
                                        placement='bottomLeft'
                                    >
                                        <div className="align-middle w-14 h-14 bg-white rounded-full flex items-center justify-center p-1">
                                            <Image
                                                src={fallback}
                                                className="w-12 h-12 rounded-full inline-block"
                                                preview={false}
                                            />
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                        </Header>
                        <Content className="mx-4 my-2 bg-white min-h-280">
                            <Outlet />
                        </Content>
                    </AntdLayout>
                </AntdLayout>
            </div>
        </HelmetProvider>
    );
};

export default Layout;
