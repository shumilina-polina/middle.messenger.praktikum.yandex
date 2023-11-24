import { expect } from 'chai';
import set from './set';
import merge from './merge';
import isEqual from './isEqual';
import cloneDeep from './cloneDeep';
import { formatTime } from './formatTime';

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

  it('should set value by path if passed object has an array', () => {
    const obj = { a: 1, b: [{ a: 2 }, 3] };
    const path = 'b.0.a';
    const value = 4;

    const result = set(obj, path, value);

    expect(result).to.have.nested.property(path).that.equals(value);
  });

  it('should set value by path if passed object does not have that path', () => {
    const obj = { a: 1, b: { a: 2 } };
    const path = 'c.d';
    const value = 4;

    const result = set(obj, path, value);

    expect(result).to.have.nested.property(path).that.equals(value);
  });

  it('should set value by path if value is null', () => {
    const obj = { a: 1, b: { a: 2 } };
    const path = 'b.a';
    const value = null;

    const result = set(obj, path, value);

    expect(result).to.have.nested.property(path).that.equals(null);
  });

  it('should set value by path if value is object', () => {
    const obj = { a: 1, b: { a: 2 } };
    const path = 'b.a';
    const value = { c: 7 };

    const result = set(obj, path, value);

    expect(result)
      .to.have.nested.property(path + '.c')
      .that.equals(7);
  });

  it('should set value by adding empty string key if path is empty string', () => {
    const obj = { a: 1, b: { a: 2 } };
    const path = '';
    const value = 4;

    const result = set(obj, path, value);

    expect(result).to.have.own.property('').that.equals(value);
  });

  it('should set value by path if path is stringify number', () => {
    const obj = { a: 1, b: { a: 2 } };
    const path = '37467';
    const value = 3;

    const result = set(obj, path, value);
    expect(result).to.have.nested.property(path).that.equals(value);
  });
});

describe('merge function', () => {
  it('should merge two objects', () => {
    const lhs = { a: 1, b: { a: 2 } };
    const rhs = { c: 1, b: { a: 2 } };

    const result = merge(lhs, rhs);

    expect(result).to.deep.equal({ a: 1, c: 1, b: { a: 2 } });
  });

  it('should return second object if first is empty', () => {
    const lhs = {};
    const rhs = { c: 1, b: { a: 2 } };
    const result = merge(lhs, rhs);

    expect(result).to.deep.equal(rhs);
  });

  it('should return empty object if both objects are is empty', () => {
    const lhs = {};
    const rhs = {};
    const result = merge(lhs, rhs);

    expect(result).to.deep.equal({});
  });

  it('should mutate original lhs object', () => {
    const lhs = { c: 3 };
    const rhs = { c: 1, b: { a: 2 } };

    const result = merge(lhs, rhs);

    expect(result).to.equal(lhs);
  });

  it('should throw an error if lhs param is not a real object', () => {
    const lhs = 4;
    const rhs = { c: 1, b: { a: 2 } };

    //@ts-expect-error
    const fn = () => merge(lhs, rhs);

    expect(fn).to.throw(Error);
  });

  it('should return original lhs object if rhs is number', () => {
    const lhs = { c: 1, b: { a: 2 } };
    const rhs = 3;

    //@ts-expect-error
    expect(merge(lhs, rhs)).to.equal(lhs);
  });

  it('should throw an error if lhs param is null', () => {
    const lhs = null;
    const rhs = { a: 2 };

    //@ts-expect-error
    const fn = () => merge(lhs, rhs);

    expect(fn).to.throw(Error);
  });
});

