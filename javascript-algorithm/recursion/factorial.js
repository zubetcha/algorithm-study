// factorial 함수
const factorial = (num) => {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
};

console.log('factorial', factorial(4));

// 재귀로 작성해보기

const recursiveFactorial = (num) => {
  if (num === 1) return 1; // 종료 조건
  return num * recursiveFactorial(num - 1);
};

console.log('recursive factorial', recursiveFactorial(4));
