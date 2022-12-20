/**
 * @function
 * @name lcfirst
 * @description turns first letter in a sentence to lower case
 * @param input {string} words
 * @version 0.0.1
 * @since 0.0.1
 * @author Prince Malipula
 * @returns {String}
 */
export const lcfirst = (input: string) => {
  if (input === undefined || input === null) return input;
  return input.charAt(0).toLowerCase() + input.substring(1);
};
