import { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { compact, flattenDeep } from 'lodash';
import { ItemType, Menus } from '../../../../components/src/lib/layout/types';
import { MailOutlined } from '@ant-design/icons';

/**
 * @function
 * @name createMenuItems
 * @description return menu items
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {Array}
 */
export const createMenuItems = (
    menus: Menus[],
    checkAuthorized: (permissions: []) => boolean
) => {
    let menuItems: MenuProps['items'] = [];
    for (const index in menus) {
        let menuItem: ItemType = {} as ItemType;
        let permissions =
            menus[index]?.permissions ||
            compact(
                flattenDeep(
                    menus[index].children?.map((child) => child?.permissions)
                )
            );

        let isAuthorized = checkAuthorized(permissions);

        if (!isAuthorized) {
            continue;
        }

        if (!menus[index].children) {
            menuItem = {
                label: menus[index].name,
                key: menus[index].name,
                icon: menus[index].icon,
            };
            continue;
        }

        menuItem = {
            label: menus[index].name,
            key: menus[index].name,
            icon: menus[index].icon,
            children: menus[index].children?.map((child) => {
                return {
                    label: child.name,
                    key: child.name,
                };
            }),
        };
        menuItems.push(menuItem);
    }
    // console.log(`the permissions of: ${menus[index].name}`, isAuthorized);
    return menuItems;
    return [
        {
          label: 'Navigation One',
          key: 'mail',
        //   icon: <MailOutlined />,
        },
        {
          label: 'Navigation Two',
          key: 'app',
        //   icon: <MailOutlined />,
          disabled: true,
        },
        {
          label: 'Navigation Three - Submenu',
          key: 'SubMenu',
        //   icon: <MailOutlined />,
          children: [
            {
              type: 'group',
              label: 'Item 1',
              children: [
                {
                  label: 'Option 1',
                  key: 'setting:1',
                },
                {
                  label: 'Option 2',
                  key: 'setting:2',
                },
              ],
            },
            {
              type: 'group',
              label: 'Item 2',
              children: [
                {
                  label: 'Option 3',
                  key: 'setting:3',
                },
                {
                  label: 'Option 4',
                  key: 'setting:4',
                },
              ],
            },
          ],
        },
        {
          label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          ),
          key: 'alipay',
        },
      ];
};
