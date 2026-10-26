/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
 let result = [] 

  for(let i = 0 ; i < nums.length ; i += 2){
    let count = nums[i]
    let value = nums[i + 1]

    let arr = Array(count).fill(value)

    result = result.concat(arr)
  }

  return result
};
