/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    
    let value = s.trim().split(" ")

  let result = value.at(-1)

    return result.length
};