// 정렬되어 있는 숫자 배열에서 어떤 값의 인덱스를 찾아야 할 때

// naive solution
// 선형 탐색 -> O(N) 의 시간 복잡도를 가지고 있음
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

// refactor solution
// Log(N)의 시간복잡도
function binarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let curElement = arr[middle];

    if (curElement < val) {
      min = middle + 1;
    }
    if (curElement > val) {
      max = middle - 1;
    }
    if (curElement === val) {
      return middle;
    }
  }

  return -1;
}
