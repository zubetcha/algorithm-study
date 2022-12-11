// ["banana", "apple", "rice", "pork", "pot"]
// [3, 2, 2, 2, 1]
// ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
// 3

function solution(want, number, discount) {
  const totalSum = number.reduce((acc, cum) => acc + cum);
  let answer = 0;
  let newWant = {};
  let counts = [];

  want.forEach((item, i) => (newWant[item] = number[i]));

  for (let i = 0; i < discount.length - totalSum + 1; i++) {
    let count = {};
    for (let j = i; j < i + totalSum; j++) {
      const currCount = count[discount[j]];
      currCount ? (count[discount[j]] += 1) : (count[discount[j]] = 1);
    }

    counts.push(count);
  }

  counts.forEach((count) => {
    if (
      Object.entries(count).every(([item, qty]) => {
        return qty === newWant[item];
      })
    ) {
      answer++;
    }
  });

  return answer;
}

console.log(solution(['banana', 'apple', 'rice', 'pork', 'pot'], [3, 2, 2, 2, 1], ['chicken', 'apple', 'apple', 'banana', 'rice', 'apple', 'pork', 'banana', 'pork', 'rice', 'pot', 'banana', 'apple', 'banana']));
