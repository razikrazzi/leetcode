/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let zero = []
  let count = ""

  for(let i = 0 ; i < nums.length ; i++){
    
    if(nums[i] === 0){
      zero.push(nums[i])
      count++

       nums.splice(i,1); 
       i-- 
    }
     
 
  }



  nums.push(...zero)


  console.log(nums)
    
};