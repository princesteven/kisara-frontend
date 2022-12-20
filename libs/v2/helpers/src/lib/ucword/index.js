"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ucword = void 0;
/**
 * @function
 * @name ucword
 * @description capitalizes single word
 * @param input {string} word
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {String}
 */
var ucword = function (input) {
    if (input === undefined || input === null) {
        return input;
    }
    return String.prototype.toUpperCase.call(input);
};
exports.ucword = ucword;
//# sourceMappingURL=index.js.map