/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {

  let sorted = [...score].sort((a,b) => b - a)

  for(let i = 0 ; i < score.length; i++){

    let rank = sorted.indexOf(score[i])

    if(rank === 0){
      score[i] = "Gold Medal"
    }else if (rank === 1){
      score[i] = "Silver Medal"
    }else if (rank === 2){
      score[i] = "Bronze Medal"
    }else if (rank === 3){
      score[i] = "4"
    }else if (rank === 4){
      score[i] = "5"
    }else {
    score[i] = String(rank + 1);
} 


    
  }
  
  return score
  
};