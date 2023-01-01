// [1, 2, 1, 3, 1, 4, 1, 2];

function solution(topping) {
  let answer = 0;

  topping.forEach((el, i) => {
    const chulsoo = topping.slice(0, i + 1);
    const brother = topping.slice(i + 1);

    if ([...new Set(chulsoo)].length === [...new Set(brother)].length) {
      answer++;
    }
  });

  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 2, 3, 1, 4]));
