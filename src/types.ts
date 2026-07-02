
/**
 * Supported language codes for the conversion.
 * 'da' represents Dari (Persian as spoken in Afghanistan).
 * 'pa' represents Pashto.
 */
export type Language = 'da' | 'pa';

/**
 * Interface defining the structure of a language dictionary.
 * Contains all the necessary words and grammar rules for number conversion.
 */
export interface Dictionary {
    /** Words for digits 0-9. Index 0 is an empty string. */
  ones: string[];
    /** Words for numbers 10-19. */
  teens: string[];
    /** Words for tens (20, 30... 90). Indices 0 and 1 are empty strings. */
  tens: string[];
    /** Words for hundreds (100, 200... 900). Index 0 is an empty string. */
  hundreds: string[];
    /** Scale words (thousands, millions, etc.). Index 0 is an empty string. */
  scales: string[];
    /** The conjunction word used to connect parts (e.g., " و " or " او "). */
  conjunction: string;
    /** The name of the main currency (e.g., "افغانی" or "افغانۍ"). */
  currency: string;
    /** The name of the decimal subunit (e.g., "پول"). */
  decimal: string;
    /** The word for zero. */
  zero: string;
}