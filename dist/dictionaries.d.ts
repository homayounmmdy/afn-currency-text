import { Dictionary, Language } from "./types";
/**
 * Dictionaries tailored for Afghan legal and financial documents.
 * Contains the word mappings for Dari ('da') and Pashto ('pa').
 *
 * Note: Pashto hundreds use Zero Width Non-Joiner (ZWNJ) for correct typography.
 * Pashto scales use 'هزار' (Hazar) for legal compliance instead of spoken 'زر' (Zar).
 */
export declare var dictionaries: {
    [key in Language]: Dictionary;
};
