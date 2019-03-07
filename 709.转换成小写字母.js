/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = function (str) {
  return str.split('').map(item => item.toLowerCase()).join('');
};
// 测试用例 执行用时: 88 ms
const str = 'Hello';
console.log(toLowerCase(str));