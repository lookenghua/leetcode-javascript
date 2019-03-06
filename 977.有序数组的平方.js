/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
  A = A.sort((a, b) => {
    return Math.abs(a) - Math.abs(b);
  });
  return A.map(item => item * item);
};
//测试用例 测试结果:132 ms
console.log(sortedSquares([
  -4,
  -1,
  0,
  3,
  10]));