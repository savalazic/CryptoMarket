/* eslint-disable no-continue, no-restricted-syntax */
import includes from 'lodash/includes';

/**
 * creates an object with some keys excluded
 * replacement for lodash.omit for performance. does not mimick the entire lodash.omit api
 * @param {Object} originalObject - created object will be based on this object
 * @param {Array<String>} keys - an array of keys to omit from the new object
 * @returns {Object} new object with same properties as originalObject
 */
export const omit = (originalObject, keys = []) => {
  const newObject = {};
  for (const key in originalObject) {
    if (includes(keys, key)) {
      continue;
    }
    if (!Object.prototype.hasOwnProperty.call(originalObject, key)) {
      continue;
    }
    newObject[key] = originalObject[key];
  }
  return newObject;
};
