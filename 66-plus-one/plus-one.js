/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  let num = digits.join("")
  let num1 = BigInt(num)
  
  let res = num1 + 1n

  let result = res.toString().split("")
  let out = result.map((num) => Number(num) )
  return out ;
    
};