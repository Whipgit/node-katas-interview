var luhn = require('../../luhn/luhn.js');
var expect = require('chai').expect;

describe('luhn.js', function () {
  describe('when calculating value for an odd-indexed digit', function () {
    it('returns 0 when given 0', function () {
      expect(luhn.valueForOddIndexedDigit(0)).to.equal(0);
    });

    it('returns 5 when given 5', function () {
      expect(luhn.valueForOddIndexedDigit(5)).to.equal(5);
    });

    it('returns 9 when given 9', function () {
      expect(luhn.valueForOddIndexedDigit(9)).to.equal(9);
    });

  });

  describe('when calculating value for an even-indexed digit', function () {
    it('returns 2 when given 1', function () {

      expect(luhn.valueForEvenIndexedDigit(1)).to.equal(2);
    });
    it('returns 3 when given 6', function () {
      expect(luhn.valueForEvenIndexedDigit(6)).to.equal(3);
    });
  });

  describe('when summing digits', function () {
    it('returns 1 when given 10', function () {
      expect(luhn.sumDigits(10)).to.equal(1);
    });

    it('returns 2 when given 11', function () {
      expect(luhn.sumDigits(11)).to.equal(2);
    });
  });

  describe('when getting a value from the account number', function () {
    it('returns 2 when given 1', function () {
      expect(luhn.getAccountNumberValue(1)).to.equal(2);
    });

    it('returns 1 when given 10', function () {
      expect(luhn.getAccountNumberValue(10)).to.equal(1);
    });
  });

  describe('when generating the check digit', function () {
    it('returns 8 when given 1', function () {
      expect(luhn.generateCheckDigit(1)).to.equal(8);
    });

    it('returns 9 when given 10', function () {
      expect(luhn.generateCheckDigit(10)).to.equal(9);
    });

    it('returns 1 when given 411111111111111', function () {
      expect(luhn.generateCheckDigit(411111111111111)).to.equal(1);
    });

    it('returns 0 when given 57', function () {
      expect(luhn.generateCheckDigit(57)).to.equal(0);
    });
  });
});
