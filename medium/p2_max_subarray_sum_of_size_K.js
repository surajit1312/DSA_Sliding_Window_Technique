console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ Maximum Sum of Subarrays With Length K ~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log(
  "Link: https://www.codingninjas.com/studio/problems/maximum-of-all-subarrays-of-size-k_1170789"
);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let maxSum = 0;
  let windowSum = 0;
  if (nums.length < k) {
    return;
  }
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  maxSum = windowSum;
  if (nums.length === k) {
    return maxSum;
  }
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum + nums[i] - nums[i - k];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }
  return maxSum;
};

const input1 = [1, 5, 4, 2, 9, 9, 9];
const k1 = 3;
let ans1 = maximumSubarraySum(input1, k1);
console.log(
  "Maximum sum of sub-arrays with length " +
    k1 +
    " in [" +
    input1 +
    "] is : " +
    ans1
);

const input2 = [1, 1, 1, 7, 8, 9];
const k2 = 3;
let ans2 = maximumSubarraySum(input2, k2);
console.log(
  "Maximum sum of sub-arrays with length " +
    k2 +
    " in [" +
    input2 +
    "] is : " +
    ans2
);

const input3 = [4, 4, 4];
const k3 = 3;
let ans3 = maximumSubarraySum(input3, k3);
console.log(
  "Maximum sum of sub-arrays with length " +
    k3 +
    " in [" +
    input3 +
    "] is : " +
    ans3
);
