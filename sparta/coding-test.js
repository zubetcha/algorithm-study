function isPossible(a, b, c, d) {
  const queue = [];

  queue.push([a, b]);

  while (queue.length > 0) {
    const [x, y] = queue.pop();
    // console.log(queue);
    console.log(x, y);

    if (x === c && y === d) {
      return 'Yes';
    }

    // if (x > c && y > d) {
    //   return 'No';
    // }

    const dx = [0, y];
    const dy = [x, 0];

    for (let i = 0; i < 2; i++) {
      const nextX = x + dx[i];
      const nextY = y + dy[i];

      // 2, 10

      queue.push([nextX, nextY]);
    }
  }

  return 'No';
}

console.log(isPossible(2, 2, 2, 20));
