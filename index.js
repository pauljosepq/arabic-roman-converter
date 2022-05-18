function convertToRoman(n) {
	const romanNumbers = [
		["-(M)", "1000000"],
		["--(CM)", "900000"],
		["-(D)", "500000"],
		["--(CD)", "400000"],
		["-(C)", "100000"],
		["--(XC)", "90000"],
		["-(L)", "50000"],
		["--(XL)", "40000"],
		["-(X)", "10000"],
		["--(IX)", "9000"],
		["-(V)", "5000"],
		["--(IV)", "4000"],
		["M", "1000"],
		["CM", "900"],
		["D", "500"],
		["CD", "400"],
		["C", "100"],
		["XC", "90"],
		["L", "50"],
		["XL", "40"],
		["X", "10"],
		["IX", "9"],
		["V", "5"],
		["IV", "4"],
		["I", "1"]
	]
	const result= []

if (n % 1 == 0) {
		romanNumbers.forEach(r => {
			while (n >= r[1]) {
				result.push(r[0])
				n -= r[1]
			}
		})
} else {
	console.log("Invalid")
}
	
	return result.join('')
}

let nu = convertToRoman(5)

module.exports = convertToRoman