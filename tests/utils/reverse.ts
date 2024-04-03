import reverse from '../../src/utils/reverse';

describe('reverse()', () => {
  it('should reverse an array items', () => {
    expect.assertions(1);
    const arr = [1, 2, 3];

    expect(reverse(arr)).toStrictEqual([3, 2, 1]);
  });

  it('should\'n reverse an array with conditional', () => {
    expect.assertions(1);
    const arr = [1, 2, 3];

    expect(reverse(arr, false)).toStrictEqual([1, 2, 3]);
  });

  it('should reverse an array with mixed items', () => {
    expect.assertions(1);
    const mixedArr = [1, 'Foo', { a: 1 }, 3];

    expect(reverse(mixedArr)).toStrictEqual([3, { a: 1 }, 'Foo', 1]);
  });
});
