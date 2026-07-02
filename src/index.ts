/**
 * afn-currency-text
 * Converts numbers to legal Afghan Afghani (AFN) wording in Dari and Pashto.
 */

import { dictionaries } from "./dictionaries";
import { Dictionary, Language } from "./types";

// Dictionaries tailored for Afghan legal/financial documents

/**
 * Converts a chunk of 3 digits (0-999) into words
 */
function convertChunk(num: number, dict: Dictionary): string {
  if (num === 0) return "";

  let result = "";
  const h = Math.floor(num / 100);
  const remainder = num % 100;
  const t = Math.floor(remainder / 10);
  const o = remainder % 10;

  if (h > 0) {
    result += dict.hundreds[h];
  }

  if (remainder > 0) {
    if (result) result += dict.conjunction;

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
 * Converts the full integer part into words
 */
function convertInteger(num: number, dict: Dictionary): string {
  if (num === 0) return dict.zero;

  const chunks: number[] = [];
  let temp = num;

  // Split number into chunks of 3 digits (ones, thousands, millions, etc.)
  while (temp > 0) {
    chunks.push(temp % 1000);
    temp = Math.floor(temp / 1000);
  }

  let result = "";

  // Process chunks from largest to smallest
  for (let i = chunks.length - 1; i >= 0; i--) {
    if (chunks[i] === 0) continue;

    const chunkText = convertChunk(chunks[i], dict);
    const scale = dict.scales[i];

    if (result) result += dict.conjunction;

    result += chunkText;
    if (scale) {
      result += " " + scale;
    }
  }

  return result;
}

/**
 * Main function: Converts a monetary amount to legal words in Dari or Pashto.
 *
 * @param amount - The numerical amount (e.g., 15500.50)
 * @param lang - The language code ('da' for Dari, 'pa' for Pashto)
 * @returns The formatted legal string
 */
export function numberToWords(amount: number, lang: Language): string {
  const dict = dictionaries[lang];

  if (isNaN(amount) || amount < 0) {
    throw new Error("Amount must be a valid positive number.");
  }

  // Split into integer and decimal parts
  // Using toFixed(2) ensures we handle floating point issues like 10.50 -> "10.5"
  const [integerStr, decimalStr] = amount.toFixed(2).split(".");

  const intNum = parseInt(integerStr, 10);
  let words = convertInteger(intNum, dict) + " " + dict.currency;

  // Handle decimals (puls)
  if (decimalStr) {
    const decNum = parseInt(decimalStr, 10);
    if (decNum > 0) {
      words +=
        dict.conjunction + convertInteger(decNum, dict) + " " + dict.decimal;
    }
  }

  return words;
}

// Default export for convenience
export default numberToWords;
