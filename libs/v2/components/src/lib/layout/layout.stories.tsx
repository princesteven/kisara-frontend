import { Layout } from './layout';
import { MemoryRouter } from 'react-router';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Menus} from "../../../../../v1/components/src/lib/layout/types";
import {
  ApartmentOutlined as InstitutesIcon,
  AppstoreAddOutlined as ApplicableChargesIcon,
  AppstoreFilled as DashboardIcon,
  BankOutlined as BanksIcon, HourglassOutlined as UnitsOfMeasurementIcon, MoneyCollectOutlined as ChargeParameterIcon,
  ReadOutlined as DocumentsIcon,
  SettingOutlined as SettingsIcon,
  SisternodeOutlined as ProductsIcon,
  UserSwitchOutlined as UserManagementIcon
} from "@ant-design/icons/lib/icons";

export default {
    component: Layout,
    title: 'Layout',
} as ComponentMeta<typeof Layout>;

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

const Template: ComponentStory<typeof Layout> = (args) => (
  <MemoryRouter initialEntries={['/']}>
    <Layout {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  // title: 'Test',
  user: {
    username: 'prince.malipula',
    name: 'Prince Malipula',
    email: 'prince.malipula@nmbtz.com'
  },
  signOutUrl: 'https://ms-portal.nmbtz.com',
  menus: menus
};
