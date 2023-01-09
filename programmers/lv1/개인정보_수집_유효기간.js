// today: 오늘 날짜, "YYYY-MM-DD"
// terms: 약관의 유효 기간을 담은 1차원 문자열 배열, "약관 종류 유효기간"
// privacies: 수집된 개인정보의 정보를 담은 1차원 문자열 배열, "날짜 약관 종류"

// output: today 기준 파기해야 할 개인정보의 번호를 오름차순으로 담은 1차원 정수 배열

function solution(today, terms, privacies) {
  const validity = Object.fromEntries(terms.map(terms => terms.split(" ")));

  const result = privacies.map((privacy, i) => {
    const [date, terms] = privacy.split(" ");
    const exp = getNumOfDays(date) + validity[terms] * 28;

    if (exp <= getNumOfDays(today)) {
      return i + 1;
    }
  })

  return result.filter(num => num !== undefined).sort((a, b) => b - a);
}

function getNumOfDays(date) {
  const [y, m, d] = date.split(".").map(x => Number(x));

  return (y * 12  + m - 1) * 28 + d
}
