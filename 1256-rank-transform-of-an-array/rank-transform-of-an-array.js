/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
let sorted = [...arr].sort((a,b) => a - b)
  let value = [...new Set(sorted)]
  
  let rank = new Map();

  value.forEach((num,index) => (
    rank.set(num,index + 1)
  ))

  let result = arr.map((num) => (
    rank.get(num)
  ))
  
  

  return result
  
    
};