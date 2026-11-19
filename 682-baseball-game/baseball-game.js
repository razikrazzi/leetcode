/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {

  let result = []

  for(let i = 0 ; i < operations.length ; i++ ){
    
    if(operations[i] === "C"){
      result.pop();
    }else if(operations[i] === "+"){
      let last = result[result.length -1]
      let seclast = result[result.length -2]

      result.push(last + seclast)
    }else if (operations[i] === "D"){
          result.push(result[result.length - 1] * 2);
      
    }else {
      result.push(Number(operations[i]))
    }

  }

  let value = result.reduce((sum,dig) => sum + dig ,0)

  return value
  
};