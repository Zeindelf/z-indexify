import zIndexify from '../src/zIndexify';

describe('zIndexify()', () => {
  const arr = ['foo', 'bar', 'xyz'];

  it('should create an object with key => values', () => {
    expect.assertions(1);
    const zIndexes = zIndexify(arr);

    expect(zIndexes).toStrictEqual({ foo: '100', bar: '101', xyz: '102' });
  });

  it('should create an object started with index given', () => {
    expect.assertions(1);
    const zIndexes = zIndexify(arr, { minIndex: 500 });

    expect(zIndexes).toStrictEqual({ foo: '500', bar: '501', xyz: '502' });
  });

  it('should create an object with key => values on inverse order given', () => {
    expect.assertions(1);
    const zIndexes = zIndexify(arr, { inverse: true });

    expect(zIndexes).toStrictEqual({ foo: '102', bar: '101', xyz: '100' });
  });

  it('should return values steped by 100', () => {
    expect.assertions(1);
    const zIndexes = zIndexify(arr, { step: 100 });

    expect(zIndexes).toStrictEqual({ foo: '100', bar: '200', xyz: '300' });
  });

  it('should return all options', () => {
    expect.assertions(1);
    const options = {
      minIndex: 1000,
      inverse: true,
      step: 500,
    };
    const zIndexes = zIndexify(arr, options);

    expect(zIndexes).toStrictEqual({ foo: '2000', bar: '1500', xyz: '1000' });
  });
});
