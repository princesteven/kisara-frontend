import {ReactNode} from "react";

export interface ButtonProps {
  title: string,
  onClick?(): void,
  type?: "success" | "danger" | "warning" | "primary" | "outlined" | "outlined-primary" | "outlined-danger" | "outlined-warning" | "outlined-success";
  shape?: "round";
  size?: "small" | "large";
  icon?: ReactNode;
  className?: string;
  style?: object
}
