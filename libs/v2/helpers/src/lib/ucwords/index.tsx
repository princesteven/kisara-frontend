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
export const ucwords = (words: string) => {
    const separateWord = words.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
        separateWord[i] =
            separateWord[i].charAt(0).toUpperCase() +
            separateWord[i].substring(1);
    }
    return separateWord.join(' ');
};
