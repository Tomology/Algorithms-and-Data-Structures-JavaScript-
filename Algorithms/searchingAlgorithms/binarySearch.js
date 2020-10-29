// Time Complexity: O(log n)
// Note:            Needs to be a sorted array

function binarySearch(arr, elem) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (arr[mid] === elem) {
      return mid;
    } else if (arr[mid] < elem) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
}
