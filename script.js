function threeSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the input array in ascending order.
  let closestSum = Infinity; // Initialize the closest sum to a large value.

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum; // Update closest sum if the current sum is closer to the target.
      }

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return closestSum; // Found an exact match, no need to continue searching.
      }
    }
  }

  return closestSum;
}
