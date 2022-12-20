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
export const ucword = (input: string) => {
    if (input === undefined || input === null) {
        return input;
    }
    return String.prototype.toUpperCase.call(input);
};