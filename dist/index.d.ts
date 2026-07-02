/**
 * afn-currency-text
 * Converts numbers to legal Afghan Afghani (AFN) wording in Dari and Pashto.
 */
export type Language = "da" | "pa";
/**
 * Main function: Converts a monetary amount to legal words in Dari or Pashto.
 *
 * @param amount - The numerical amount (e.g., 15500.50)
 * @param lang - The language code ('da' for Dari, 'pa' for Pashto)
 * @returns The formatted legal string
 */
export declare function numberToWords(amount: number, lang: Language): string;
export default numberToWords;
