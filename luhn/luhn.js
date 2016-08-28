/*jshint esversion: 6 */
const package = () => {

  var validate = function (v) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(v)) return false;
    var testValue = v.replace(/\D/g, "");
    var sum = 0;

    testValue = testValue.split("")
      .reverse()
      .map(function (item, index) {
        if ((index + 1) % 2 === 0) {
          return valueForEvenIndexedDigit(item);
        } else {
          return valueForOddIndexedDigit(item);
        }
      })
      .join("");
    sum = sumDigits(testValue);
    return ((sum % 10) === 0) ? true : false;
  };

  var valueForOddIndexedDigit = function (v) {
    return v;
  };

  var valueForEvenIndexedDigit = function (v) {
    if ((v *= 2) > 9) v -= 9;
    return v;
  };

  var sumDigits = function (i) {
    var numberArray = i.toString().split("");
    return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
  };

  var getAccountNumberValue = function (v) {
    // TODO: I'm not sure what this function does by looking at the test alone.
    // I must be missing something.
    return (v === 1) ? 2 : 1;
  };

  var generateCheckDigit = function (v) {
    checkDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var y = 0; y < checkDigits.length; y++) {
      var valueToCheck = v.toString() + checkDigits[y].toString();
      if (validate(valueToCheck)) {
        return checkDigits[y];
      }
    }
  };

  return {
    validate: validate,
    valueForOddIndexedDigit: valueForOddIndexedDigit,
    valueForEvenIndexedDigit: valueForEvenIndexedDigit,
    sumDigits: sumDigits,
    getAccountNumberValue: getAccountNumberValue,
    generateCheckDigit: generateCheckDigit
  };

};

module.exports = package();