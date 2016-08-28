/*jshint esversion: 6 */
const package = () => {

	//returns a number luhn validation: true or false
	var validate = (value) => {
		var val = processInput(value);
		if (!val) return false;
		var reply = luhn(val);
		return (reply % 10) === 0;
	};

	// returns a check digit: number
	var generate = (value) => {
		var val = processInput(value);
		if (!val) return false;
		var reply = luhn(val, true);
		return (1000 - reply) % 10;
	};

	// returns false, or a truthy value we can work with
	var processInput = (input) => {
		if (typeof input === 'number') {
			return input.toString().replace(/\D/g, "");
		} else if (typeof input === 'string') {
			if (/[^0-9-\s]+/.test(input)) return false;
			return input.replace(/\D/g, "");
		} else {
			return false;
		}
	};

	// Luhn logic: returns a checksum number
	var luhn = (value, generateCheckDigit = false) => {
		var checkSum = 0;
		var numberDigit = 0;
		var even = generateCheckDigit;
		var returnVar;

		for (let x = value.length - 1; x >= 0; x--) {
			stringDigit = value.charAt(x);
			numberDigit = parseInt(stringDigit, 10);

			if (even) {
				if ((numberDigit *= 2) > 9) numberDigit -= 9;
			}
			checkSum += numberDigit;
			even = !even;
		}
		return checkSum;
	};

	return {
		validate: validate,
		generateCheckDigit: generate
	};
};

module.exports = package();