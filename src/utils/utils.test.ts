import { expect } from 'chai';
import set from './set';

describe('set function', () => {
  it('should return object argument if passed object is not a real object', () => {
    const notAnObject = null;
    const path = 'a.b';
    const value = 1;

    expect(set(notAnObject, path, value)).to.equal(notAnObject);
  });

  it('should throw an error if path param is not a string', () => {
    const path = 123;
    const obj = {};

    //@ts-expect-error
    const fn = () => set(obj, path, 123);

    expect(fn).to.throw(Error);
  });

  it('should set value by path', () => {
    const obj = { a: 123, b: { a: 345 } };
    const path = 'b.a';
    const value = 123;

    const result = set(obj, path, value);

    expect(result).to.have.nested.property(path).that.equals(value);
  });

  it('should mutate original object', () => {
    const obj = { a: 123, b: { a: 345 } };
    const path = 'b.a';
    const value = 123;

    const result = set(obj, path, value);

    expect(result).to.equal(obj);
  });
});
