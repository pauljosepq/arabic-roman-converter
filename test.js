const convertToRoman = require('./index.js')

test('Converting 333 should be equal to CCCXXXIII', () => {
	expect(convertToRoman(333)).toBe("CCCXXXIII")
})

test('Converting 444 should be equal to CDXLIV', () => {
	expect(convertToRoman(444)).toBe("CDXLIV")
})

test('Converting 1970 should be equal to MCMLXX', () => {
	expect(convertToRoman(1970)).toBe("MCMLXX")
})

test('Converting 11234 should be equal to --(XI)CCXXXIV', () => {
	expect(convertToRoman(11234)).toBe("--(XI)CCXXXIV")
})

test('Converting 12.5 is Invalid', () => {
	expect(convertToRoman(12.5)).toBe("Invalid")
})

test('Converting 112.12 is Invalid', () => {
	expect(convertToRoman(112.12)).toBe("Invalid")
})