import { encryptText } from "./encryptText";

/**
 * 
 * @param {String} text to decrypt
 * @param {Number} shift 
 * @returns 
 */
export const decryptText = (text, shift = 3) => {
    return encryptText(text, -shift);
}
