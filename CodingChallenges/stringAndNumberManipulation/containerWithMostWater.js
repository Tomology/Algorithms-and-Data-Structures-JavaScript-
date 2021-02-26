const maxArea = (height) => {
  let maxArea = 0;
  let aPointer = 0;
  let bPointer = height.length - 1;

  while (aPointer < bPointer) {
    if (height[aPointer] < height[bPointer]) {
      maxArea = Math.max(maxArea, height[aPointer] * (bPointer - aPointer));
      aPointer++;
    } else {
      maxArea = Math.max(maxArea, height[bPointer] * (bPointer - aPointer));
      bPointer--;
    }
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
