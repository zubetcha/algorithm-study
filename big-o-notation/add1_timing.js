function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

const t1 = +new Date();

addUpTo(1000000000);

const t2 = +new Date();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
