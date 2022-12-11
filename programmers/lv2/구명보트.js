// Greedy
function solution(people, limit) {
  let answer = 0;
  let sortedStuff = people.sort((a, b) => a - b);

  while (sortedStuff.length !== 0) {
    if (sortedStuff[0] + sortedStuff[sortedStuff.length - 1] <= limit) {
      answer++;
      sortedStuff.shift();
      sortedStuff.pop();
    } else {
      answer++;
      sortedStuff.pop();
    }
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
