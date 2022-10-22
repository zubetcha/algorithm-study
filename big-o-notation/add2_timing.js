function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const t1 = +new Date();

addUpTo(1000000000);

const t2 = +new Date();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
