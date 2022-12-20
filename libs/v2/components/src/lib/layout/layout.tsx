import "antd/dist/antd.css";
import "./layout.css";
import compact from "lodash/compact";
import { useEffect, useState } from "react";
import { LayoutProps } from "./layout-types";
import flattenDeep from "lodash/flattenDeep";
import IconButton from "../icon-button/icon-button";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ProfilePopOver from "../profile-popover/profile-popover";
import PortalsPopover from "../portals-popover/portals-popover";
import { useWindowDimensions } from "@react-frontends/v2/hooks";
import { AppstoreFilled, BulbFilled, BulbOutlined } from "@ant-design/icons";
import { Layout as AntdLayout, Menu, Avatar, Row, Col, Popover } from "antd";
import { checkAuthorized, userIdentifier } from "@react-frontends/v2/helpers";
import NotificationPopover from "../notification-popover/notification-popover";
import { Notification } from "../notification-popover/notification-popover-types";

/**
 * @function
 * @name Layout
 * @description Layout of each page i.e top nav and side nav
 * @param portalLogo Logo of a particular portal
 * @version 1.3.0
 * @since 1.0.0
 * @author Erick Kondela
 * @author Prince Malipula
 * @returns Page Layout
 */

const { SubMenu } = Menu;
const { Header, Content, Sider } = AntdLayout;

