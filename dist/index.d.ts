import { Language } from "./types";
/**
 * Main function: Converts a monetary amount to legal words in Dari or Pashto.
 *
 * This function is written in legacy-compatible TypeScript (ES3/ES5 syntax)
 * to ensure the compiled JavaScript runs perfectly on old environments,
 * including legacy versions of Internet Explorer (IE8+).
 *
 * @param amount - The numerical amount to convert (e.g., 15500.50). Must be positive.
 * @param lang - The language code ('da' for Dari, 'pa' for Pashto).
 * @returns The formatted legal string including currency and decimals (puls).
 * @throws {Error} If the amount is negative or not a valid number (NaN).
 *
 * @example
 * // Returns "پانزده هزار و پانصد افغانی"
 * numberToWords(15500, 'da');
 *
 * @example
 * // Returns "پنځلس هزار او پنځوسوه افغانۍ او پنځوس پول"
 * numberToWords(15500.50, 'pa');
 */
export declare function numberToWords(amount: number, lang: Language): string;
/**
 * Default export for convenience.
 * Allows importing the function as: import numberToWords from 'afn-currency-text';
 */
export default numberToWords;
