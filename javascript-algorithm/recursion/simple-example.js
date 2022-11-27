const countDown = (num) => {
  // 종료 조건
  if (num <= 0) {
    console.log('All done!');
    return; // 종료시키기 위해서는 return 키워드가 있어야 함
  }

  console.log(num);
  num--;
  countDown(num);
};

// countDown(5);

const sumRange = (num) => {
  console.log(num);
  if (num === 1) return 1; // 종료 조건
  return num + sumRange(num - 1);
};

console.log(sumRange(4));
// 콜 스택에 차례대로 쌓이는 구조 -> 거꾸로 역산
// sumRange(4)
// 4 + sumRange(3)
//     3 + sumRange(2)
//         2 + sumbRange(1)
//             1
//         2 + 1
//     3 + 3
// 4 + 6
// 10
