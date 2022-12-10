// [{ R: 0, T: 0}]

// choice / 4
// 0 -> 0
// < 1 -> 첫 번째 캐릭터 Math.abs(choice - 4) ++
// > 1 -> 두 번째 캐릭터 choice % 4 ++

function solution(survey, choices) {
  let answer = '';
  let countList = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  const getCharIndexAndPoint = (share, choice) => {
    if (share < 1) return { index: 0, point: Math.abs(choice - 4) };
    if (share > 1) return { index: 1, point: choice % 4 };
  };

  survey.forEach((question, i) => {
    const share = choices[i] / 4;

    if (share === 1) return;

    let targetIndex;
    const { index, point } = getCharIndexAndPoint(share, choices[i]);

    if (question === 'RT' || question === 'TR') {
      targetIndex = 0;
    }
    if (question === 'CF' || question === 'FC') {
      targetIndex = 1;
    }
    if (question === 'JM' || question === 'MJ') {
      targetIndex = 2;
    }
    if (question === 'AN' || question === 'NA') {
      targetIndex = 3;
    }

    countList[targetIndex][question[index]] += point;
  });

  countList.forEach((result) => {
    const keys = Object.keys(result);
    const values = Object.values(result);

    if (values[0] > values[1]) {
      answer += keys[0];
    }
    if (values[0] < values[1]) {
      answer += keys[1];
    }
    if (values[0] === values[1]) {
      answer += [...keys].sort()[0];
    }
  });

  return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
