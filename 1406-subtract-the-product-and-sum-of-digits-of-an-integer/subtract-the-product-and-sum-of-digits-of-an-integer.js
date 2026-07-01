/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = n.toString().split("").map(Number);
    let sum = 0
    let mult = 1

    for(let i = 0 ; i < arr.length ; i++ ){
    sum += arr[i]
    mult *= arr[i]
    }
    return mult - sum
};
