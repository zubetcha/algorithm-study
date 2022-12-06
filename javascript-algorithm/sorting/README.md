## 정렬이란

- 배열 등의 컬렉션에 있는 아이템들을 재배치하는 것
  - 숫자 오름차순 or 내림차순
  - 알파벳수능로
  - 연도별
  - 수익별

```javascript
function sort(arr) {
  return arr;
}

sort([23, 45, 6, 12, 13]); // [6, 12, 13, 23, 45]
```

## Objective

- 버블 정렬 구현
- 선택 정렬 구현
- 삽입 정렬 구현

## Javascript 내장 sort 메서드

배열의 내장 메서드인 sort는 기본 정렬 순서를 문자열 유니코드(Unicode)의 코드 포인트에 따른다.

- 배열의 모든 항목이 문자열로 변환된다.
- 해당 문자열의 유니코드 값이 선택된다.
- 그 다음 항목이 정렬된다.

```javascript
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort();
// ['Algorithms', 'Colt', 'Data Structures', 'Steele']

[6, 4, 15, 10].sort();
// [10, 15, 4, 6]
```