export const Layout: React.FC<LayoutProps> = ({
                                                user,
                                                logo,
                                                title,
                                                signOutUrl,
                                                menus,
                                                version
                                              }) => {
  const location = useLocation();
  const {width} = useWindowDimensions()
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (width <= 900) {
      setCollapsed(true);
      return;
    }
    setCollapsed(false);
  }, [width]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const signOut = () => {
    document.location.href = signOutUrl;
  };

  const notifications: Notification[] = !user?.userGroups ? [] : user.userGroups.map((userGroup) => {
    return {
      title: userGroup.name
    }
  });

  const renderMenu = menus.map((menu, index) => {
    if (!menu.children) {
      return checkAuthorized(menu.permissions, user.permissions) && (
        <Menu.Item key={menu.link} icon={menu.icon} className="menu-item">
          <Link
            to={menu.link!}
            key={index}
            className="menu-link"
          >
            {menu.name}
          </Link>
        </Menu.Item>
      );
    } else {
      const permissions = compact(
        flattenDeep(menu.children.map((child) => child?.permissions))
      );

      return (
        menu?.permissions ? checkAuthorized(menu.permissions, user.permissions) : checkAuthorized(permissions, user.permissions) && (
          <SubMenu
            key={index}
            icon={menu.icon}
            title={menu.name}
            className="text-white submenu"
            popupClassName="ant-menu-dark"
          >
            {menu.children.map(
              (child: { link: string; name: string, permissions?: string[] }, index: number) => (
                checkAuthorized(child?.permissions, user.permissions) &&
                <Menu.Item key={child.link} className="submenu-item">
                  <Link
                    to={child.link}
                    key={`${child.link}_${index}`}
                    className="block"
                  >
                    {child.name}
                  </Link>
                </Menu.Item>
              )
            )}
          </SubMenu>
        )
      );
    }
    // return !menu.children ? (
    //   <Menu.Item key={menu.link} icon={menu.icon} className="menu-item">
    //     <Link
    //       to={menu.link!}
    //       key={index}
    //       className="menu-link"
    //     >
    //       {menu.name}
    //     </Link>
    //   </Menu.Item>
    // ) : (
    //   <SubMenu
    //     key={index}
    //     icon={menu.icon}
    //     title={menu.name}
    //     className="text-white submenu"
    //     popupClassName="ant-menu-dark"
    //   >
    //     {menu.children.map(
    //       (child: { link: string; name: string }, index: number) => (
    //         <Menu.Item key={child.link} className="submenu-item">
    //           <Link
    //             to={child.link}
    //             key={`${child.link}_${index}`}
    //             className="block"
    //           >
    //             {child.name}
    //           </Link>
    //         </Menu.Item>
    //       )
    //     )}
    //   </SubMenu>
    // );
  });

  return (
    <HelmetProvider>
      <div className="min-h-full -mb-12">
        <Helmet>
          <title>{title}</title>
          <link
            rel="shortcut icon"
            href="../../../../assets/images/favicon.ico"
            type="image/x-icon"
          />
        </Helmet>
        <AntdLayout className="min-h-screen h-full">
          <Sider
            width={268}
            trigger={null}
            collapsible
            collapsed={collapsed}
            className="aside bg-gradient-to-t min-h-full from-nmb-blue-primary"
            style={{
              overflow: "auto",
              height: "100vh",
              left: 0,
              bottom: 0,
              position: "fixed"
            }}
          >
            <div className="h-full flex flex-col justify-between">

              <div>
                <div className="portal-logo-container">
                  <div
                    className="portal-logo"
                    style={{
                      backgroundImage: `url(${logo})`
                    }}
                  />
                  {
                    !collapsed && <span>{title}</span>
                  }
                </div>
                <Menu
                  mode="inline"
                  className="bg-transparent border-r-0"
                  defaultSelectedKeys={[location.pathname]}
                  selectedKeys={[location.pathname]}
                  defaultOpenKeys={[location.pathname]}
                >
                  {renderMenu}
                </Menu>
              </div>
              <div>
                <p className="mt-20 text-white text-center w-full">
                  {!collapsed && 'Version'} {`
                ${version.major}.
                ${version.minor}.
                ${version.fix}
                `}
                </p>
              </div>
            </div>
          </Sider>
          <AntdLayout className={`bg-white ${collapsed ? 'ml-16' : 'ml-64'}`}>
            <Header className={"layout-header"}>
              <Row>
                <Col
                  span={19}
                  className={"layout-header-left-content"}
                >
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
                    <div className="title-holder">
                      <span>
                          {location.pathname.substr(1).length
                            ? location.pathname
                              .split("/")[1]
                              .replace("-", " ")
                            : "Dashboard"}
                      </span>
                      <div className={"underline"} />
                    </div>
                  </div>
                </Col>
                <Col
                  span={5}
                  className={"layout-header-right-content"}
                >
                  <Popover
                    placement="bottomRight"
                    content={
                      <NotificationPopover
                        notifications={notifications}
                        defaultMessage={'No User Groups Assigned To The User'}
                      />
                    }
                    trigger="click"
                  >
                    <div
                      className={
                        'notification-icon-container'
                      }
                      style={{marginRight: 16}}
                    >
                      <IconButton
                        icon={
                          notifications.length ? (
                            <BulbFilled/>
                          ) : (
                            <BulbOutlined/>
                          )
                        }
                      />
                      <div
                        className={
                          'notifications-indicator'
                        }
                        style={{
                          display:
                            notifications.length
                              ? 'flex'
                              : 'none',
                        }}
                      />
                    </div>
                  </Popover>
                  <Popover
                    placement="bottomRight"
                    content={<PortalsPopover userPortals={user.systems} />}
                    trigger="click"
                  >
                    <IconButton
                      icon={<AppstoreFilled />}
                      style={{ marginRight: 20 }}
                    />
                  </Popover>
                  <Popover
                    placement="bottomRight"
                    content={
                      <ProfilePopOver
                        user={user}
                        onClick={signOut}
                      />
                    }
                    trigger="click"
                  >
                    <div className={"profile-photo"}>
                      <div
                        className={
                          "profile-photo-offset"
                        }
                      >
                        <Avatar
                          className="profile-picture"
                          style={{
                            backgroundColor: "#B24606",
                            verticalAlign: "middle"
                          }}
                          gap={0}
                        >
                          {user?.name && userIdentifier(user.name)}
                        </Avatar>
                      </div>
                    </div>
                  </Popover>
                </Col>
              </Row>
            </Header>
            <Content className="mx-4 my-2 min-h-280 layout-content" style={{ overflow: "initial" }}>
              <Outlet />
            </Content>
          </AntdLayout>
        </AntdLayout>
      </div>
    </HelmetProvider>
  );
};

export default Layout;
