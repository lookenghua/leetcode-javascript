/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
  let time = 0;
  const arr1 = J.split('');
  arr1.forEach(item => {
    const re = new RegExp(item, 'g');
    time += S.match(re) ? S.match(re).length : 0;
  });
  return time;
};
//测试用例 测试结果148ms
const J = 'aA', S = 'aAAbbbb';
console.log(numJewelsInStones(J, S));