describe('isEqual function', () => {
  it('should return false if objects are not deep equal', () => {
    const lhs = { a: 1, b: { a: 2 } };
    const rhs = { c: 1, b: { a: 2 } };

    const result = isEqual(lhs, rhs);
    expect(result).to.be.false;
  });

  it('should return true if objects are deep equal', () => {
    const lhs = { a: 1, b: { a: 2 } };
    const rhs = { a: 1, b: { a: 2 } };

    const result = isEqual(lhs, rhs);
    expect(result).to.be.true;
  });

  it('should return true if both objects are empty', () => {
    const lhs = {};
    const rhs = {};

    const result = isEqual(lhs, rhs);

    expect(result).to.be.true;
  });

  it('should return true if equal objects have negative values', () => {
    const lhs = { a: -1 };
    const rhs = { a: -1 };

    const result = isEqual(lhs, rhs);

    expect(result).to.be.true;
  });

  it('should return true if not equal objects have negative values', () => {
    const lhs = { a: 1 };
    const rhs = { a: -1 };

    const result = isEqual(lhs, rhs);

    expect(result).to.be.false;
  });

  it('should return false if one of not equal objects has an array', () => {
    const lhs = { a: 1 };
    const rhs = { a: [1] };

    const result = isEqual(lhs, rhs);

    expect(result).to.be.false;
  });

  it('should return true if equal objects have an equal arrays', () => {
    const lhs = { a: { b: [1, 4, 5] } };
    const rhs = { a: { b: [1, 4, 5] } };

    const result = isEqual(lhs, rhs);

    expect(result).to.be.true;
  });

  it('should return true if equal objects have an non-equal arrays', () => {
    const lhs = { a: { b: [1, 4, 5] } };
    const rhs = { a: { b: [1, 5, 4] } };

    const result = isEqual(lhs, rhs);

    expect(result).to.be.false;
  });

  it('should return true if equal objects have an equal arrays with object elem', () => {
    const lhs = { a: { b: [1, 4, { c: 4 }] } };
    const rhs = { a: { b: [1, 4, { c: 4 }] } };

    const result = isEqual(lhs, rhs);

    expect(result).to.be.true;
  });
});

describe('cloneDeep function', () => {
  it('should clone deep object', () => {
    const obj = { a: 1, b: { a: 2 } };
    const result = cloneDeep(obj);

    expect(result).to.deep.equal(obj);
  });

  it('should return empty object if object is empty', () => {
    const obj = {};
    const result = cloneDeep(obj);

    expect(result).to.deep.equal(obj);
  });

  it('should not mutate original object', () => {
    const obj = { a: 1, b: { a: 2 } };
    const result = cloneDeep(obj);

    expect(result).to.not.equal(obj);
  });

  it('should return null if object param is null', () => {
    const obj = null;

    //@ts-expect-error
    const result = cloneDeep(obj);

    expect(result).to.equal(obj);
  });

  it('should clone deep object if it includes an array', () => {
    const obj = { a: [1, 2, 3] };

    const result = cloneDeep(obj);

    expect(result).to.deep.equal(obj);
  });

  it('should return object if it is not a real object', () => {
    const obj = 34;

    //@ts-expect-error
    const result = cloneDeep(obj);

    expect(result).to.equal(obj);
  });

  it('should clone deep object if is has Date', () => {
    const obj = { a: 1, b: Date.now() };

    const result = cloneDeep(obj);

    expect(result).to.deep.equal(obj);
  });

  it('should clone deep object if is has non-empty Map', () => {
    const obj = { a: 1, b: new Map() };
    obj.b.set('a', 3);

    const result = cloneDeep(obj);

    expect(result).to.deep.equal(obj);
  });

  it('should clone deep object if is has non-empty Set', () => {
    const obj = { a: 1, b: new Set([2, 5, 5]) };

    const result = cloneDeep(obj);

    expect(result).to.deep.equal(obj);
  });
});

describe('formatTime function', () => {
  it('should return NaN string if param is json stringify data', () => {
    const dateStr = JSON.stringify(Date.now());
    const result = formatTime(dateStr);

    expect(result).to.equal('NaN.NaN.N');
  });

  it('should return NaN string if param is empty string', () => {
    const dateStr = '';
    const result = formatTime(dateStr);

    expect(result).to.equal('NaN.NaN.N');
  });

  it('should return date if date is not today', () => {
    const dateStr = '2023-11-13T12:42:26+00:00';
    const result = formatTime(dateStr);

    expect(result).to.equal('13.11.23');
  });

  it('should return time if date is today', () => {
    const today = new Date(Date.now());
    const result = formatTime(`${today}`);

    expect(result).to.equal(`${today.getHours()}:${today.getMinutes()}`);
  });

  it('should return NaN string if cant format data', () => {
    const dateStr = '2023-23T13:32:31+00:00';
    const result = formatTime(dateStr);

    expect(result).to.equal('NaN.NaN.N');
  });
});
