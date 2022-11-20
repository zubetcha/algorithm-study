## Frequency Counters

- Frequency Counters는 보통 `객체`를 사용하여 문자열이나 배열 같은 `선형 구조`의 내용을 분석한다.
- 중첩 반복문을 돌리지 않기 때문에 `O(N)`의 시간 복잡도를 가지고 있다.

```javascript
const same3 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};
```
