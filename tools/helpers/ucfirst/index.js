"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ucfirst = void 0;
/**
 * @function
 * @name ucwords
 * @description capitalizes first letter in a sentence
 * @param ucfirst {string} words
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {String}
 */
var ucfirst = function (input) {
    if (input === undefined || input === null)
        return input;
    return input.charAt(0).toUpperCase() + input.substring(1);
};
exports.ucfirst = ucfirst;
//# sourceMappingURL=index.js.map