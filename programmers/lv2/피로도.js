// 80
// [[80,20],[50,40],[30,10]]
// 3

// 순서의 경우의 수?
// 각 순서대로 진행했을 때 탐험할 수 있는 던전의 수 중 가장 큰 수

function solution(k, dungeons) {
  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      // 해당하는 fixed를 제외한 나머지 배열
      const permutations = getPermutations(rest, selectNumber - 1);
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((el) => [fixed, ...el]);
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached);
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
  };

  const getCount = (initial, dungeons) => {
    let count = 0;
    let rest = initial;

    for (let i = 0; i < dungeons.length; i++) {
      const [necessary, consumtion] = dungeons[i];

      if (rest < necessary) return count;

      count++;
      rest -= consumtion;
    }

    return count;
  };

  const results = getPermutations(dungeons, dungeons.length);
  return Math.max(...results.map((arr) => getCount(k, arr)));
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
