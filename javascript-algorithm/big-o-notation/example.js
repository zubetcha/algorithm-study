function logAtLeast5(n) {
  for (let i = 1; i < Math.max(5, n); i++) {
    console.log(i);
  }
}
// n이 커질수록 반복문을 도는 횟수도 증가하기 때문에 실행 시간이 n에 비례 -> O(n)

function logAtMost5(n) {
  for (let i = 1; i < Math.min(5, n); i++) {
    console.log(i);
  }
}

// n이 커져도 반복 횟수에 영향을 주지 않음 -> O(1)
