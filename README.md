# afn-currency-text

> 🇦🇫 Convert numbers to legal Afghan Afghani (AFN) wording in Dari and Pashto. Perfect for invoices, banking, and official documents.

[![npm version](https://img.shields.io/npm/v/afn-currency-text.svg)](https://www.npmjs.com/package/afn-currency-text)
[![license](https://img.shields.io/npm/l/afn-currency-text.svg)](https://github.com/homayounmmdy/afn-currency-text/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/afn-currency-text.svg)](https://www.npmjs.com/package/afn-currency-text)

## 🚀 Why this package?

In Afghan banking, invoicing, and legal documents, it is a strict requirement to write monetary amounts in words (e.g., `15,500 AFN` must be written as *"پانزده هزار و پانصد افغانی"*). 

While generic number-to-words packages exist, they fail for the Afghan context because:
1. They default to Iranian Rial/Toman logic.
2. They don't handle the specific grammar for **Afghan Afghani (AFN)**.
3. They lack proper support for **Pashto** translations and conjunctions (like using "او" instead of "و").
4. They don't correctly format the decimal subunit (**Puls / پول**).

`afn-currency-text` is built specifically to solve this, ensuring 100% legal and financial compliance for Afghan documents.

## ✨ Features

- 🇦🇫 **Tailored for AFN:** Specifically designed for Afghan Afghani and its decimal subunit, Puls.
- 🗣️ **Dual Language Support:** Native, grammatically correct support for both **Dari (`da`)** and **Pashto (`pa`)**.
- 🏛️ **Legal Compliance:** Uses formal legal terminology (e.g., using "هزار" instead of spoken "زر" in Pashto).
- 🕰️ **Legacy Compatible:** Written in pure ES3/ES5 syntax. The compiled JavaScript works flawlessly in old environments, including legacy versions of Internet Explorer (IE8+) and older Node.js versions.
- 📦 **Zero Dependencies:** Pure TypeScript, resulting in a tiny, lightning-fast bundle.
- 🛡️ **Fully Typed:** Ships with built-in TypeScript definitions for excellent IDE autocomplete.

## 📦 Installation

```bash
npm install afn-currency-text
# or
yarn add afn-currency-text
```

## 💻 Usage

### Basic Usage (Dari)
```javascript
const { numberToWords } = require('afn-currency-text');
// or import { numberToWords } from 'afn-currency-text';

console.log(numberToWords(15500, 'da'));
// Output: "پانزده هزار و پانصد افغانی"

console.log(numberToWords(1250.75, 'da'));
// Output: "یک هزار و دویست و پنجاه افغانی و هفتاد و پنج پول"
```

### Basic Usage (Pashto)
```javascript
const { numberToWords } = require('afn-currency-text');

console.log(numberToWords(15500, 'pa'));
// Output: "پنځلس هزار او پنځوسوه افغانۍ"

console.log(numberToWords(2000000, 'pa'));
// Output: "دوه ملیون افغانۍ"
```

## 📖 API Reference

### `numberToWords(amount, lang)`

Converts a numerical amount into its legal word representation.

#### Parameters:
| Name | Type | Description |
| :--- | :--- | :--- |
| `amount` | `number` | The numerical amount to convert (e.g., `15500.50`). Must be a positive number. |
| `lang` | `'da' \| 'pa'` | The target language code. Use `'da'` for Dari and `'pa'` for Pashto. |

#### Returns:
`string` - The formatted legal string including the currency name and decimals (puls).

#### Throws:
`Error` - If the amount is negative or `NaN`.

## 🏛️ A Note on Legacy Compatibility

This package is explicitly written using legacy JavaScript syntax (`var`, standard `function` declarations, no template literals, no destructuring). 

While modern JavaScript is great, many enterprise banking systems, legacy accounting software, and older government portals in the region still run on outdated JavaScript engines. By keeping the source code strictly ES3/ES5 compliant, we guarantee that the compiled output will run **anywhere** without requiring heavy polyfills or transpilation by the end-user.

## 🧪 Testing

The package is fully tested using Jest. To run the test suite locally:

```bash
npm test
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/homayounmmdy/afn-currency-text/issues).

## 📄 License

This project is licensed under the [MIT License](https://github.com/homayounmmdy/afn-currency-text/blob/main/LICENSE).

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/homayounmmdy">Homayoun Mohammadi</a>
</div>