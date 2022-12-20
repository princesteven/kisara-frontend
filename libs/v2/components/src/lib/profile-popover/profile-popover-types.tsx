import { User } from "../../../../helpers/src/lib/parse-jwt/user-types";

export interface ProfilePopoverProps {
  photo?: string;
  user: User;
  onClick?: () => void
}
