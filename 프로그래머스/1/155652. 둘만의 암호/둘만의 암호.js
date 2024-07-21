function solution(s, skip, index) {
  const resultCharList = [];
  const skipAppliedCharList = new Array(26)
      .fill(97)
      .map((charCode, i) => String.fromCharCode(charCode + i))
      .filter((char) => !skip.includes(char))
      .join('');
  
  for (let i = 0; i < s.length; i++) {
      const nextIndex = skipAppliedCharList.indexOf(s[i]) + index;
      const share = Math.floor(nextIndex / skipAppliedCharList.length);
      const targetIndex = nextIndex - (share * skipAppliedCharList.length);

      resultCharList.push(skipAppliedCharList[targetIndex]);
  }
  
  return resultCharList.join('');
}
