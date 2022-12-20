import { ReactNode } from 'react';
import { User } from "../../../../helpers/src/lib/parse-jwt/user-types";

export interface MenuChildren {
  name: string;
  link: string;
  permissions?: string[];
}

export interface MenuWithoutChildren {
  name: string;
  link?: string;
  icon: any;
  permissions?: string[];
}

export interface Menus extends MenuWithoutChildren {
  children?: Array<MenuChildren>;
  childrenLinks?: Array<string>;
  permissions?: any,
}

export interface ItemType {
  danger?: boolean,
  disabled?: boolean,
  icon?: ReactNode,
  key: string,
  label: ReactNode,
  title?: string,
  children?: ItemType[]
}

export interface LayoutProps {
  logo?: string;
  title: string;
  user: User
  signOutUrl: string;
  menus: Menus[];
  version: {
    major: number,
    minor: number,
    fix: number
  }
}
