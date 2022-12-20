import { User } from "./user-types";

interface TokenData {
  exp: number;
  iat: number;
  iss: string;
  permissions: string[];
  sub: string;
  systems: string[];
  username: string;
  user: User;
}

/**
 * @function
 * @name parseJwt
 * @description computes the resulting data from jwt
 * @param token The jwt token
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns json data in jwt token
 */
export const parseJwt = (token: string): TokenData => {
  const base64Url: string = token.split('.')[1];
  const base64: string = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload: string = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
};
