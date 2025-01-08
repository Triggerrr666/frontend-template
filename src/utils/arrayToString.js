// 数组 => 字符串
export const arrayToString = (arr, separator = ',') => {
  if (arr === null || arr === undefined) {
    console.error('[Error] arrayToString.js: param is null or undefined!');
    return null;
  }

  if (!Array.isArray(arr)) {
    console.error('[Error] arrayToString.js: param is not an array!');
    return null;
  }

  if (arr.length === 0) {
    console.warn('[Warn] arrayToString.js: array is empty.');
  }

  return arr.join(separator);
};
