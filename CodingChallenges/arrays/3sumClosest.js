const threeSumClosest = (nums, target) => {
  // Sort nums array
  nums.sort((a, b) => a - b);

  let result = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let next = i + 1;
    let last = nums.length - 1;

    while (next < last) {
      const sum = nums[i] + nums[next] + nums[last];
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
      if (sum < target) {
        next += 1;
      } else {
        last -= 1;
      }
    }
  }

  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
