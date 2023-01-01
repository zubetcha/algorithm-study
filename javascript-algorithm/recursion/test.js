function solution(n, k) {
  let count = 1;
  let array = [n];
  let currNum = BigInt(n);

  while (currNum < Number.MAX_VALUE) {
    if (currNum % BigInt(k) == 0n) {
      return count;
    }

    count++;
    array.push(n);
    currNum = BigInt(array.join(''));
  }

  return -1;
}

console.log(solution(22, 9));
console.log(solution(25, 15))

console.log(BigInt(252525) % BigInt(15));
// console.log(Number(String(22) + String(22)))
