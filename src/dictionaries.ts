import { Dictionary, Language } from "./types";

/**
 * Dictionaries tailored for Afghan legal and financial documents.
 * Contains the word mappings for Dari ('da') and Pashto ('pa').
 *
 * Note: Pashto hundreds use Zero Width Non-Joiner (ZWNJ) for correct typography.
 * Pashto scales use 'هزار' (Hazar) for legal compliance instead of spoken 'زر' (Zar).
 */
export var dictionaries: { [key in Language]: Dictionary } = {
  da: {
    ones: ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
    teens: [
      "ده",
      "یازده",
      "دوازده",
      "سیزده",
      "چهارده",
      "پانزده",
      "شانزده",
      "هفده",
      "هجده",
      "نوزده",
    ],
    tens: [
      "",
      "",
      "بیست",
      "سی",
      "چهل",
      "پنجاه",
      "شصت",
      "هفتاد",
      "هشتاد",
      "نود",
    ],
    hundreds: [
      "",
      "صد",
      "دویست",
      "سیصد",
      "چهارصد",
      "پانصد",
      "ششصد",
      "هفتصد",
      "هشتصد",
      "نهصد",
    ],
    scales: ["", "هزار", "میلیون", "میلیارد"],
    conjunction: " و ",
    currency: "افغانی",
    decimal: "پول",
    zero: "صفر",
  },
  pa: {
    ones: ["", "یو", "دوه", "درې", "څلور", "پنځه", "شپږ", "اووه", "اته", "نه"],
    teens: [
      "لس",
      "یوولس",
      "دولس",
      "دیارس",
      "څوارلس",
      "پنځلس",
      "شپاړس",
      "اوولس",
      "اتلس",
      "نولس",
    ],
    tens: [
      "",
      "",
      "شل",
      "دیرش",
      "څلوېښت",
      "پنځوس",
      "شپېته",
      "اوویا",
      "اتیا",
      "نوي",
    ],
    hundreds: [
      "",
      "سل",
      "دوه‌سوه",
      "درې‌سوه",
      "څلورسوه",
      "پنځوسوه",
      "شپږسوه",
      "اووه‌سوه",
      "اته‌سوه",
      "نه‌سوه",
    ],
    scales: ["", "هزار", "میلیون", "میلیارد"], // 'هزار' is used in formal/legal Pashto instead of 'زر'
    conjunction: " او ",
    currency: "افغانۍ",
    decimal: "پول",
    zero: "صفر",
  },
};
