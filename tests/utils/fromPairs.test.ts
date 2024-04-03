import { fromPairs } from '../../src/utils';

describe('fromPairs()', () => {
  const pairs = [['a', 1], ['b', 2], ['c', 3]];
  const reversePairs = [[1, 'a'], [2, 'b'], [3, 'c']];

  it('should combine an array of two-element arrays into an object', () => {
    expect.assertions(2);

    expect(fromPairs(pairs)).toStrictEqual({ a: 1, b: 2, c: 3 });
    expect(fromPairs(reversePairs)).toStrictEqual({ 1: 'a', 2: 'b', 3: 'c' });
  });
});
