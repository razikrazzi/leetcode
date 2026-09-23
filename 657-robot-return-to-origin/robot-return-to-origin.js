/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

    let U = 0
    let D = 0
    let L = 0
    let R = 0

    for(let move of moves){

        if(move === "U")U++;
        if (move === "D")D++;
        if(move === "L")L++;
        if(move === "R")R++;

    }

    return U == D && L == R;
    
};