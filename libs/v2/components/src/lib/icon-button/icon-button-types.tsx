import {ReactNode} from "react";

export interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: Record<string, unknown>;
}
