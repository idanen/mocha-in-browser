import { primeFactors } from '../prime-factors.js';

describe('primeFactors', () => {
  const expectations = {
    1: [],
    2: [2],
    3: [3],
    4: [2, 2],
    5: [5],
    6: [2, 3],
    7: [7],
    8: [2, 2, 2],
    9: [3, 3],
    10: [2, 5],
    27: [3, 3, 3],
    125: [5, 5, 5]
  };

  Object.keys(expectations).forEach(numberStr => {
    const expectation = expectations[numberStr];
    const number = parseInt(numberStr, 10);
    it(`finds prime factors of ${number}`, () => {
      expect(primeFactors(number)).to.deep.equal(expectation);
    });
  });

  it('finds prime factors of a really large number', () => {
    expect(primeFactors(2 * 2 * 3 * 5 * 7 * 7 * 11 * 11 * 13 * 13))
      .to.deep.equal([2, 2, 3, 5, 7, 7, 11, 11, 13, 13]);
  });
});
