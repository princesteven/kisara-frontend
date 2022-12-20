import {ReactNode} from "react";

export interface PortalsPopoverProps {
  userPortals: UserPortals[]
}

export interface PortalProps {
  title: string;
  icon: ReactNode;
  path: string;
}

export interface UserPortals {
  code: string,
  icon: string,
  name: string,
  portalUrl: string,
  status: string,
}
