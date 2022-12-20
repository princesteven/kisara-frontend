"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIdentifier = void 0;
var userIdentifier = function (username) {
    return username
        .split(' ')
        .map(function (word) { return word[0]; })
        .join('');
};
exports.userIdentifier = userIdentifier;
//# sourceMappingURL=index.js.map