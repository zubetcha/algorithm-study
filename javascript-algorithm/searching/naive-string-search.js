// 내 풀이

function naiveStringSearch(str1, str2) {
  let count = 0;

  for (let i = 0; i < str1.length - str2.length + 1; i++) {
    let sameChar = 0;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] === str2[j]) sameChar++;
    }
    if (sameChar === str2.length) count++
  }

  return count;
}

console.log(naiveStringSearch('zubetchacha', 'cha'))

// 강의

function naiveStringSearch2(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length) count++;      
    }
  }

  return count;
}