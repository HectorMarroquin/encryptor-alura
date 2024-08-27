
/**
 * 
 * @param {String} text to encrypt 
 * @param {Number} shift 
 * @returns 
 */
export const encryptText = (text, shift = 3) => {
    return text.split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const code = char.charCodeAt();
                const offset = code >= 65 && code <= 90 ? 65 : 97;
                return String.fromCharCode(((code - offset + shift) % 26 + 26) % 26 + offset);
            }
            return char;
        })
        .join('');
}