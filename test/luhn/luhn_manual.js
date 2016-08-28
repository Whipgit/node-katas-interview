var luhn = require('../../luhn/luhn_manual.js');
var expect = require('chai').expect;

describe('luhn_manual.js', function () {
  describe('Validate: when validating numbers', function () {
    it('returns true when given 4012888888881881', function () {
      expect(luhn.validate(5457623898234113)).to.equal(true);
    });

    it('returns true when given 371449635398431', function () {
      expect(luhn.validate(371449635398431)).to.equal(true);
    });

    it('returns false when given 371449635398432', function () {
      expect(luhn.validate(371449635398432)).to.equal(false);
    });
  });

  describe('Validate: when validating strings', function () {
    it('returns true when given "5457623898234113"', function () {
      expect(luhn.validate("5457623898234113")).to.equal(true);
    });

    it('returns true when given "371449635398431"', function () {
      expect(luhn.validate("371449635398431")).to.equal(true);
    });

    it('returns true when given "3714-4963-5398-431"', function () {
      expect(luhn.validate("3714-4963-5398-431")).to.equal(true);
    });

    it('returns true when given "3714 4963 5398 431"', function () {
      expect(luhn.validate("3714 4963 5398 431")).to.equal(true);
    });

    it('returns false when given "371449635398432"', function () {
      expect(luhn.validate("371449635398432")).to.equal(false);
    });
  });

  describe('Validate: when not giving the right input', function () {
    it('returns false when given undefined', function () {
      expect(luhn.validate(undefined)).to.equal(false);
    });

    it('returns false when given {}', function () {
      expect(luhn.validate({})).to.equal(false);
    });

    it('returns false when given "haha"', function () {
      expect(luhn.validate("haha")).to.equal(false);
    });

    it('returns false when given "123456789*"', function () {
      expect(luhn.validate("123456789*")).to.equal(false);
    });
  });

  describe('Generate: when generating a check digit with number input', function () {
    it('returns 0 when given 57', function () {
      expect(luhn.generateCheckDigit(57)).to.equal(0);
    });

    it('returns 7 when given 123456789', function () {
      expect(luhn.generateCheckDigit(123456789)).to.equal(7);
    });

    it('returns 0 when given "57"', function () {
      expect(luhn.generateCheckDigit("57")).to.equal(0);
    });

    it('returns 7 when given "123456789"', function () {
      expect(luhn.generateCheckDigit("123456789")).to.equal(7);
    });
  });

  describe('Generate: when generating a check digit with string input', function () {
    it('returns 0 when given "57"', function () {
      expect(luhn.generateCheckDigit("57")).to.equal(0);
    });

    it('returns 7 when given "123456789"', function () {
      expect(luhn.generateCheckDigit("123456789")).to.equal(7);
    });

    it('returns 7 when given "123 456 789"', function () {
      expect(luhn.generateCheckDigit("123 456 789")).to.equal(7);
    });

    it('returns 7 when given "123-456-789"', function () {
      expect(luhn.generateCheckDigit("123-456-789")).to.equal(7);
    });
  });

  describe('Generate: when generating a check digit with wrong input', function () {
    it('returns false when given "abc"', function () {
      expect(luhn.generateCheckDigit("abc")).to.equal(false);
    });

    it('returns false when given {}', function () {
      expect(luhn.generateCheckDigit("abc")).to.equal(false);
    });

    it('returns false when given undefined', function () {
      expect(luhn.generateCheckDigit(undefined)).to.equal(false);
    });

    it('returns false when given "123456789*"', function () {
      expect(luhn.generateCheckDigit("123456789*")).to.equal(false);
    });
  });
});
