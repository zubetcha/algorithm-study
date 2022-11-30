// 내 풀이
function binarySearch(array, value) {
  let min = 0;
  let max = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    let middle = Math.floor((min + max) / 2);

    if (array[i] === value) {
      return i;
    }
    if (value < array[middle]) {
      max = middle - 1;
    }
    if (value > array[middle]) {
      min = middle + 1;
    }
  }

  return -1;
}

// 강의
function binarySearch2(arr, elem) {
  let start = 0;
  let end = arr.length -1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    elem < arr[middle] ? end = middle - 1 : start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === elem ?  middle : -1;
}