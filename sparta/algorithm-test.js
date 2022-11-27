const solutionHa = (arr) => {
  const obj = {
    0: '모',
    1: '도',
    2: '개',
    3: '걸',
    4: '윷',
  };

  return obj[arr.filter((x) => x === 0).length];
};

const solutionJoong = (num) => {
  const getStar = (num) => {
    return num * 2 + 1;
  };

  for (let i = 0; i < num; i++) {
    const starCount = getStar(i);
    const blankCount = Math.trunc(getStar(num - 1) / 2) - i;

    let result = '';

    for (let i = 0; i < starCount + blankCount; i++) {
      result += i >= blankCount ? '*' : ' ';
    }

    console.log(result);
  }
};

solutionJoong(3);
solutionJoong(5);

const solutionSang = (arr) => {
  const getCondition = (value, additionalIndex) => {
    if (value === undefined) {
      return 0;
    }

    return typeof additionalIndex === 'number' ? value[additionalIndex] : value;
  };

  arr.forEach((x, i) => {
    let result = '';

    x.forEach((y, j) => {
      const conditions = [getCondition(arr[i - 1], j), getCondition(x[j - 1]), getCondition(x[j + 1]), getCondition(arr[i + 1], j)];
      const needToReplace = conditions.every((x) => x < y);

      result += needToReplace ? '*' : y;
    });

    console.log(result);
  });
};

// console.log(
//   solutionSang([
//     [7, 4, 6, 5, 9],
//     [6, 1, 3, 4, 5],
//     [4, 8, 5, 6, 9],
//     [1, 3, 0, 6, 4],
//     [6, 4, 8, 1, 7],
//   ])
// );

// console.log(
//   solutionSang([
//     [3, 4, 1, 4, 9],
//     [2, 9, 4, 5, 8],
//     [9, 0, 8, 2, 1],
//     [7, 0, 2, 8, 4],
//     [2, 7, 2, 1, 4],
//   ])
// );
