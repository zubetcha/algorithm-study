// upper 65 - 90
// lower 97 - 122
// charCodeAt / fromCharCode

// 65, 97
// 26

// (charCode + n - 65) % 26 + 65

function solution(s, n) {
  let answer = '';

  const getChar = (charCode, firstCode) => {
    if (charCode === 32) {
      return ' ';
    }
    if (charCode !== 32) {
      return String.fromCharCode(((charCode + n - firstCode) % 26) + firstCode);
    }
  };

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    const firstCode = charCode < 91 ? 65 : 97;

    answer += getChar(charCode, firstCode);
  }

  return answer;
}

console.log(solution('AB', 1));
