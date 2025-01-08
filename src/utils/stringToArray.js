// 字符串 => 数组
export const stringToArray = (str, separator = ',') => {
  // 优先处理报错
  if (str === null || str === undefined) {
    console.error('[Error] stringToArray.js: param is null or undefined!');
    return null;
  }

  if ((typeof str).toLowerCase() !== 'string') {
    console.error('[Error] stringToArray.js: param is not a string!');
    return null;
  }

  const raw = str.trim();
  if (raw === '') {
    console.error('[Error] stringToArray.js: param is empty!');
    return null;
  }

  return raw.split(separator);
};

// export default stringToArray;
