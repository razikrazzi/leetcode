/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
let value1 = word1.join("")
let value2 = word2.join("")  
if(value1 === value2){
  return true
}else{
  return false
}
    

};