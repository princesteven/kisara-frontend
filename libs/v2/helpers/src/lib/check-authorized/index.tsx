import isEmpty from "lodash/isEmpty";
import intersection from "lodash/intersection";

export const checkAuthorized = (permissions: string | string[] = [], userPermissions: string[]): boolean => {
  if (!permissions) return true;

  if (typeof permissions == "string") {
    const isPermitted = userPermissions.includes(permissions);
    return isPermitted || permissions === "*";

  }

  if (Array.isArray(permissions)) {
    const permittedPermissions = intersection(
      permissions,
      userPermissions
    );
    return !isEmpty(permittedPermissions);
  }

  return false;
};
