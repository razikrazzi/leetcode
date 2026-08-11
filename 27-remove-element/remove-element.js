/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
let demo = nums.filter(num => num !== val)
for (let i = 0; i < demo.length; i++) {
    nums[i] = demo[i];
}
return demo.length
};