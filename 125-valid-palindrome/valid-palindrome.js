/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
let value = s.replace(/[^a-zA-Z0-9]/g, "").split("");
  let val = value.join(" ").replace(/\s/g, "").toLowerCase();

  let reverse = val.split("").reverse().join("");

  if(reverse === val){
    return true
  }else if (s === ""){
    return true
  }else {
    return false
  }

};