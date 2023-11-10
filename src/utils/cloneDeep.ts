interface GenericObject {
  [key: string]: any;
}

function cloneDeep<T extends object = object>(obj: T) {
  return (function _cloneDeep(
    item: T
  ): T | Date | Set<unknown> | Map<unknown, unknown> | object | T[] {
    // Handle:
    // * null
    // * undefined
    // * boolean
    // * number
    // * string
    // * symbol
    // * function
    if (item === null || typeof item !== 'object') {
      return item;
    }

    // Handle:
    // * Date
    if (item instanceof Date) {
      return new Date(item.valueOf());
    }

    // Handle:
    // * Array
    if (item instanceof Array) {
      let copy: any = [];

      item.forEach((_, i) => ((copy as any)[i] = _cloneDeep(item[i])));

      return copy;
    }

    // Handle:
    // * Set
    if (item instanceof Set) {
      let copy = new Set();

      item.forEach((v) => copy.add(_cloneDeep(v)));

      return copy;
    }

    // Handle:
    // * Map
    if (item instanceof Map) {
      let copy = new Map();

      item.forEach((v, k) => copy.set(k, _cloneDeep(v)));

      return copy;
    }

    // Handle:
    // * Object
    if (item instanceof Object) {
      let copy: any = {};

      // Handle:
      // * Object.symbol
      Object.getOwnPropertySymbols(item).forEach((s: any) => {
        // @ts-ignore
        return (copy[s] = _cloneDeep(item[s]));
      });

      // Handle:
      // * Object.name (other)
      Object.keys(item).forEach((k) => {
        // @ts-ignore
        return (copy[k] = _cloneDeep(item[k]));
      });

      return copy;
    }

    throw new Error(`Unable to copy object: ${item}`);
  })(obj);
}

export default cloneDeep;
