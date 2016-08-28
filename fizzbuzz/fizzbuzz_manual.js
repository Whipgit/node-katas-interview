/*jshint esversion: 6 */

const package = () => {

  // Process module input
  function processInput(input) {
    if (typeof input === 'number') {
      return doFizzBuzz((input));
    } else if (typeof input === 'string') {
      if (validateInput(input)) {
        return doFizzBuzz(parseInt(input.trim(), 10));
      } else {
        throw 'FizzBuzz expected a number to be analyzed, not words.';
      }
    } else {
      throw 'FizzBuzz expected a number to be analyzed.';
    }
  }

  // Do FizzBuzz
  function doFizzBuzz(input) {
    var returnString = '';
    returnString = (modulo(input, 3)) ? 'Fizz' : '';
    returnString += (modulo(input, 5)) ? 'Buzz' : '';
    returnString = (returnString) ? returnString : input;
    return returnString;
  }

  // Check if the input is perfectly devisable
  function modulo(divident, divisor) {
    return divident % divisor === 0;
  }

  // Make sure the input is a number
  function validateInput(n) {
    return (!isNaN(parseFloat(n)) && isFinite(n)) ? true : false;
  }

  return {
    fizzbuzz: processInput,
    _chai: {
      _doFizzBuzz: doFizzBuzz,
      _modulo: modulo,
      _validateInput: validateInput,
      _processInput: processInput
    }
  };
};

module.exports = package();