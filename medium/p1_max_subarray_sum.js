console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~ LeetCode 53. Maximum Subarray ~~~~~~~~~~~~~~~~~~~~~~~~~~~"
);

/**
 * Brute-Force approach
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayBruteForce = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum > max) {
        max = currentSum;
      }
      if (currentSum < 0) {
        currentSum = 0;
      }
    }
  }
  return max;
};

/**
 * Optimal Approach (Using Kadane's Algorithm)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum < 0) {
      currentSum = 0;
    }
    if (currentSum > max) {
      max = currentSum;
    }
  }
  return max;
};

const type1 = "Brute-Force approach";
const type2 = "Optimal Approach (Using Kadane's Algorithm)";

const input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let ans1 = maxSubArrayBruteForce(input1);
console.log(type1 + ": Maximum sub-array sum in [" + input1 + "] is : " + ans1);

let res1 = maxSubArray(input1);
console.log(type2 + ": Maximum sub-array sum in [" + input1 + "] is : " + res1);

const input2 = [5, 4, -1, 7, 8];
const ans2 = maxSubArrayBruteForce(input2);
console.log(type1 + ": Maximum sub-array sum in [" + input2 + "] is : " + ans2);

let res2 = maxSubArray(input2);
console.log(type2 + ": Maximum sub-array sum in [" + input2 + "] is : " + res2);
