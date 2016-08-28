/*jshint esversion: 6 */
fizzbuzz = require('../../fizzbuzz/fizzbuzz_optimized.js');
var expect = require('chai').expect;

describe('fizzbuzz_optimized.js', () => {
  var test = (input, expected) => {
    it(`returns ${expected} when given ${input}`, () => {
      expect(fizzbuzz(input)).to.equal(expected);
    });
  };

  test(2, 2);
  test(3, 'Fizz');
  test(4, 4);
  test(5, 'Buzz');
  test(6, 'Fizz');
  test(7, 7);
  test(8, 8);
  test(9, 'Fizz');
  test(10, 'Buzz');
  test(11, 11);
  test(12, 'Fizz');
  test(13, 13);
  test(14, 14);
  test(15, 'FizzBuzz');
  test(16, 16);
  test(17, 17);
  test(18, 'Fizz');
  test(19, 19);
  test(20, 'Buzz');
  test(21, 'Fizz');

  var inputError = (input, expected) => {
    it(`throws error: ${expected} when given ${input}`, () => {
      expect(function(){
        fizzbuzz(input);
      }).to.throw(expected);
    });
  };

  inputError('a string', 'fizzbuzz_optimized.js expected a number.');
});
