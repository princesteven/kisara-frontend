/**
 * @function
 * @name ucfirst
 * @description capitalizes first letter in a sentence
 * @param input {string} words
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {String}
 */
export const ucfirst = (input: string) => {
    if (input === undefined || input === null) return input;
    return input.charAt(0).toUpperCase() + input.substring(1);
};
