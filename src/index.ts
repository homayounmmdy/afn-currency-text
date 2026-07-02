import { dictionaries } from "./dictionaries";
import { Dictionary, Language } from "./types";

/**
 * Converts a chunk of 3 digits (0-999) into words.
 *
 * @param num - The number to convert (must be between 0 and 999).
 * @param dict - The language dictionary to use for word mapping.
 * @returns The word representation of the 3-digit chunk. Returns empty string if num is 0.
 */
function convertChunk(num: number, dict: Dictionary): string {
    if (num === 0) {
        return '';
    }

    var result = '';
    var h = Math.floor(num / 100);
    var remainder = num % 100;
    var t = Math.floor(remainder / 10);
    var o = remainder % 10;

  if (h > 0) {
    result += dict.hundreds[h];
  }

  if (remainder > 0) {
        if (result) {
            result += dict.conjunction;
        }

    if (remainder < 10) {
      result += dict.ones[o];
    } else if (remainder < 20) {
      result += dict.teens[remainder - 10];
    } else {
      result += dict.tens[t];
      if (o > 0) {
        result += dict.conjunction + dict.ones[o];
      }
    }
  }

  return result;
}

/**
 * Converts the full integer part into words.
 * Splits the number into chunks of 3 digits and processes them from largest to smallest.
 *
 * @param num - The integer number to convert (must be >= 0).
 * @param dict - The language dictionary to use for word mapping.
 * @returns The complete word representation of the integer.
 */
function convertInteger(num: number, dict: Dictionary): string {
    if (num === 0) {
        return dict.zero;
    }

    var chunks: number[] = [];
    var temp = num;

  // Split number into chunks of 3 digits (ones, thousands, millions, etc.)
  while (temp > 0) {
    chunks.push(temp % 1000);
    temp = Math.floor(temp / 1000);
  }

    var result = '';

  // Process chunks from largest to smallest
    for (var i = chunks.length - 1; i >= 0; i--) {
        if (chunks[i] === 0) {
            continue;
        }

        var chunkText = convertChunk(chunks[i], dict);
        var scale = dict.scales[i];

        if (result) {
            result += dict.conjunction;
        }

    result += chunkText;
    if (scale) {
            result += ' ' + scale;
    }
  }

  return result;
}

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
export function numberToWords(amount: number, lang: Language): string {
    var dict = dictionaries[lang];

  if (isNaN(amount) || amount < 0) {
        throw new Error('Amount must be a valid positive number.');
  }

    // Use toFixed(2) to handle floating point issues and ensure 2 decimal places for puls
    var parts = amount.toFixed(2).split('.');
    var integerStr = parts[0];
    var decimalStr = parts[1];

    var intNum = parseInt(integerStr, 10);
    var words = convertInteger(intNum, dict) + ' ' + dict.currency;

  // Handle decimals (puls)
  if (decimalStr) {
        var decNum = parseInt(decimalStr, 10);
    if (decNum > 0) {
            words += dict.conjunction + convertInteger(decNum, dict) + ' ' + dict.decimal;
    }
  }

  return words;
}

/**
 * Default export for convenience.
 * Allows importing the function as: import numberToWords from 'afn-currency-text';
 */
export default numberToWords;
