/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

  let value = nums.map((num) => num * num)

  let result = value.sort((a,b) => a - b)

  return result
};