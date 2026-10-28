/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  let max = 0

  for(let i = 0 ; i < sentences.length ; i++ ){
    var sent1 = sentences[i].split(" ")
    var length = sent1.length

    
  if(length > max){
    max = length
  }
  }
 

  return max
    
};