import { numberToWords } from '../src/index';

describe('numberToWords', function() {

    describe('Dari (da) language', function() {
        it('should convert zero correctly', function() {
            expect(numberToWords(0, 'da')).toBe('صفر افغانی');
        });

        it('should convert single digits', function() {
            expect(numberToWords(1, 'da')).toBe('یک افغانی');
            expect(numberToWords(5, 'da')).toBe('پنج افغانی');
        });

        it('should convert teens (10-19)', function() {
            expect(numberToWords(15, 'da')).toBe('پانزده افغانی');
            expect(numberToWords(19, 'da')).toBe('نوزده افغانی');
        });

        it('should convert hundreds', function() {
            expect(numberToWords(100, 'da')).toBe('صد افغانی');
            expect(numberToWords(500, 'da')).toBe('پانصد افغانی');
        });

        it('should convert thousands with correct Dari conjunctions', function() {
            expect(numberToWords(15500, 'da')).toBe('پانزده هزار و پانصد افغانی');
            expect(numberToWords(1000, 'da')).toBe('یک هزار افغانی');
        });

        it('should handle decimals (puls) correctly', function() {
            expect(numberToWords(1250.75, 'da')).toBe('یک هزار و دویست و پنجاه افغانی و هفتاد و پنج پول');
        });

        it('should handle trailing zeros in decimals', function() {
            expect(numberToWords(100.50, 'da')).toBe('صد افغانی و پنجاه پول');
            expect(numberToWords(0.05, 'da')).toBe('صفر افغانی و پنج پول');
        });
    });

    describe('Pashto (pa) language', function() {
        it('should convert zero correctly', function() {
            expect(numberToWords(0, 'pa')).toBe('صفر افغانۍ');
        });

        it('should convert thousands with Pashto conjunction (او)', function() {
            expect(numberToWords(15500, 'pa')).toBe('پنځلس هزار او پنځوسوه افغانۍ');
        });

        it('should handle millions', function() {
            expect(numberToWords(2000000, 'pa')).toBe('دوه میلیون افغانۍ');
        });

        it('should handle decimals (puls) correctly', function() {
            expect(numberToWords(10.50, 'pa')).toBe('لس افغانۍ او پنځوس پول');
        });
    });

    describe('Error handling', function() {
        it('should throw an error for negative numbers', function() {
            expect(function() {
                numberToWords(-100, 'da');
            }).toThrow('Amount must be a valid positive number.');
        });

        it('should throw an error for NaN', function() {
            expect(function() {
                numberToWords(NaN, 'pa');
            }).toThrow('Amount must be a valid positive number.');
        });
    });
});