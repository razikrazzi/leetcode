/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let value = nums1.filter((num) => nums2.includes(num))
    let res = new Set(value)
      return [...res]
    
};