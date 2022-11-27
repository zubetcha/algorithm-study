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
