// 배열의 요소에 인덱스로 접근 -> O(1)
// 배열을 탐색 -> O(n)

// 추가와 제거는 어느 위치에 하느냐에 따라 달라짐
// 끝에 추가하거나 제거한다면 원래 있던 배열이 요소의 인덱스를 그대로 유지한 채 마지막 요소만 인덱싱 작업을 하므로 -> O(1)
// 앞에 추가한다면 원래 있었던 배열의 요소에 인덱스를 새로 배정해야 함 -> 요소마다 연산 -> O(n)
// 앞 요소를 제거하는 것도 마찬가지로 인덱스를 새로 배정해야 하기 때문에 O(n)

// DESCRIBE: 배열의 O(1) 메서드
// push, pop

// DESCRIBE: 배열의 O(N) 메서드
// shift, unshift, concat, slice, splice, forEach, map, filter, reduce ...

// DESCRIBE: 배열의 O(nlogn) 메서드
// sort
