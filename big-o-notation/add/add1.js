function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

// 연산의 갯수가 n의 크기에 달려 있음
// O(n)
