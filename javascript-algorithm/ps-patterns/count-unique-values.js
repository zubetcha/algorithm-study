// 내 풀이
const countUniqueValues = (arr) => {
  if (!arr.length) {
    return 0;
  }

  return arr.filter((x, i) => x !== arr[i + 1]).length;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

const countUniqueValues2 = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
};
