function solution(left, right) {
  const length = right - left + 1

  let arrFromLeftToRight = Array.from({ length }, (_, i) => left + i)

  let countPlus = 0
  let countMinus = 0
  for (let num = left; num <= right; num++) {
    let countDivisors = 0

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        countDivisors++
      }
    }
    if (countDivisors % 2 === 0) {
      countPlus += num
    } else {
      countMinus += num
    }
  }
  return countPlus - countMinus
}