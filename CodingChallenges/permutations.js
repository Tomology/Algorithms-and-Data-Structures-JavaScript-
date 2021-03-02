const permute = (nums) => {
  const result = [];

  // base case
  if (nums.length === 1) {
    return [...nums];
  }

  for (let i = 0; i < nums.length; i++) {
    let num = nums.pop(0);

    let permutations = permute(nums);

    for (let perm of permutations) {
      permutations.push(num);
    }

    result.push(permutations);
    nums.push(num);
  }

  return result;
};

console.log(permute([1, 2, 3]));
