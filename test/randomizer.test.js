const Randomizer = require('../src/Randomizer');

describe('Randomizer', () => {
  let min, max, randomizer;

  describe('Randomizer.prototype.next', () => {
    it(`returns a random number from the [min, max) range specified during its construction`, () => {
      min = 1;
      max = 5;
      randomizer = new Randomizer(min, max);

      const randomNumber = randomizer.next();
      expect(randomNumber).toEqual(expect.any(Number));
      expect(randomNumber).toBeGreaterThanOrEqual(min);
      expect(randomNumber).toBeLessThan(max);
    });

    it(`throws an error if no more elements are left to return`, () => {
      min = 0;
      max = 0;
      randomizer = new Randomizer(min, max);

      expect(() => {
        randomizer.next();
      }).toThrow();

    });
  });

  describe('Randomizer.prototype.sequence', () => {
    it(`returns (n) random numbers from the [min, max) range specified during its construction,
        where n = the param passed to it during its call`, () => {
      min = 1;
      max = 5;
      randomizer = new Randomizer(min, max);

      const randomNumbers = randomizer.sequence(2);
      expect(randomNumbers).toEqual(expect.any(Array));
      randomNumbers.forEach(number => {
        expect(number).toBeGreaterThanOrEqual(min);
        expect(number).toBeLessThan(max);
      });
    });

    it(`throws an error if no more elements are left to return`, () => {
      min = 0;
      max = 0;
      randomizer = new Randomizer(min, max);

      expect(() => {
        randomizer.sequence();
      }).toThrow();
    });

    it(`throws an error if requested to return more elements than actually remains available`, () => {
      min = 0;
      max = 3;
      randomizer = new Randomizer(min, max);

      expect(() => {
        randomizer.sequence(4);
      }).toThrow();
    });
  });
});



