/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack.includes(needle)){
      let value = haystack.indexOf(needle)
      return value
    }else {
      return -1
    }
};