export interface UserSystem {
  code: string;
  icon: string;
  name: string;
  portalUrl: string;
  status: string;
}

export interface User {
  username: string;
  name: string;
  email: string;
  phoneNumber?: string;
  userDescription?: string;
  tokenDuration?: string;
  businessUnit?: string;
  businessUnitName?: string;
  authenticationType?: string;
  clientId: string;
  clientName: string;
  status?: string;
  permissions: string[];
  isLoggedIn: boolean;
  userGroups: {
    id: string
    name: string
  }[]
  systems: UserSystem[];
}
