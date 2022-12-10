// 오브젝트 리터럴
// 값이 없으면 -1,
// 갈아끼워질 때는 index

function solution(s) {
  let recentIndex = {};
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    const index = recentIndex[s[i]];

    index !== undefined ? answer.push(i - index) : answer.push(-1);
    recentIndex[s[i]] = i;
  }

  return answer;
}

console.log(solution('aaa'));
