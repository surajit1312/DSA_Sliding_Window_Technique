console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ Leetcode 643. Maximum Average Subarray I    ~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);
console.log("Link: https://leetcode.com/problems/maximum-average-subarray-i");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxSum = 0;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  maxSum = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum + nums[i] - nums[i - k];
    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }
  return maxSum / k;
};

const input1 = [1, 12, -5, -6, 50, 3];
const k1 = 4;
let ans1 = findMaxAverage(input1, k1);
console.log(
  "Maximum average of sub-arrays of length " +
    k1 +
    " in [" +
    input1 +
    "] is : " +
    ans1
);

const input2 = [5];
const k2 = 1;
let ans2 = findMaxAverage(input2, k2);
console.log(
  "Maximum average of sub-arrays of length " +
    k2 +
    " in [" +
    input2 +
    "] is : " +
    ans2
);
