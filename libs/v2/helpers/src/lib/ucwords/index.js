"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ucwords = void 0;
/**
 * @function
 * @name ucwords
 * @description capitalizes words in a sentence
 * @param words {string} words
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {String}
 */
var ucwords = function (words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
        separateWord[i] =
            separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
    }
    return separateWord.join(' ');
};
exports.ucwords = ucwords;
//# sourceMappingURL=index.js.map