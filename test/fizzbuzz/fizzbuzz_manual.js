/*jshint esversion: 6 */
fizzbuzz = require('../../fizzbuzz/fizzbuzz_manual.js');
var expect = require('chai').expect;
var fizzle = fizzbuzz.fizzbuzz;
var fizzleTest = fizzbuzz._chai;

describe('fizzbuzz_manual.js', function () {
  describe('when testing the main function', function () {
    it('returns 2 when given 2', function () {
      expect(fizzle(2)).to.equal(2);
    });

    it('returns "Fizz" when given 3', function () {
      expect(fizzle(3)).to.equal('Fizz');
    });

    it('returns "Buzz" when given 5', function () {
      expect(fizzle(5)).to.equal('Buzz');
    });

    it('returns "FizzBuzz" when given 15', function () {
      expect(fizzle(15)).to.equal('FizzBuzz');
    });
  });

  describe('when looking for input errors', function () {
    it('throws: "FizzBuzz expected a number to be analyzed, not words." when given "a string"',
      () => {
        expect(() => fizzleTest._processInput('a string')).
          to.throw('FizzBuzz expected a number to be analyzed, not words.');
      });

    it('throws: "FizzBuzz expected a number to be analyzed." when given {}',
      () => {
        expect(() => fizzleTest._processInput({})).
          to.throw('FizzBuzz expected a number to be analyzed.');
      });

    it('throws: "FizzBuzz expected a number to be analyzed." when given undefined',
      () => {
        expect(() => fizzleTest._processInput()).
          to.throw('FizzBuzz expected a number to be analyzed.');
      });
  });

  describe('when testing the modulo function', function () {
    it('returns false when given (5, 15)', function () {
      expect(fizzleTest._modulo(5, 15)).to.equal(false);
    });

    it('returns true when given (20, 5)', function () {
      expect(fizzleTest._modulo(20, 5)).to.equal(true);
    });
  });

  describe('when testing the FizzBuzz function', function () {
    it('returns 2 when given 2', function () {
      expect(fizzleTest._doFizzBuzz(2)).to.equal(2);
    });

    it('returns "Fizz" when given 3', function () {
      expect(fizzleTest._doFizzBuzz(3)).to.equal('Fizz');
    });

    it('returns "Buzz" when given 5', function () {
      expect(fizzleTest._doFizzBuzz(5)).to.equal('Buzz');
    });

    it('returns "FizzBuzz" when given 15', function () {
      expect(fizzleTest._doFizzBuzz(15)).to.equal('FizzBuzz');
    });
  });

  describe('when testing the validateInput function', function () {
    it('returns true when given 2', function () {
      expect(fizzleTest._validateInput(2)).to.equal(true);
    });

    it('returns false when given {}', function () {
      expect(fizzleTest._validateInput({})).to.equal(false);
    });

    it('returns false when given "testeroo"', function () {
      expect(fizzleTest._validateInput('testeroo')).to.equal(false);
    });

    it('returns true when given "9 "', function () {
      expect(fizzleTest._validateInput('9 ')).to.equal(true);
    });
  });
});