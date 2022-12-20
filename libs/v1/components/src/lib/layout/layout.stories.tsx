import { MemoryRouter } from 'react-router';
import { Story, Meta } from '@storybook/react';
import Layout, { LayoutProps } from './layout';
import {
    AppstoreFilled as DashboardIcon,
    UserSwitchOutlined as UserManagementIcon,
    SettingOutlined as SettingsIcon,
    ApartmentOutlined as InstitutesIcon,
    AppstoreAddOutlined as ApplicableChargesIcon,
    SisternodeOutlined as ProductsIcon,
    BankOutlined as BanksIcon,
    ReadOutlined as DocumentsIcon,
    MoneyCollectOutlined as ChargeParameterIcon,
    HourglassOutlined as UnitsOfMeasurementIcon,
} from '@ant-design/icons';
import { Menus } from './types';

export default {
    component: Layout,
    title: 'Layout',
} as Meta;

const menus: Menus[] = [
    {
        name: 'Dashboard',
        link: 'frontend-dashboard',
        icon: <DashboardIcon />,
    },
    {
        name: 'User Management',
        icon: <UserManagementIcon />,
        permissions: '*',
        children: [
            {
                name: 'Roles',
                link: 'frontend-roles.view',
                // permissions: ['view roles'],
            },
            {
                name: 'Users',
                link: 'frontend-users.view',
                // permissions: ['view users'],
            },
        ],
    },
    {
        name: 'Products',
        icon: <ProductsIcon />,
        children: [
            {
                name: 'Product Categories',
                link: 'frontend-product_categories-index',
                permissions: ['view product categories'],
            },
            {
                name: 'Product Types',
                link: 'frontend-product_types-index',
                permissions: ['view product types'],
            },
            {
                name: 'Products',
                link: 'frontend-products-index',
                permissions: ['view products'],
            },
        ],
    },
    {
        name: 'Invoice Matrix Configuration',
        link: 'frontend-invoice_matrix_configs-index',
        icon: <SettingsIcon />,
        permissions: ['view charges'],
    },
    {
        name: 'Institutes',
        link: 'frontend-institutes-index',
        icon: <InstitutesIcon />,
        permissions: ['view institutes'],
    },
    {
        name: 'CTI',
        link: 'frontend-cti-index',
        icon: <BanksIcon />,
        // permissions: ['view banks'],
    },
    {
        name: 'Applicable Charges',
        link: 'frontend-applicable_charges-index',
        icon: <ApplicableChargesIcon />,
        permissions: ['view charges'],
    },
    {
        name: 'Documents',
        link: 'frontend-documents-index',
        icon: <DocumentsIcon />,
        permissions: ['view documents'],
    },
    {
        name: 'Charge Parameters',
        link: 'frontend-charge_parameters-index',
        icon: <ChargeParameterIcon />,
        permissions: ['view parameters'],
    },
    {
        name: 'Units Of Measurement',
        link: 'frontend-units_of_measurement-index',
        icon: <UnitsOfMeasurementIcon />,
        permissions: ['view units of measurement'],
    },
];

const logout = () => {
    console.log('logged out');
};

const checkAuthorized = (): boolean => {
    return true;
};

const postAction = (x: number, y: number): Promise<any> => {
    x = x + y;
    return Promise.resolve();
};

const Template: Story<LayoutProps> = (args) => (
    <MemoryRouter initialEntries={['/']}>
        <Layout {...args} />
    </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
    user: {
        name: 'John Doe',
        email: 'john.doe@nmbtz.com',
    },
    menus: menus,
    width: 400,
    logout: logout,
    appName: 'Cure',
    postAction: postAction,
    checkAuthorized: checkAuthorized,
    changePasswordLink: '/change-password',
};
