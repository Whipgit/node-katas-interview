module.exports = function (input) {
  if (validateInput(input)) {
    return doFizzBuzz(input);
  } else {
    throw 'fizzbuzz_optimized.js expected a number.';
  }
};

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
  return !isNaN(parseFloat(n)) && isFinite(n);
}