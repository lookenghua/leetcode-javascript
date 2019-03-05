/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
  let url = random();
  map[url] = longUrl;
  return 'http://tinyurl.com/' + url;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
  const code= shortUrl.replace('http://tinyurl.com/','');
  return map[code];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */


const random = function () {
  const arr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'];
  let str = '';
  for (let i = 0; i < 6; i++) {
    str += arr[Math.floor(Math.random() * 62)];
  }
  return str;
};
const map = {};
// 测试用例 测试结果80ms
console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));