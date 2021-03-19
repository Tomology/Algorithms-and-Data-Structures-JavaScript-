var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArr = [];

  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArr.push(nums1[i]);
      i++;
    } else {
      mergedArr.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    mergedArr.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    mergedArr.push(nums2[j]);
    j++;
  }
  let mid = mergedArr.length / 2;
  if (mid % 1 === 0) {
    return (mergedArr[mid] + mergedArr[mid - 1]) / 2;
  } else {
    return mergedArr[Math.floor(mid)];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
