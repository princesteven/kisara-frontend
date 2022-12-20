"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJwt = void 0;
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
var parseJwt = function (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64)
        .split('')
        .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    })
        .join(''));
    return JSON.parse(jsonPayload);
};
exports.parseJwt = parseJwt;
//# sourceMappingURL=index.js.map